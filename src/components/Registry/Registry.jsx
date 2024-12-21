import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Register() {
  const [Name, setName] = useState("");
  const [Family_Name, setFamilyName] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const [ShowPassword, setShowPassword] = useState("password");
  const [message, setMessage] = useState("");
  const [errormessage, setErrormessage] = useState("");
  const messageExist = useRef(null);
  const navigate = useNavigate();
  // ------------------------------------------------------

  useEffect(() => {
    if (message !== "") {
      messageExist.current.style.display = "block";
      messageExist.current.style.marginTop = "0";
    }
  }, [message]);

  // ------------------------------------------------------

  async function handleRegister(e) {
    e.preventDefault();

    if (
      typeof Name !== "string" ||
      !/^[a-zA-Z]+$/.test(Name) ||
      typeof Family_Name !== "string" ||
      !/^[a-zA-Z]+$/.test(Family_Name)
    ) {
      setErrormessage("Vorname und/oder Nachname darf nicht Leer sein");
      return;
    }

    if (Username.length < 4) {
      setErrormessage("Der Username muss mindestens 4 Zeichen haben.");
      return;
    }

    if (Password !== ConfirmPassword) {
      setErrormessage("Passwörter stimmen nicht überein");
      return;
    }

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?!-])[A-Za-z\d?!-]{8,}$/;

    if (Password.length < 8 || !passwordPattern.test(Password)) {
      setErrormessage(
        "Das Passwort muss mindestens 8 Zeichen, 1 Klein-, 1 Großbuchstaben, 1 Zahl und 1 Sonderzeichen (! oder ?) haben."
      );
      return;
    }

    try {
      let response = await axios.post("http://localhost:5000/register", {
        Name,
        Family_Name,
        Username,
        Password,
        Email,
      },
        { withCredentials: true }
        // WICHTIG: Cookies übermitteln
      );

      setMessage(response.data.message);
      // hier kommt "Erfolgreich Registriert" als Nachricht
      // (res.status(201) in /register(Backend))

      setTimeout(() => {
        navigate("/Account");
      }, 3000);
    } catch (error) {
      console.log(error);
      setErrormessage(error.response.data.message)
      // hier kommt Benutzername existiert als Nachricht
      // res.status(400) in /register(Backend)
      return;
    }
  }
  // ------------------------------------------------------

  return (
    <>
      <div id="Main_Container_Registry">
        <div id="Registry_Container">
          <form action="" onSubmit={handleRegister}>
            <h1 id="Registry_Title">Registrierung</h1>
            <input
              type="text"
              name="name"
              className="input_registry"
              placeholder="Vorname*"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="family_name"
              className="input_registry"
              placeholder="Nachname*"
              value={Family_Name}
              onChange={(e) => setFamilyName(e.target.value)}
            />
            <input
              type="text"
              name="Username"
              className="input_registry"
              placeholder="Username*"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              name="Email"
              className="input_registry"
              placeholder="E-mail"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="password_container">
              <input
                type={ShowPassword}
                name="password"
                className="input_registry"
                placeholder="Passwort*"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div id="password_container">
              <input
                type={ShowPassword}
                name="confirm password"
                className="input_registry"
                placeholder="Passwort Bestätigen*"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <button id="Submit_Btn" ref={messageExist}>
                Absenden
              </button>
            </div>

            <div>
              <p id="error_message">{errormessage}</p>
            </div>
            <div>
              <div id="Navigate_To_LoginDIV">
                <Link to={"/Login"} id="Sign_In" style={{ color: "#007bff", textDecoration: "none" }}>
                  Bereits Registriert ? Zum Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
