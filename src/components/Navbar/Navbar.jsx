import ShoppingCart from "../ShoppingCart/ShoppingCart";
import WishList from "../WishList/WishList";
import Burgermenu from "../BurgerMenu/Burgermenu";
import Usericon from "../UserIcon/UserIcon";
import ChangeMode from "../ChangeMode/ChangeMode";

function Navbar() {
  return (
    <>
      <div id="navbarDIV">
        <nav id="navbar">
          <Burgermenu />
          {/* ------------------------------------ */}

          <ChangeMode />
          {/* ------------------------------------ */}

          <WishList />
          {/* ------------------------------------ */}

          <ShoppingCart />
          {/* ------------------------------------ */}

          <Usericon />

        </nav>
      </div>
    </>
  );
}

export default Navbar;