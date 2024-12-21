import ShoppingCart from "../Shopping-Cart/Shopping_Cart";
import WishList from "../Wish-List/Wish_List";
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