import { useState } from "react";
import Footer from "../../Footer/Footer";
import "./Login.css";
import axios from "axios";
function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:5000/login", {
        Username,
        Password,
      });
      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
      
      if (error.response && error.response.data) {
        setMessage("Login fehlgeschlagen: " + error.response.data.message);
      } else {
        setMessage("Ein Fehler ist aufgetreten.");
      }
    }
  };
  return (
    <>
      <div id="Main_Container">
        <p>{message}</p>
        <form action="/login" id="Login_Form" onSubmit={handleLogin}>
          <div id="Login_Container">
            <h1 id="Login_Title">Login</h1>
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
            <p id="RegisterBtn">Hier Registrieren</p>
          </div>
        </form>
      </div>
      <div id="Footer_Container">
        <Footer />
      </div>
    </>
  );
}
export default Login;
