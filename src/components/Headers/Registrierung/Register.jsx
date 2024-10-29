import "./Register.css";
import Footer from "../../Footer/Footer.jsx";

function Register() {
  return (
    <>
      <div id="Main_Container_Registry">
        <div id="Registry_Container">
          <form action="" id="Registry_Form">
            <h1 id="Registry_Title">Register</h1>
            <input type="text" name="name" id="input_field_name" className="input_registry" placeholder="Vorname"/>
            <input type="text" name="family_name" id="input_field_family_name" className="input_registry" placeholder="Nachname"/>
            <input type="text" name="Email" id="input_field_Email" className="input_registry" placeholder="E-mail"/>
            <input type="password" name="password" id="input_field_password" className="input_registry" placeholder="Passwort"/>
            <input type="password" name="confirm password" id="input_field_confirm_password" className="input_registry" placeholder="Passwort Bestätigen"/>
          </form>
        </div>
      </div>
      <div id="Footer_Container">
        <Footer />
      </div>
    </>
  );
}

export default Register;
