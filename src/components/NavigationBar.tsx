import { Link, useNavigate } from "react-router-dom";
import pwLogo from "../../assets/pwLogo.png";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

const NavigationBar = () => {
  const navigate = useNavigate();
  const id = window.localStorage.getItem("name");
  console.log(id);

  const handleLogout = () => {
    window.localStorage.removeItem("name");
    navigate("/");
    window.location.reload();
    toast.success("logout Succesfully");
  };
  return (
    <>
      <nav className="navigationBar">
        <div className="logo">
          <Link to="/">
            <img src={pwLogo} alt="" />
          </Link>
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
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
      </nav>
      <ToastContainer />
    </>
  );
};

export default NavigationBar;
