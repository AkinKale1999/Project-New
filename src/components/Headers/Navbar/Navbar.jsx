import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate_To_Login = useNavigate();
  const navigate_To_Wish_List = useNavigate();
  const navigate_To_Shopping_Cart = useNavigate();

  function handleClickNavigateToSiteLogin() {
    navigate_To_Login("/Login");
  }

  function handleClickToSiteWishList() {
    navigate_To_Wish_List("/Wunschliste");
  }

  function handleClickToSiteShoppingCar() {
    navigate_To_Shopping_Cart("/Einkaufswagen");
  }

  return (
    <>
      <div id="FirstDiv">
        <div id="navbarDIV">
          <nav id="navbar">
            <li
              className="navbarLI"
              id="user_icon"
              onClick={handleClickNavigateToSiteLogin}
            >
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 15a7 7 0 0 1-5.19-2.32 2.71 2.71 0 0 1 1.7-1 13.11 13.11 0 0 0 1.29-.28 2.32 2.32 0 0 0 .94-.34 1.17 1.17 0 0 0-.27-.7 3.61 3.61 0 0 1-1.32-2.87A3.18 3.18 0 0 1 8 4.07a3.18 3.18 0 0 1 2.86 3.42 3.6 3.6 0 0 1-1.32 2.88 1.13 1.13 0 0 0-.27.69 2.68 2.68 0 0 0 .93.31 10.81 10.81 0 0 0 1.28.23 2.63 2.63 0 0 1 1.78 1A7 7 0 0 1 8 15z" />
              </svg>
            </li>
            {/* ------------------------------------ */}{" "}
            <li
              className="navbarLI"
              id="Wish-list"
              onClick={handleClickToSiteWishList}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.14 64">
                <g data-name="Layer 2">
                  <g data-name="to do list">
                    <path d="M16.11 17.38H8.9a1 1 0 0 0-1 1v7.2a1 1 0 0 0 1 1h7.21a1 1 0 0 0 1-1v-7.2a1 1 0 0 0-1-1zm-1 7.2H9.9v-5.2h5.21zM22.59 20.13h11.56a1 1 0 0 0 0-2H22.59a1 1 0 0 0 0 2zM22.59 25.65h6.73a1 1 0 0 0 0-2h-6.73a1 1 0 0 0 0 2zM16.11 32.58H8.9a1 1 0 0 0-1 1v7.21a1 1 0 0 0 1 1h7.21a1 1 0 0 0 1-1v-7.21a1 1 0 0 0-1-1zm-1 7.21H9.9v-5.21h5.21zM22.59 35.32h6.31a1 1 0 0 0 0-2h-6.31a1 1 0 1 0 0 2zM34.15 38.86H22.59a1 1 0 1 0 0 2h11.56a1 1 0 0 0 0-2zM16.11 47H8.9a1 1 0 0 0-1 1v7.2a1 1 0 0 0 1 1h7.21a1 1 0 0 0 1-1V48a1 1 0 0 0-1-1zm-1 7.2H9.9V49h5.21zM34.15 47.77H22.59a1 1 0 1 0 0 2h11.56a1 1 0 0 0 0-2zM34.15 53.29H22.59a1 1 0 0 0 0 2h11.56a1 1 0 0 0 0-2z" />
                    <path d="M58.26 51.74 47.7 36.06V8.58a3.83 3.83 0 0 0-3.82-3.82h-2.8v-.61a4.15 4.15 0 0 0-8.3 0v.61H15.72v-.61a4.15 4.15 0 0 0-8.3 0v.61h-3.6A3.83 3.83 0 0 0 0 8.58v51.6A3.83 3.83 0 0 0 3.82 64h40.06a3.83 3.83 0 0 0 3.82-3.82v-5.56l2 2.91a5.13 5.13 0 0 0 3.3 2.19 5.26 5.26 0 0 0 1 .1 5.19 5.19 0 0 0 4.29-8.08zm-7.5 3.84L37.55 35.89l5.25-3.54L56 52zM36 27.93 41.2 31l-4.29 2.89zM34.78 4.15a2.15 2.15 0 0 1 4.3 0v.61h-4.3zm-25.36 0a2.15 2.15 0 0 1 4.3 0v.61h-4.3zm36.28 56A1.82 1.82 0 0 1 43.88 62H3.82A1.82 1.82 0 0 1 2 60.18V8.58a1.82 1.82 0 0 1 1.82-1.82h9.9v2.69a2.15 2.15 0 0 1-4.3 0 1 1 0 0 0-2 0 4.15 4.15 0 0 0 8.3 0V6.76h23.36v2.69a2.15 2.15 0 0 1-4.3 0 1 1 0 0 0-2 0 4.15 4.15 0 0 0 8.3 0V6.76h2.8a1.82 1.82 0 0 1 1.82 1.82v24.51l-1.8-2.68a1 1 0 0 0-.23-.22l-8.17-4.86-.71-1.12a1 1 0 1 0-1.79.98l.73 1.15 1.44 9.43v.08a1 1 0 0 0 .12.29l10.41 15.5zm11.38-4.93A3.17 3.17 0 0 1 52 57.14l5-3.36a3.17 3.17 0 0 1 .08 1.46z" />
                  </g>
                </g>
              </svg>
            </li>
            {/* ------------------------------------ */}
            <li
              className="navbarLI"
              id="Shopping-cart"
              onClick={handleClickToSiteShoppingCar}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M25.18 10.73a3 3 0 0 0-3-2.73H22a6 6 0 0 0-12 0h-.16a3 3 0 0 0-3 2.73L5.23 26.67a3 3 0 0 0 3 3.33h15.53a3 3 0 0 0 3-3.33zm-.66 16.93a1 1 0 0 1-.76.34H8.24a1 1 0 0 1-.76-.34 1 1 0 0 1-.26-.79l1.59-15.94a1 1 0 0 1 1-.93H10v2a1 1 0 0 0 2 0v-2h5a1 1 0 0 0 0-2h-5a4 4 0 0 1 8 0v4a1 1 0 0 0 2 0v-2h.16a1 1 0 0 1 1 .93l1.59 15.94a1 1 0 0 1-.23.79z"
                  data-name="shopping bag"
                />
              </svg>
            </li>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
