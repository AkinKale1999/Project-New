import "./Registry.css";
import Footer from "../../Footer/Footer.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

function Register() {
  const [Name, setName] = useState("");
  const [Family_Name, setFamilyName] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const message_error = useRef(null);
  const messageExist = useRef(null);
  const check_Type_Of_Input_Field = useRef(null);

  const [ShowPassword, setShowPassword] = useState("password")
  // ------------------------------------------------------

  useEffect(() => {
    if (message !== "") {
      messageExist.current.style.display = "block";
      messageExist.current.style.marginTop = "2%";
    }
  }, [message]);
  // ------------------------------------------------------

  function changeVisibilityOfPassword() {
    if(ShowPassword === "password") {
      setShowPassword("text")
    }
    else {
      setShowPassword("password")
    }

    }
  // ------------------------------------------------------

  async function handleRegister(e) {
    e.preventDefault();

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?!-])[A-Za-z\d?!-]{8,}$/;

    if (Password.length < 8 || !passwordPattern.test(Password)) {
      setMessage(
        "Das Passwort muss mindestens 8 Zeichen, 1 Klein-, 1 Großbuchstaben, 1 Zahl und 1 Sonderzeichen (! oder ?) haben."
      );
    } else {
      setMessage("Erfolgreich Registriert");
    }

    if (Password !== ConfirmPassword) {
      setMessage("Passwörter stimmen nicht überein");
      return;
    }

    if ( typeof Name !== "string" || !/^[a-zA-Z]+$/.test(Name) || typeof Family_Name !== "string" || !/^[a-zA-Z]+$/.test(Name)) 
      {
      setMessage("Der Name darf nur aus Klein und Großbuchstaben bestehen");
    } 
    else {
      return;
    }

    try {
      let response = await axios.post("http://localhost:5000/register", {
        Name,
        Family_Name,
        Username,
        Email,
        Password,
      });

      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
      setMessage("Registrierung Fehlgeschlagen");
    }
  }

  // ------------------------------------------------------

  return (
    <>
      <div id="Main_Container_Registry">
        <div id="Registry_Container">
          <form action="" id="Registry_Form" onSubmit={handleRegister}>
            <h1 id="Registry_Title">Registrierung</h1>
            <input
              type="text"
              name="name"
              className="input_registry"
              placeholder="Vorname"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="family_name"
              className="input_registry"
              placeholder="Nachname"
              value={Family_Name}
              onChange={(e) => setFamilyName(e.target.value)}
            />
            <input
              type="text"
              name="Username"
              className="input_registry"
              placeholder="Username"
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
                placeholder="Passwort"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                id="eye_show_password"
                onClick={changeVisibilityOfPassword}
              >
                <p id="inner_eye">O</p>
              </span>
            </div>

            <div id="password_container">
              <input
                type={ShowPassword}
                name="confirm password"
                className="input_registry"
                placeholder="Passwort Bestätigen"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <span id="eye_show_password"
                onClick={changeVisibilityOfPassword}
              >
                <p id="inner_eye">O</p>
              </span>
            </div>
            <button id="Submit_Btn">Absenden</button>
            <p id="error_message" ref={message_error}>
              {message}
            </p>
            <p id="Navigate_To_Login" ref={messageExist}>
              Schon Angemeldet ? <Link to={"/Login"}>Logge dich ein</Link>
            </p>
          </form>
        </div>
      </div>
      <div id="Footer_Container">
        <Footer />
      </div>
    </>
  );
}

export default Register;
