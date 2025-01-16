import Burgermenu from "../BurgerMenu/Burgermenu";
import Usericon from "../UserIcon/UserIcon";
import ChangeMode from "../ChangeMode/ChangeMode";
import { Link } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Navbar() {

  return (
    <>
      <div id="navbarDIV">
        <nav id="navbar">
          <Burgermenu />
          {/* ------------------------------------ */}

          <ChangeMode />
          {/* ------------------------------------ */}

          <Link to="/wunschliste" >
            <FavoriteIcon className="NavbarElements" />
          </Link>

          {/* ------------------------------------ */}

          <Link to="/warenkorb" >
            <ShoppingBagIcon className="NavbarElements" />
          </Link>

          {/* ------------------------------------ */}

          <Usericon />

        </nav>
      </div>
    </>
  );
}
