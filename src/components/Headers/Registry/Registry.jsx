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

  async function handleRegister(e) {
    e.preventDefault();

    if (Password !== ConfirmPassword) {
      setMessage("Passwörter stimmen nicht überein");
      return;
    }

    if (typeof Name !== "string" || !/^[a-zA-Z]+$/.test(Name)) {
      setMessage("Der Name darf nur aus Klein und Großbuchstaben bestehen");
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

  useEffect(() => {
    if (message !== "") {
      messageExist.current.style.display = "block";
      messageExist.current.style.marginTop = "1.5%";
      messageExist.current.style.marginBottom = "2%";
    } else {
      messageExist.current.style.marginTop = "0%";
    }
  }, [message]);

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
            <input
              type="password"
              name="password"
              className="input_registry"
              placeholder="Passwort"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              name="confirm password"
              className="input_registry"
              placeholder="Passwort Bestätigen"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button id="Submit_Btn">Absenden</button>
            <p id="Navigate_To_Login" ref={message_error}>
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
