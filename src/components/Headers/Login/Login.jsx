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
      setMessage(response.data.message);
      // hier kommt "Erfolgreich angemeldet" als Nachricht
      // res.status(200).json({message: "Erfolgreich angemeldet"}) vom Backend
      
      const token = response.data.token;
      localStorage.setItem("token", token);


    } catch (error) {
      console.log(error);

      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
        // hier kommt "Username oder Password nicht gültig" vom Backend
        // res.status(401).json({ message: "Username oder Password nicht gültig" });
      } else {
        setMessage("Ein Fehler ist aufgetreten.");
      }
    }
  };

  async function fetchProtectedData() {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get("http://localhost:5000/protected", {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Fehler beim Abrufen der geschützen Daten: ", error);
    }
  }

  fetchProtectedData();

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
