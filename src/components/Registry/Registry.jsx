import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

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
      <div id="MainContainerRegistry">
        <div id="RegistryContainer">
          <form action="" onSubmit={handleRegister}>
            <h1 style={{ color: "#007bff", textAlign: "center" }}>Registrierung</h1>
            <input
              type="text"
              name="name"
              className="InputRegistry"
              placeholder="Vorname*"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="family_name"
              className="InputRegistry"
              placeholder="Nachname*"
              value={Family_Name}
              onChange={(e) => setFamilyName(e.target.value)}
            />
            <input
              type="text"
              name="Username"
              className="InputRegistry"
              placeholder="Username*"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              name="Email"
              className="InputRegistry"
              placeholder="E-mail"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="password_container">
              <input
                type={ShowPassword}
                name="password"
                className="InputRegistry"
                placeholder="Passwort*"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <input
                type={ShowPassword}
                name="confirm password"
                className="InputRegistry"
                placeholder="Passwort Bestätigen*"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <button id="SubmitBtn" ref={messageExist}>
                Absenden
              </button>
            </div>

            <div>
              <p id="errorMessage">{errormessage}</p>
            </div>
            <div>
              <div style={{ textAlign: "center" }}>
                <Link to={"/Login"} style={{ color: "#007bff", textDecoration: "none" }}>
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
