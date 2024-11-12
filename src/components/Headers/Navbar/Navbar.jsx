import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Shopping_Cart from "./Shopping-Cart/Shopping_Cart";
import Wish_List from "./Wish-List/Wish_List";
import Burgermenu from "../Burgermenu/Burgermenu";
import Usericon from "./user_icon/user_icon";

function Navbar() {
  return (
    <>
      <div id="navbarDIV">
        <nav id="navbar">
          <Burgermenu />
          {/* ------------------------------------ */}

          <Usericon />
          {/* ------------------------------------ */}
          <Wish_List />

          {/* ------------------------------------ */}
          <Shopping_Cart />
        </nav>
      </div>
    </>
  );
}

export default Navbar;
