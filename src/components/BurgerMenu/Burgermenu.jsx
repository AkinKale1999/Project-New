import { useRef } from "react";
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

        <svg 
        id="burgermenu"
          ref={burgermenu}
          onClick={OpenMenu}
          alt="burgermenu"
          title="Menü"
          xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 474.051"><path d="M11.216 0H88.37c6.169 0 11.216 5.047 11.216 11.216v70.947c0 6.17-5.047 11.217-11.216 11.217H11.216C5.047 93.38 0 88.333 0 82.163V11.216C0 5.047 5.047 0 11.216 0zm152.662 380.672h336.906c6.169 0 11.216 5.05 11.216 11.216v70.947c0 6.166-5.051 11.216-11.216 11.216H163.878c-6.166 0-11.217-5.046-11.217-11.216v-70.947c0-6.169 5.047-11.216 11.217-11.216zm-152.662 0H88.37c6.169 0 11.216 5.047 11.216 11.216v70.947c0 6.17-5.047 11.216-11.216 11.216H11.216C5.047 474.051 0 469.005 0 462.835v-70.947c0-6.169 5.047-11.216 11.216-11.216zm152.662-190.336h336.906c6.169 0 11.216 5.05 11.216 11.216v70.947c0 6.166-5.051 11.216-11.216 11.216H163.878c-6.166 0-11.217-5.046-11.217-11.216v-70.947c0-6.17 5.047-11.216 11.217-11.216zm-152.662 0H88.37c6.169 0 11.216 5.046 11.216 11.216v70.947c0 6.17-5.047 11.216-11.216 11.216H11.216C5.047 283.715 0 278.669 0 272.499v-70.947c0-6.17 5.047-11.216 11.216-11.216zM163.878 0h336.906C506.953 0 512 5.051 512 11.216v70.947c0 6.166-5.051 11.217-11.216 11.217H163.878c-6.166 0-11.217-5.047-11.217-11.217V11.216C152.661 5.047 157.708 0 163.878 0z" /></svg>
      </div>

      <div className="menu_Container" ref={menu_Container}>
        <div id="menu_Closing" ref={Menu} onClick={CloseMenuShowBurgermenu}>
          <p id="menu_content">X</p>
        </div>
        <div id="menu_Links" ref={menu_Links}>
          <div>
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
