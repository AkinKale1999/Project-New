import { useRef, useState } from "react";
import Footer from "../../Footer/Footer";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post("http://localhost:5000/login", {
        Username,
        Password,
      });
      console.log(response);
      setMessage(response.data.message + ", Sie werden in Kürze weitergeleitet");
      // hier kommt "Erfolgreich angemeldet" als Nachricht
      // res.status(200).json({message: "Erfolgreich angemeldet"}) vom Backend

      // setTimeout(() => {
      //   navigate("/registrierung");
      // }, 1000);
    } catch (error) {
      console.log(error);

      if (error.response && error.response.data) {
        setMessage("Login fehlgeschlagen: " + error.response.data.message);
        // hier kommt "Username oder Password nicht gültig" vom Backend
        // res.status(401).json({ message: "Username oder Password nicht gültig" });
      } else {
        setMessage("Ein Fehler ist aufgetreten.");
      }
    }
  };

  return (
    <>
      <div id="Main_Container_Login">
        <div id="Login_Container">
          <form action="/login" id="Login_Form" onSubmit={handleLogin}>
            <h1 id="Login_Title">Willkommen</h1>
            <input
              type="text"
              id="User_Login"
              placeholder="Username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="Password_Login"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input id="LoginBtn" type="submit" value="Login" />
            <Link to={"/Registrierung"} id="RegisterBtn">
              Hier Registrieren
            </Link>

            {message && <div id="Message_Backend">{message}</div>}
            {/* wenn message einen Wert hat, erstellt er das div usw. */}
          </form>
        </div>
      </div>
      <div id="Footer_Container">
        <Footer />
      </div>
    </>
  );
}
export default Login;
