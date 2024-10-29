import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Body/Home/Home.jsx";
import Kontakt from "./components/Kontakt/Kontakt.jsx";
import ÜberUns from "./components/Über_uns/Über_uns.jsx";
import Navbar from "./components/Headers/Navbar/Navbar.jsx";
import Burgermenu from "./components/Headers/Burgermenu/Burgermenu.jsx";
import Login from "./components/Headers/Login/Login.jsx";
import WishList from "./components/Headers/Wish_List/Wish_List.jsx";
import Shopping_Cart from "./components/Headers/Shopping_Cart/Shopping_Cart.jsx";
import Register from "./components/Headers/Registrierung/Register.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Burgermenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registrierung" element={<Register />} />
        <Route path="/Warenkorb" element={<Shopping_Cart />} />
        <Route path="/Wunschliste" element={<WishList />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/Über-uns" element={<ÜberUns />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
