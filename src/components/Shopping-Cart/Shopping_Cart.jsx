import { useState, useEffect } from "react";

function Shopping_Cart() {
  const [ShoppingCartisClick, setShoppingCartIsClick] = useState(false);

  function handleClickOnShoppingCart() {
    setShoppingCartIsClick(true);
  }

  function handleClickOnClosingShoppingMenu() {
    setShoppingCartIsClick(false);
  }

  return (
    <>
      <div>
        <li
          id="Shopping-cart"
          title="Warenkorb"
          onClick={handleClickOnShoppingCart}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="M25.18 10.73a3 3 0 0 0-3-2.73H22a6 6 0 0 0-12 0h-.16a3 3 0 0 0-3 2.73L5.23 26.67a3 3 0 0 0 3 3.33h15.53a3 3 0 0 0 3-3.33zm-.66 16.93a1 1 0 0 1-.76.34H8.24a1 1 0 0 1-.76-.34 1 1 0 0 1-.26-.79l1.59-15.94a1 1 0 0 1 1-.93H10v2a1 1 0 0 0 2 0v-2h5a1 1 0 0 0 0-2h-5a4 4 0 0 1 8 0v4a1 1 0 0 0 2 0v-2h.16a1 1 0 0 1 1 .93l1.59 15.94a1 1 0 0 1-.23.79z"
              data-name="shopping bag"
            />
          </svg>
        </li>
      </div>

      {ShoppingCartisClick && (
        <div id="shoppingCartMenu">
          <div id="shoppingCartMenuDIV">
            <h1 id="shoppingCartMenuHeader">Warenkorb</h1>
            <p
              id="shoppingCartMenuX"
              title="Schließen"
              onClick={handleClickOnClosingShoppingMenu}
            >
              X
            </p>
          </div>
          <div id="shoppingCartMenuInnerDiv">
            <p style={{ fontSize: "1.2rem" }}>Dein Warenkorb ist leer</p>
            <button
              style={{
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
