import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const Navigate_Impressum = useNavigate();
  const Navigate_AGB = useNavigate();
  const Navigate_Datenschutz = useNavigate();

  function NavigateToImpressum() {
    Navigate_Impressum("/Impressum");
  }

  function NavigateToAGB() {
    Navigate_AGB("/AGB");
  }

  function NavigateToDatenschutz() {
    Navigate_Datenschutz("/Datenschutz");
  }
  return (
    <>
      <div id="Footer">
        <li className="Footer_Elements" onClick={NavigateToImpressum}>
          Impressum
        </li>

        <li className="Footer_Elements" onClick={NavigateToAGB}>
          AGB
        </li>

        <li className="Footer_Elements" onClick={NavigateToDatenschutz}>
          Datenschutz
        </li>
      </div>
    </>
  );
}

export default Footer;
