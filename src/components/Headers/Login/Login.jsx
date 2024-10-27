import Footer from "../../Footer/Footer";
import "./Login.css";

function Login() {
  return (
    <>
        <div id="Login_Container">
          <h1 id="Login_Title">Login</h1>

          <input type="text" name="" id="User_Login" />
          <input type="password" name="" id="Password_Login" />
          <button id="LoginBtn">Login</button>
          <p id="RegisterBtn">Hier Registrieren</p>
        </div>
        <Footer />
    </>
  );
}

export default Login;
