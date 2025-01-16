import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import InputFields from "../InputFields/InputFields";
import IconGithubAndGoogle from "../GithubAndGoogleIcon/GithubGoogleIcon";
import { loginApi } from "./Login_Api.jsx"

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Successmessage, setSuccessMessage] = useState("");
  const [Errormessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const Main_Container = useRef(null);
  const buttonText = useMemo(() => isLoading ? "Laden..." : "Login", [isLoading])
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const trimmedUsername = Username.trim();
    const trimmedPasswort = Password.trim();

    if (!trimmedUsername || !trimmedPasswort) {
      setErrorMessage("Bitte füllen sie alle Felder aus");
      return;
    }

    try {
      const response = await loginApi(trimmedUsername, trimmedPasswort);
      setSuccessMessage(response.message);
      setIsLoggedIn(true)
    }

    catch (error) {
      setErrorMessage(error);
    }
    finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {

    if (isLoggedIn) {
      const timeout = setTimeout(() => {
        navigate("/account");
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <div id="MainContainerLogin" ref={Main_Container}>
        <div id="LoginContainer">
          <form action="/login" id="LoginForm" onSubmit={handleLogin}>
            <h1 id="LoginHeader">Login</h1>

            <div className="LoginWithGithubOrGoogle">
              <div>
                <IconGithubAndGoogle src={"/img/github.png"} alt={"Github-Icon"} />
                <Button text={"GitHub anmelden"}/>
              </div>

              <div>
                <IconGithubAndGoogle src={"/img/github.png"} alt={"Google-Icon"} />
                <Button text={"Google anmelden"}/>
              </div>
            </div>

            <div className="BreakpointLogins">
              <span className="OrDifferentLogin">Oder</span>
            </div>

            <InputFields type={"text"} id={"UserLogin"} placeholder={"Email *"} value={Username} onChange={(e) => setUsername(e.target.value)} required={"required"} />

            <InputFields type={"password"} id={"PasswordLogin"} placeholder={"Password *"} value={Password} onChange={(e) => setPassword(e.target.value)} required={"required"} />

            <Button btnType={"submit"} id="BtnLogin" text={buttonText} disabled={isLoading} />
            {/* disabled={isLoading} bedeutet das wenn isLoading = true ist das man mit dem Button nicht 
            Interagieren kann, wenn er false ist dann schon*/}

            <div>
              <Link className="ForgotPwdLink" to={"/password-vergessen"}>Password vergessen?</Link>
            </div>

            {(Errormessage) && <div className="ResponseMessage" id="ErrorMessageBackend">{Errormessage}</div>}

            {(Successmessage) && <div className="ResponseMessage" id="SuccessMessageBackend">{Successmessage}</div>}
          </form >

        </div>
        <hr id="BreakPoint" />
        <div className="GoToRegisterDiv">
          <Link className="ForgotPwdLink" to={"/registrierung"}>Kein Account? Hier zum Registrieren</Link>
        </div>
      </div>
    </>
  );
}

export default Login;