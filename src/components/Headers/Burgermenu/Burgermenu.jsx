import { useRef, useState } from "react";
import "./Burgermenu.css";
import Menu from "../Menu/Menu";

function Burgermenu() {
  const burgermenu = useRef(null);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  function OpenMenu() {
    if (burgermenu.current) {
      burgermenu.current.style.transition = "opacity 1s linear";
      burgermenu.current.style.opacity = "0";
      // Menu.current

      setTimeout(() => {
        burgermenu.current.style.display = "none";
        setisMenuOpen(true);
        // hier wird isMenuOpen auf true gesetzt
      }, 850);
    }
  }

  return (
    <>
      <div id="burgermenuDIV">
        <img
          id="burgermenu"
          ref={burgermenu}
          onClick={OpenMenu}
          src="/img/Burgermenu.png"
          alt="burgermenu"
        />
      </div>

      {isMenuOpen && <Menu />}
      {/* Das <Menu/> wird nur dann gerendert wenn isMenuOpen true ist */}
    </>
  );
}

export default Burgermenu;
