import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");

        if (!email) {
            setErrorMessage("Bitte geben Sie eine E-Mail-Adresse ein.");
            return;
        }

        try {
            const response = axios.post(`${process.env.BACKEND_URL}/PwdForgot`,
                email)
            setSuccessMessage("Email zum zurücksetzen erfolgreich gesendet.");
        } catch (error) {
            setErrorMessage("Es gab ein Problem bei der Anfrage." + error);
        }
    };

    return (
        <>
            <div id="ContainerPwdForgot">
                <form id="forgotPwdForm" onSubmit={handleSubmit}>
                    <h1 style={{ fontSize: "24px", marginBottom: "20px", color: "#007bff" }}>
                        Passwort vergessen
                    </h1>

                    {successMessage && (
                        <div id="ContainerSuccessMessagePWDForgot">{successMessage}</div>
                    )}

                    {errorMessage && (
                        <div id="ContainerErrorMessagePWDForgot">{errorMessage}</div>
                    )}

                    <label htmlFor="email" id="LabelPWDForgot">
                        E-Mail-Adresse
                    </label>
                    <input
                        type="email"
                        id="EmailPWDForgot"
                        name="email"
                        required
                        placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button type="submit" id="SubmitBtnPWDForgot">
                        E-Mail senden
                    </button>

                    <button
                        onClick={() => navigate("/app/login")}
                        id="BackToLoginBtn"
                    >
                        Zurück zum Login?
                    </button>
                </form>

            </div>
        </>
    );
}
