import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TfiCheckBox } from "react-icons/tfi";
import Login from './Login';
import { useNavigate } from 'react-router-dom';

type RegistrationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [registered, setRegistered] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', formData);
      toast.success('Registration successful!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
      setRegistered(true); 
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error('Registration failed. Please try again later.');
    }
  };

  if (registered) {
    toast.success('Register successfull!');
    navigate('/login')
  }
  const handleCreateAccountClick = () => {
    setShowRegistration(true); 
  };
  if (showRegistration) {
    toast.success('Rgister successful!');
    navigate('/login');
  }

  return (
    <div className='registration-main-container'>
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
      <div className="registration-container">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className='first-Last'>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          </div>
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
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
        <div className='Create-account'>
          <p><span className="link" onClick={handleCreateAccountClick}>Back to Login Page</span></p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
