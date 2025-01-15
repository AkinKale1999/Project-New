import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "./components/pages/Contact/Contact.jsx";
import ÜberUns from "./components/pages/AboutUs/Über_uns.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Registry/Registry.jsx";
import DataProtection from "./components/pages/Data_Protection/Data_Protection.jsx";
import AGB from "./components/pages/AGB/AGB.jsx";
import TermsConditions from "./components/pages/Terms_Conditions/Terms_Conditions.jsx";
import Account from "./components/Account/Account.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
import WishList from "./components/WishList/WishList.jsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.jsx";
import Home from "./components/pages/Home/Home.jsx";
import NotFound from "./components/NotFound/NotFound.jsx"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        {/* replace-Attribut = sorgt dafür, dass die aktuelle Route 
          im Browser-Verlauf ersetzt wird, anstatt einen neuen Eintrag 
          hinzuzufügen. So kann der Nutzer nicht zur alten Route zurückkehren. */}
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/über-uns" element={<ÜberUns />} />
        <Route path="/datenschutz" element={<DataProtection />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/impressum" element={<TermsConditions />} />
        <Route path="/warenkorb" element={<ShoppingCart />} />
        <Route path="/wunschliste" element={<WishList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrierung" element={<Register />} />
        <Route path="/password-vergessen" element={<ForgotPassword />} />

        {/* ----------------------ProtectedRoute-------------------------- */}

        <Route path="/app/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />

        {/* ----------------------ProtectedRoute-------------------------- */}

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}

export default App;
