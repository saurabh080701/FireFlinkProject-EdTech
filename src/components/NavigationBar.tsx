import { Link } from "react-router-dom";
import pwLogo from "../../assets/pwLogo.png";
import { useNavigate } from "react-router-dom";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
const NavigationBar = () => {
  let navigate = useNavigate();
  let id = window.localStorage.getItem("name");
  console.log(id);
  
  const handleLogout = () => {
    window.localStorage.removeItem("name");
    toast.success("logout Succesfully")
  };
  return (
    <><nav className="navigationBar">
      <div className="logo">
        <img src={pwLogo} alt="" />
      </div>

      <div className="navBarMenu">
        <ul className="navBarMenu-list">
          <li>Vidyapeeth</li>
          <li>PW skills</li>
          <li>PW store</li>
          <Link to="/support">
            <Button endIcon={<PermPhoneMsgIcon />}>Support </Button>
          </Link>
        </ul>
      </div>

      <div className="navBar-Auth">
        {id === null ? (
          <Link to="/login">
            <button>Login/Register</button>
          </Link>
        ) : (
          <Link to="/">
            <button onClick={handleLogout}>Logout</button>
          </Link>
        )}
      </div>
    </nav><ToastContainer /></>
  );
};

export default NavigationBar;
