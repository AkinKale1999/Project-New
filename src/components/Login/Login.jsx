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
      const response = await axios.post(
        "http://localhost:5000/login",
        { Username, Password },
        { withCredentials: true } // WICHTIG: Cookies übermitteln
      );
      setMessage(response.data.message);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);

      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Ein Fehler ist aufgetreten.");
      }
    }
  };

  async function fetchProtectedData() {
    try {
      const response = await axios.get("http://localhost:5000/protected", {
        withCredentials: true, // Cookies übermitteln
      });

      if (response.status === 200) {
        navigate("/Account");
      }
    } catch (error) {
      console.error("Fehler beim Abrufen der geschützten Daten: ", error);
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      fetchProtectedData();
    }
  }, [isLoggedIn]);

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
              <Link to={"/Password-Vergessen"} style={{ color: "#007bff", textDecoration: "none", fontSize: "0.8rem", fontWeight: "900" }}>Password vergessen?</Link>
            </div>
            <div>
              <Link to={"/Registrierung"} style={{ color: "#007bff", textDecoration: "none", fontSize: "0.8rem", fontWeight: "900" }}>Kein Account? Hier zum Registrieren</Link>
            </div>
            <input id="LoginBtn" type="submit" value="Login" />
            {message && <div id="Error_Message_Backend">{message}</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;