import Burgermenu from "../BurgerMenu/Burgermenu";
import Usericon from "../UserIcon/UserIcon";
import ChangeMode from "../ChangeMode/ChangeMode";
import { useNavigate } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Navbar() {

  const navigate = useNavigate()
  return (
    <>
      <div id="navbarDIV">
        <nav id="navbar">
          <Burgermenu />
          {/* ------------------------------------ */}

          <ChangeMode />
          {/* ------------------------------------ */}

          <button style={{ margin: "0", padding: "0", backgroundColor: "inherit", border: "none", color: "inherit" }} onClick={() => navigate("/wunschliste")}>
            <FavoriteIcon className="NavbarElements" />

          </button>
          {/* ------------------------------------ */}

          <button style={{ margin: "0", padding: "0", backgroundColor: "inherit", border: "none", color: "inherit" }} onClick={() => navigate("/warenkorb")}>
            <ShoppingBagIcon className="NavbarElements" />
          </button>

          {/* ------------------------------------ */}

          <Usericon />

        </nav>
      </div>
    </>
  );
}
