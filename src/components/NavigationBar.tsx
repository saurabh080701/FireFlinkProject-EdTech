import React from 'react';
import pwLogo from '../../assets/pwLogo.png';


const NavigationBar = () => {
  return (
    <nav className='navigationBar'>
      <div className='logo'>
          <img src={pwLogo} alt="" />
      </div>
            
      <div className='navBarMenu'>
            <ul className='navBarMenu-list'>
              <button>All Course</button>
              <li>Vidyapeeth</li>
              <li>PW skills</li>
              <li>PW store</li>
            </ul>
      </div>

      <div className='navBar-Auth'>
              <button>Login/Register</button>
      </div>
    </nav>
  );
};

export default NavigationBar;