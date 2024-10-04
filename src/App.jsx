import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/footer/footer.jsx";
import Kontakt from "./components/kontakt/kontakt.jsx";
import ÜberUns from "./components/über_uns/über_uns.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Über-uns" element={<ÜberUns />} />
        <Route path="/Kontakt" element={<Kontakt />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
