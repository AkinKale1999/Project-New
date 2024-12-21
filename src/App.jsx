import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contact/Contact.jsx";
import ÜberUns from "./components/pages/AboutUs/Über_uns.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Registry/Registry.jsx";
import DataProtection from "./components/pages/Data_Protection/Data_Protection.jsx";
import AGB from "./components/pages/AGB/AGB.jsx";
import TermsConditions from "./components/pages/Terms_Conditions/Terms_Conditions.jsx";
import "./App.css";
import Account from "./components/Account/Account.jsx";
import Footer from "./components/Footer/Footer.jsx"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/Account" element={
          <Account />
        } />

        <Route path="/login" element={<Login />} />

        <Route path="/Registrierung" element={<Register />} />

        <Route path="/Kontakt" element={<Contact />} />

        <Route path="/Über-uns" element={<ÜberUns />} />

        <Route path="/Datenschutz" element={<DataProtection />} />

        <Route path="/AGB" element={<AGB />} />

        <Route path="/Impressum" element={<TermsConditions />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App;
