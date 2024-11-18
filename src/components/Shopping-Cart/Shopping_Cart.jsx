import "./Shopping_Cart.css";
import { useEffect, useRef, useState } from "react";

function Shopping_Cart() {
  const [ShoppingCartisClick, setShoppingCartIsClick] = useState(false);
  const shoppingCart = useRef(null);
  const shoppingCartMenu = useRef(null);

  function handleClickOnShoppingCart() {
    if (shoppingCart.current) {
      shoppingCart.current.style.display = "none";
      document.body.style.overflowY = "hidden";
      setShoppingCartIsClick(true);
    }
  }

  function handleClickOnClosingShoppingMenu() {
    if (shoppingCartMenu.current) {
      shoppingCart.current.style.display = "block";
      document.body.style.overflowY = "scroll";
      setShoppingCartIsClick(false);
    }
  }

  return (
    <>
      <li
        id="Shopping-cart"
        title="Warenkorb"
        ref={shoppingCart}
        onClick={handleClickOnShoppingCart}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path
            d="M25.18 10.73a3 3 0 0 0-3-2.73H22a6 6 0 0 0-12 0h-.16a3 3 0 0 0-3 2.73L5.23 26.67a3 3 0 0 0 3 3.33h15.53a3 3 0 0 0 3-3.33zm-.66 16.93a1 1 0 0 1-.76.34H8.24a1 1 0 0 1-.76-.34 1 1 0 0 1-.26-.79l1.59-15.94a1 1 0 0 1 1-.93H10v2a1 1 0 0 0 2 0v-2h5a1 1 0 0 0 0-2h-5a4 4 0 0 1 8 0v4a1 1 0 0 0 2 0v-2h.16a1 1 0 0 1 1 .93l1.59 15.94a1 1 0 0 1-.23.79z"
            data-name="shopping bag"
          />
        </svg>
      </li>

      {ShoppingCartisClick && (
        <div id="shoppingCartMenu" ref={shoppingCartMenu}>
          <div id="shoppingCartMenuDIV">
            <h1 id="shoppingCartMenuHeader">WARENKORB</h1>
            <p
              id="shoppingCartMenuX"
              title="Schließen"
              onClick={handleClickOnClosingShoppingMenu}
            >
              X
            </p>
          </div>
          <div id="shoppingCartMenuInnerDiv">
            <p
              style={{
                textAlign: "center",
                marginBottom: "20px",
                fontSize: "2vmax",
              }}
            >
              Dein Warenkorb ist leer
            </p>
            <button
              style={{
                textAlign: "center",
                padding: "5px 5%",
                backgroundColor: "black",
                color: "#fff",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              JETZT EINKAUFEN
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Shopping_Cart;
