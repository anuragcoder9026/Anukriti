import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import axios from "axios";
import { useDispatch } from "react-redux";
import { afterSignAction } from "../store/aftersignSlice";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { userDataAction } from "../store/userdataSlice";
function SignInForm() {
    const dispatch=useDispatch();
    const navigate = useNavigate();  
    const [formData, setData] = useState({ email: "", password: "" });
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const handleChange = (evt) => {
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
            const res = await axios.post('https://anukriti.onrender.com/api/users/login', jsonFormData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true // Include this line to allow cookies
            });
            console.log(res);
            setResponse(res.data.message);
            setError(null);
            console.log(res.data.content.username);
            if (res.status === 200) {
                dispatch(afterSignAction.handleAfterSign(true));
                dispatch(userDataAction.handleUserData(res.data.content));
                navigate(`/Anukriti/profile/${res.data.content.username}`);
            }
        } catch (err) {
            dispatch(afterSignAction.handleAfterSign(false));
            setResponse(null);
            setError(err.response.data.message);
            navigate(`/Anukriti/sign`);
        } finally {
            setLoading(false);
        }
    };
    const location =useLocation();
   const queryParams = new URLSearchParams(location.search);
    const LoginError = queryParams.get('error');
    return (
        <div>
            <form onSubmit={handleSubmit} style={{paddingTop:"40px",paddingBottom:"50px"}}>
                <h1>Sign in</h1>
                <div className="sign-social-container">
                    <a href="#" className="social"><FaFacebookF /></a>
                    <a href="https://anukriti.onrender.com/auth/google/login" className="social"><GrGooglePlus /></a>
                    <a href="#" className="social"><FaLinkedinIn /></a>
                </div>
                <span>or use your account</span>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
                {loading &&  <Box sx={{ width: '50%',marginTop:'20px' }}><LinearProgress /> </Box>}
                {response && !loading && !error && <p style={{ color: 'green', fontWeight: "500" }}>{response}</p>}
                {error && !loading && <p style={{ color: 'red', fontWeight: "500" }}>{error}</p>}
                {LoginError === 'email_not_exists' && 
                <p style={{ color: 'red', fontWeight: "500"  }}>This email do not exists. </p>
                 }
                 
            </form>
        </div>
    );
}

export default SignInForm;

