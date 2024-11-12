import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Body/Home/Home.jsx";
import Kontact from "./components//Headers/Kontact/Kontact.jsx";
import ÜberUns from "./components/Headers/Über_uns/Über_uns.jsx";
import Navbar from "./components/Headers/Navbar/Navbar.jsx";
import Login from "./components/Headers/Login/Login.jsx";
import Register from "./components/Headers/Registry/Registry.jsx";
import DataProtection from "./components/Headers/Data_Protection/Data_Protection.jsx";
import AGB from "./components/Headers/AGB/AGB.jsx";
import TermsConditions from "./components/Headers/Terms_Conditions/Terms_Conditions.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registrierung" element={<Register />} />
        <Route path="/Kontakt" element={<Kontact />} />
        <Route path="/Über-uns" element={<ÜberUns />} />
        <Route path="/Datenschutz" element={<DataProtection />} />
        <Route path="/AGB" element={<AGB />} />
        <Route path="/Impressum" element={<TermsConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
