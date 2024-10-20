import { useRef } from "react";
import "./Burgermenu.css";

function Burgermenu() {
  const burgermenu = useRef(null);

  function OpenMenu() {
    if (burgermenu.current) {
      burgermenu.current.style.transition = "opacity 0.5s ease";
      burgermenu.current.style.opacity = "0";

      setTimeout(() => {
        burgermenu.current.style.display = "none";
      }, 505);
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
    </>
  );
}

export default Burgermenu;
