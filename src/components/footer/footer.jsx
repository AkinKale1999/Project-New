import { Link } from "react-router-dom";

function Footer() {

  const ArrayFooter = [
    { Header: "Telefonnumer", text: "123456789" },
    { Header: "E-mail-Adresse", text: "beispiel@hotmail.de" },
    { Header: "Telefonnumeradsa", text: "" }
  ]

  return (
    <>
      <div id="Footer">
        <div>
          {ArrayFooter.map((content, index) => (
            <div key={index}>
              <h3>{content.Header}</h3>
              <p>{content.text}</p>
            </div>
          ))}
        </div>

        <div id="FooterBottomElements">
          <Link to="impressum">Impressum</Link>
          <Link to="datenschutz">Datenschutz</Link>
          <Link to="agb">AGB</Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
