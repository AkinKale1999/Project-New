import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Burgermenu() {
  const burgermenu = useRef(null);
  const menu_Container = useRef(null);
  const Menu = useRef(null);
  const menu_Links = useRef(null);
  // ----------------------------------------

  function OpenMenu() {
    if (burgermenu.current) {
      Menu.current.style.opacity = "1";
      Menu.current.style.transition = "opacity 1s linear";

      menu_Container.current.style.animationName = "ClosingMenuContainer";

      menu_Links.current.style.opacity = "0";

      setTimeout(() => {
        menu_Links.current.style.transition = "opacity 0.2s linear";
        menu_Links.current.style.opacity = "1";
      }, 1500);

      setTimeout(() => {
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

      burgermenu.current.style.display = "block";

      Menu.current.style.opacity = "0";
      Menu.current.style.transition = "opacity 1s linear";
    }

    menu_Links.current.style.opacity = "1";

    setTimeout(() => {
      menu_Links.current.style.transition = "opacity 0.3s linear";
      menu_Links.current.style.opacity = "0";
    }, 10);

    setTimeout(() => {
      menu_Container.current.style.display = "none";
    }, 990);
  }

  // ------------------------------------------------
  function removeMenu() {
    const URL = ["/Home", "/"];
    if (URL.some((path) => window.location.href.includes(path))) {
      menu_Container.current.style.display = "none";
    }
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
          title="Menü"
        />
      </div>

      <div className="menu_Container" ref={menu_Container}>
        <div id="menu_Closing" ref={Menu} onClick={CloseMenuShowBurgermenu}>
          <p id="menu_content">X</p>
        </div>
        <div id="menu_Links" ref={menu_Links}>
          <div id="Menu_Link_Home">
            <Link
              className="Menu_Links_For_Navigation"
              to={"/Home"}
              onClick={removeMenu}
            >
              <span id="animated-I">I</span> Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Burgermenu;
