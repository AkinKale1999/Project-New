import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import InputFields from "../InputFields/InputFields";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const validEmailDomains = [
        "@hotmail.de",
        "@hotmail.com",
        "@gmail.com",
        "@gmail.de",
        "@yahoo.com",
        "@yahoo.de",
        "@outlook.de",
        "@outlook.com"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccessMessage("");
        setErrorMessage("")

        if (!email) {
            setErrorMessage("Bitte geben Sie eine E-Mail-Adresse ein.");
            return;
        }

        if (!validEmailDomains.some(domain => email.endsWith(domain))) {
            setErrorMessage("Ihre Email muss mit einer gültigen Domain enden.")
            return;
        }

        try {
            const response = await axios.post(`${process.env.BACKEND_URL}/PwdForgot`, email)

            if (response.status === 200) {
                setSuccessMessage("Vielen Dank! Ihre E-Mail wurde erfolgreich gesendet. Bitte überprüfen Sie in Kürze Ihr Postfach")
                setEmail("")
            }

        } catch (error) {
            setErrorMessage("Es gab ein Problem bei der Anfrage." + error);
        }
    };

    return (
        <>
            <div id="ContainerPwdForgot">
                <form id="forgotPwdForm" onSubmit={handleSubmit}>

                    <img src="/img/warning-icon.png" alt="warning-icon" />
                    <h1 className="forgotPwdHeader">Passwort vergessen</h1>

                    <label htmlFor="email" id="LabelPWDForgot">E-Mail-Adresse</label>

                    <InputFields arialabel={"E-mail-Adresse"} autoComplete={"email"} type={"email"} id={"EmailPWDForgot"} name={"email"} placeholder={"Geben Sie Ihre E-Mail-Adresse ein *"} value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <Button btnType={"submit"} text={"E-Mail senden"} />

                    <br />
                    {successMessage && (
                        <div className="ContainerMessagePWDForgot" id="ContainerSuccessMessagePWDForgot">{successMessage}</div>)}

                    {errorMessage && (
                        <div className="ContainerMessagePWDForgot" id="ContainerErrorMessagePWDForgot">{errorMessage}</div>)}
                </form>

                <div id="BackToLoginContainerForgot">
                    <Button onClick={() => navigate("/login")} id={"ForgotPwdBtnGoBack"} text={"Zurück zum Login"} />
                </div>
            </div>
        </>
    );
}