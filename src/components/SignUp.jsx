import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import axios from "axios";
import { useDispatch } from "react-redux";
import { afterSignAction } from "../store/aftersignSlice";
import { userDataAction } from "../store/userdataSlice";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
function SignUpForm() {
    const dispatch=useDispatch();
    const navigate = useNavigate();
  const [formData, setData] = useState({ username: "", email: "", password: "" });
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = evt => {
    const value = evt.target.value;
    setData({
      ...formData,
      [evt.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const jsonFormData = JSON.stringify(formData); 
        console.log(jsonFormData);
      const res = await axios.post('https://anukriti.onrender.com/api/users/signup', jsonFormData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      console.log(res);
      setResponse(res.data.message);
      setError(null)
      if(res.status===200){
        dispatch(afterSignAction.handleAfterSign(true));
        dispatch(userDataAction.handleUserData(res.data.content));
        navigate(`/Anukriti/profile/${res.data.content?.username}`);
      }
    } catch (err) {
      console.log(err);
      setResponse(null);
      dispatch(afterSignAction.handleAfterSign(false));
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{paddingTop:"40px",paddingBottom:"50px"}}>
        <h1>Create Account</h1>
        <div className="sign-social-container">
          <a href="#" className="social">
            <FaFacebookF />
          </a>
          <a href="#" className="social">
            <GrGooglePlus />
          </a>
          <a href="#" className="social">
            <FaLinkedinIn />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
        {loading && <Box sx={{ width: '50%',marginTop:'20px' }}><LinearProgress /> </Box>}
        {response && !loading && !error && <p style={{ color: 'green', fontWeight: "500" }}>{response}</p>}
        {error && !loading &&<p style={{ color: 'red', fontWeight: "500" }}>{error}</p>}
      </form>
    </div>
  );
}

export default SignUpForm;
