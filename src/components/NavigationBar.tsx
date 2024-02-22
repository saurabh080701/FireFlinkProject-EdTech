import { Link } from 'react-router-dom';
import pwLogo from '../../assets/pwLogo.png';
import { useNavigate } from 'react-router-dom';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { Button } from '@mui/material';
const NavigationBar = () => {
  let navigate = useNavigate();
  return (
    <nav className='navigationBar'>
      <div className='logo'>
          <img src={pwLogo} alt="" />
      </div>
            
      <div className='navBarMenu'>
            <ul className='navBarMenu-list'>
              <li>Vidyapeeth</li>
              <li>PW skills</li>
              <li>PW store</li>
            <Link to='/support'>
              <Button endIcon={<PermPhoneMsgIcon />}>Support </Button>
              </Link>
            </ul>
      </div>

      <div className='navBar-Auth'>
        <Link to={'/login'}>
              <button>Login/Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;