import { useNavigate } from "react-router-dom";

function Usericon() {
  const navigateToLogin = useNavigate();

  function handleClickNavigateToSiteLogin() {
    navigateToLogin("/Login");
  }

  return (
    <>
      <li
        className="navbarLI"
        id="user_icon"
        onClick={handleClickNavigateToSiteLogin}
        title="Login"
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 15a7 7 0 0 1-5.19-2.32 2.71 2.71 0 0 1 1.7-1 13.11 13.11 0 0 0 1.29-.28 2.32 2.32 0 0 0 .94-.34 1.17 1.17 0 0 0-.27-.7 3.61 3.61 0 0 1-1.32-2.87A3.18 3.18 0 0 1 8 4.07a3.18 3.18 0 0 1 2.86 3.42 3.6 3.6 0 0 1-1.32 2.88 1.13 1.13 0 0 0-.27.69 2.68 2.68 0 0 0 .93.31 10.81 10.81 0 0 0 1.28.23 2.63 2.63 0 0 1 1.78 1A7 7 0 0 1 8 15z" />
        </svg>
      </li>
    </>
  );
}

export default Usericon;