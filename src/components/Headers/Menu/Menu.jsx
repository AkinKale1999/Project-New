import "./Menu.css";
import { useRef, useState } from "react";
import Burgermenu from "../Burgermenu/Burgermenu";

function Menu() {
  const Menu = useRef(null);
  const [isBurgermenuOpen, setIsBurgermenuOpen] = useState(false);

  function handleMenoOnClick() {
    if (Menu.current) {
      Menu.current.style.width = "15vmax";
      Menu.current.style.transition = "width 1s linear";
      Menu.current.style.width = "0";

      setTimeout(() => {
        Menu.current.style.display = "none";
        setIsBurgermenuOpen(true);
        // hier wird isBurgermenuOpen auf true gesetzt
      }, 505);
    }
  }

  return (
    <>
      <div ref={Menu} id="menu_Container">
        <div
          onClick={handleMenoOnClick}
          style={{
            color: "white",
            cursor: "pointer",
            display: "inline-block",
            marginLeft: "6px",
            marginTop: "4px",
            fontSize: "150%",
          }}
        >
          X
        </div>
      </div>
      {isBurgermenuOpen && <Burgermenu />}
      {/* Das <Burgermenu/> wird nur dann gerendert wenn isBurgermenuOpen true ist */}
    </>
  );
}

export default Menu;
