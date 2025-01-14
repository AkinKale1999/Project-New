import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import InputFields from "../InputFields/InputFields";
import IconGithubAndGoogle from "../GithubAndGoogleIcon/GithubGoogleIcon";

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Successmessage, setSuccessMessage] = useState("");
  const [Errormessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const Main_Container = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const buttonText = useMemo(() => isLoading ? "Laden..." : "Login", [isLoading])

  const handleLogin = async (e) => {
    e.preventDefault();

    const trimmedUsername = Username.trim()
    const trimmedPasswort = Password.trim()
    // trim() Entfernt Leerzeichen Am Anfang und Ende eines STRINGS(NUR STRING)
    // z.b " Hallo Welt " Leerzeichen vor der H und nach dem T werden Entfernt

    if (!trimmedUsername || !trimmedPasswort) {
      setErrorMessage("Bitte füllen sie alle Felder aus")
      return;
    }
    setIsLoading(true)
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/login`,
        { Username: trimmedUsername, Password: trimmedPasswort },
        { withCredentials: true }
        // WICHTIG: Cookies übermitteln
      );
      setSuccessMessage(response.data.message);
      setIsLoggedIn(true);
    }
    catch (error) {
      setErrorMessage(error.response?.data.message || "Ein Fehler ist aufgetreten");
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    let timeout;
    if (isLoggedIn) {
      const fetchProtectedData = async () => {
        try {
          const response = await axios.get(`${process.env.BACKEND_URL}/protected`, {
            withCredentials: true,
          });
          if (response.status === 200) {
            timeout = setTimeout(() => {
              navigate("/Account");
            }, 3000);
          }
        } catch (error) {
          setErrorMessage("Fehler beim Abrufen der Daten: " + error.message)
        }
      };

      fetchProtectedData();
    }

    return () => clearTimeout(timeout)
  }, [isLoggedIn, navigate]);


  return (
    <>
      <div id="MainContainerLogin" ref={Main_Container}>
        <div id="LoginContainer">
          <form action="/login" id="LoginForm" onSubmit={handleLogin}>
            <h1 id="LoginHeader">Login</h1>

            <div className="LoginWithGithubOrGoogle">
              <form action="">
                <IconGithubAndGoogle src={"/img/github.png"} alt={"Github-Icon"} />
                <Button text={"GitHub anmelden"}>
                </Button>
              </form>

              <form action="">
                <IconGithubAndGoogle src={"/img/github.png"} alt={"Google-Icon"} />
                <Button text={"Google anmelden"}>
                </Button>
              </form>
            </div>

            <div className="BreakpointLogins">
              <span className="OrDifferentLogin">oder</span>

            </div>


            <InputFields type={"text"} id={"UserLogin"} placeholder={"Email *"} value={Username} onChange={(e) => setUsername(e.target.value)} required={"required"} />

            <InputFields type={"password"} id={"PasswordLogin"} placeholder={"Password *"} value={Password} onChange={(e) => setPassword(e.target.value)} required={"required"} />

            <Button btnType={"submit"} id="BtnLogin" text={"Login"} disabled={buttonText} />
            {/* disabled={buttonText} bedeutet das wenn buttonText = true ist das man mit dem Button nicht 
            Interagieren kann, wenn er false ist dann schon*/}

            <div>
              <Link className="ForgotPwdLink" to={"/app/password-vergessen"}>Password vergessen?</Link>
            </div>

            {(Errormessage) && <div className="ResponseMessage" id="ErrorMessageBackend">{Errormessage}</div>}

            {(Successmessage) && <div className="ResponseMessage" id="SuccessMessageBackend">{Successmessage}</div>}
          </form >

        </div>
        <hr id="BreakPoint" />
        <div id="RegisterLink">
          <Link className="ForgotPwdLink" to={"/app/registrierung"}>Kein Account? Hier zum Registrieren</Link></div>
      </div>
    </>
  );
}

export default Login;