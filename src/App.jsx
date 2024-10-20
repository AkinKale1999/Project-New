import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Body/Home/Home.jsx";
import Kontakt from "./components/Kontakt/Kontakt.jsx";
import ÜberUns from "./components/Über_uns/Über_uns.jsx";
import Navbar from "./components/Headers/Navbar/Navbar.jsx";
import Burgermenu from "./components/Headers/Burgermenu/Burgermenu.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Burgermenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Über-uns" element={<ÜberUns />} />
        <Route path="/Kontakt" element={<Kontakt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
