import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contact/Contact.jsx";
import ÜberUns from "./components/pages/AboutUs/Über_uns.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Registry/Registry.jsx";
import DataProtection from "./components/pages/Data_Protection/Data_Protection.jsx";
import AGB from "./components/pages/AGB/AGB.jsx";
import TermsConditions from "./components/pages/Terms_Conditions/Terms_Conditions.jsx";
import Account from "./components/Account/Account.jsx";
import Footer from "./components/Footer/Footer.jsx"
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
import WishList from "./components/WishList/WishList.jsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.jsx";
import "./App.css";
import Home from "./components/pages/Home/Home.jsx";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/app/account" element={<Account />} />

        <Route path="/Home" element={<Home />} />

        <Route path="/app/login" element={<Login />} />

        <Route path="/app/registrierung" element={<Register />} />

        <Route path="/kontakt" element={<Contact />} />

        <Route path="/über-uns" element={<ÜberUns />} />

        <Route path="/datenschutz" element={<DataProtection />} />

        <Route path="/agb" element={<AGB />} />

        <Route path="/impressum" element={<TermsConditions />} />

        <Route path="/app/password-vergessen" element={<ForgotPassword />} />

        <Route path="warenkorb" element={<ShoppingCart />} />

        <Route path="wunschliste" element={<WishList />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
