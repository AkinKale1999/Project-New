import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  function NavigateToImpressum() {
    navigate("/impressum");
  }

  function NavigateToAGB() {
    navigate("/agb");
  }

  function NavigateToDatenschutz() {
    navigate("/datenschutz");
  }

  return (
    <>
      <div id="Footer">
        <li className="FooterElements" onClick={NavigateToImpressum}>
          Impressum
        </li>

        <li className="FooterElements" onClick={NavigateToAGB}>
          AGB
        </li>

        <li className="FooterElements" onClick={NavigateToDatenschutz}>
          Datenschutz
        </li>
      </div>
    </>
  );
}

export default Footer;
