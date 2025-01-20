import Usericon from "../UserIcon/UserIcon";
import { Link } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SecretLogo from "../SecretLogo/SecretLogo";


export default function Navbar() {

  return (
    <>
      <div id="navbarDIV">
        <nav id="navbar">
          <SecretLogo />
          {/* ------------------------------------ */}

          <div id="navbarContentRightSide">

            <Link to="/wunschliste" title="Wunschliste">
              <FavoriteIcon className="NavbarElements" />
            </Link>

            {/* ------------------------------------ */}

            <Link to="/warenkorb" title="Warenkorb" >
              <ShoppingBagIcon className="NavbarElements" />
            </Link>

            {/* ------------------------------------ */}

            <div title="Login">
              <Usericon />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
