import { useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

export default function UserIcon() {
  const navigate = useNavigate();

  function NavigateToLogin() {
    navigate("/login")
  }

  return (
    <div onClick={NavigateToLogin}>

      <LoginIcon className="NavbarElements" id="UserIcon"
      />
    </div>

  );
}
