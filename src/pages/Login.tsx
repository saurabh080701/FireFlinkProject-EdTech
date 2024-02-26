import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { UserContextApi } from '../Context/AuthContext';
import { UsersContextApi } from '../Context/UserContext';
import { TfiCheckBox } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

type LoginFormData = {
  email: string;
  password: string;
}

const Login = () => {
  const contextValue = useContext(UserContextApi)
  const navigate = useNavigate();
  const signIn = contextValue?.signIn;
  const data = useContext(UsersContextApi)
  const users = data?.userData;
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      if(signIn){
        try{
          if(users){
            const founduser=signIn(formData,users)
            if(founduser){
              console.log("login succesfully")
              toast.success("logged in sucsessfully");
              navigate('/')
            }else {
              toast.error('Incorrect email or password');
            }
        }}catch (error) {
          console.error('Error occurred during login:', error);
          toast.error('An unexpected error occurred. Please try again later.');
        }
      }
    }
  return (
    <div className='parentlogin-container'>
      <div className='image-container'>
        <picture>
          <img src="https://static.uacdn.net/production/_next/static/images/home-illustration.svg?q=75&auto=format%2Ccompress&w=640" alt="" />
          <div className='contentbox'>
            <h4>Over 10 crore learners trust us for their preparation</h4>
            <h5><span><TfiCheckBox /></span>Learn from 2,000+ India’s top educators</h5>
            <h5><span><TfiCheckBox /></span>Access 3,00,000+ live classes, test series, courses and more for free</h5>
          </div>
        </picture>
      </div>
        
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <div className='Create-account'>
          <p>Don't have an account? <Link className="link"  to={'/register'} >Create an account</Link></p>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default Login;
