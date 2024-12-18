import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const Main_Container = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post("http://localhost:5000/login", {
        Username,
        Password,
      });
      setMessage(response.data.message);
      // hier kommt "Erfolgreich angemeldet" als Nachricht

      const token = response.data.token;
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);

      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
        // hier kommt "Username oder Password nicht gültig" vom Backend
      } else {
        setMessage("Ein Fehler ist aufgetreten.");
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchProtectedData();
    }
  }, [isLoggedIn]);

  async function fetchProtectedData() {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get("http://localhost:5000/protected", {
        headers: {
          Authorization: token,
        },
      });

      setTimeout(() => {
        navigate("/Account");
      }, 1000);
    } catch (error) {
      console.error("Fehler beim Abrufen der geschützen Daten: ", error);
    }
  }

  return (
    <>
      <div id="Main_Container_Login" ref={Main_Container}>
        <div id="Login_Container">
          <form action="/login" id="Login_Form" onSubmit={handleLogin}>
            <h1 id="Login_Title">Anmelden</h1>
            <input
              type="text"
              id="User_Login"
              placeholder="Email *"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="Password_Login"
              placeholder="Password *"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <Link to={"/Registrierung"} style={{ color: "#007bff", textDecoration: "none" }}>Password vergessen ?</Link>
            </div>
            <div>
              <Link to={"/Registrierung"} style={{ color: "#007bff", textDecoration: "none" }}>
                Kein Account ? Hier zum Registrieren
              </Link>
            </div>
            <input id="LoginBtn" type="submit" value="Sign In" />
            {message && <div id="Message_Backend">{message}</div>}
          </form>
        </div>
      </div>
      <div>
      </div>
    </>
  );
}
export default Login;
