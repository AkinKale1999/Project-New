import { Link } from "react-router-dom";

export default function SecretLogo() {
    const imgDark = "/img/imgHome/LogoSecretTextDark.png";

    return (
        <div id="SecretLogo">
            <Link to={"/Home"}>
                <img
                    src={imgDark}
                    alt="Secret"
                />
            </Link>
        </div>
    );
}
