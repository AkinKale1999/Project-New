import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Body/Home/Home.jsx";
import Kontakt from "./components/Kontakt/Kontakt.jsx";
import ÜberUns from "./components/Über_uns/Über_uns.jsx";
import Navbar from "./components/Headers/Navbar/Navbar.jsx";
import Burgermenu from "./components/Headers/Burgermenu/Burgermenu.jsx";
import Menu from "./components/Headers/Menu/Menu.jsx";
import Login from "./components/Headers/Login/Login.jsx";
import WishList from "./components/Headers/Wish_List/Wish_List.jsx";
import ShoppingCart from "./components/Headers/Shopping_Cart/Shopping_Cart.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Burgermenu />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Einkaufswagen" element={<ShoppingCart />} />
        <Route path="/Wunschliste" element={<WishList />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/Über-uns" element={<ÜberUns />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
