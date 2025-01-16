import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { registryApi } from "./Registry_Api";
import InputFields from "../InputFields/InputFields"
import Button from "../Button/Button"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

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

  function handleTypePassword() {
    if (ShowPassword === "password") {
      setShowPassword("text")
    }
    else {
      setShowPassword("password")
    }
  }

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
      const response = await registryApi({
        Name,
        Family_Name,
        Username,
        Password,
        Email
      })

      setMessage(response?.data?.message);

      setTimeout(() => {
        navigate("/Account");
      }, 3000);

    } catch (error) {
      setErrormessage("Ein Fehler ist aufgetreten. Bitte versuche es später erneut.");
    }
  }
  // ------------------------------------------------------

  return (
    <>
      <div id="MainContainerRegistry">
        <div id="RegistryContainer">
          <form onSubmit={handleRegister}>
            <h1 id="RegistryHeader">Registrierung</h1>

            <InputFields autocomplete={"name"} type={"text"} name={"name"} className={"InputRegistry"} placeholder={"Vorname *"} value={Name} onChange={(e) => setName(e.target.value)} />

            <InputFields autocomplete={"family-name"} type={"text"} name={"family_name"} className={"InputRegistry"} placeholder={"Nachname *"} value={Family_Name} onChange={(e) => setFamilyName(e.target.value)} />

            <InputFields autocomplete={"username"} type={"text"} name={"Username"} className={"InputRegistry"} placeholder={"Username *"} value={Username} onChange={(e) => setUsername(e.target.value)} />

            <InputFields autocomplete={"email"} type={"email"} name={"email"} className={"InputRegistry"} placeholder={"E-mail *"} value={Email} onChange={(e) => setEmail(e.target.value)} />

            <InputFields autocomplete={"new-password"} type={ShowPassword} name={"password"} className={"InputRegistry"} placeholder={"Passwort *"} value={Password} onChange={(e) => setPassword(e.target.value)} />

            <div className="ShowPasswordContainer">
              {ShowPassword === "password" ? <VisibilityIcon onClick={handleTypePassword} className="ShowPasswordIcon" /> : <VisibilityOffIcon onClick={handleTypePassword} className="ShowPasswordIcon" />}
            </div>

            <InputFields autocomplete={"new-password"} type={ShowPassword} name={"confirm password"} className={"InputRegistry"} placeholder={"Passwort Bestätigen *"} value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <div className="ShowPasswordContainer">
              {ShowPassword === "password" ? <VisibilityIcon onClick={handleTypePassword} className="ShowPasswordIcon" /> : <VisibilityOffIcon onClick={handleTypePassword} className="ShowPasswordIcon" />}
            </div>

            <Button type={"submit"} ref={messageExist} />

            <div>
              <p id="RegistryErrorMessage">{errormessage}</p>
            </div>

            <div id="RegistryContainerLink">
              <Link to={"/login"} id="RegistryLink">
                Bereits Registriert? Zum Login
              </Link>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
