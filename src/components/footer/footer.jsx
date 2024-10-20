import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div id="Footer">
        <Link className="Footer_Elements" to={"/Impressum"}>
          <li>Impressum</li>
        </Link>

        <Link className="Footer_Elements" to={"/AGB"}>
          <li>AGB</li>
        </Link>

        <Link className="Footer_Elements" to={"/Datenschutz"}>
          <li>Datenschutz</li>
        </Link>
      </div>
    </>
  );
}

export default Footer;
