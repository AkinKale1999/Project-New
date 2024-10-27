import { useRef } from "react";
import "./Burgermenu.css";


function Burgermenu() {
  const burgermenu = useRef(null);
  const menu_Container = useRef(null);
  const Menu = useRef(null);
  // ----------------------------------------

  function OpenMenu() {
    if (burgermenu.current) {
      Menu.current.style.opacity = "1";
      Menu.current.style.transition = "opacity 1s linear";

      burgermenu.current.style.transition = "opacity 1s linear";
      burgermenu.current.style.opacity = "0";

      menu_Container.current.style.animationName = "ClosingMenuContainer";

      setTimeout(() => {
        burgermenu.current.style.display = "none";
        menu_Container.current.style.display = "block";
        Menu.current.style.display = "block";
      }, 1000);
    }
  }

  // ----------------------------------------

  function CloseMenuShowBurgermenu() {
    if (Menu.current) {
      menu_Container.current.style.animationName =
        "ClosingMenuContainerReverse";

      burgermenu.current.style.transition = "opacity 1s linear";
      burgermenu.current.style.opacity = "1";
      burgermenu.current.style.display = "block";

      Menu.current.style.opacity = "0";
      Menu.current.style.transition = "opacity 1s linear";
    }

    setTimeout(() => {
      menu_Container.current.style.display = "none";
    }, 1000);
  }
  // ----------------------------------------

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

      <div className="menu_Container" ref={menu_Container}>
        <div id="menu_Closing" ref={Menu} onClick={CloseMenuShowBurgermenu}>
          X
        </div>
      </div>
    </>
  );
}

export default Burgermenu;
