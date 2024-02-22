import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TfiCheckBox } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';
type LoginFormData = {
  email: string;
  password: string;
}

const Login: React.FC = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [showRegistration, setShowRegistration] = useState(false); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/users');
      const userData = response.data;
      const foundUser = userData.find((user: any) => user.email === formData.email && user.password === formData.password);
      if (foundUser) {
        toast.success('Login successful!');
        setFormData({
          email: '',
          password: '',
        });
        navigate('/');
      } else {
        toast.error('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('Login failed. Please try again.');
    }
  };

  const handleCreateAccountClick = () => {
    setShowRegistration(true); 
  };

  if (showRegistration) {
    navigate('/register')
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
          <p>Don't have an account? <span className="link" onClick={handleCreateAccountClick}>Create an account</span></p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
