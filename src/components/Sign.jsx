import React, { useEffect, useState } from "react";
import '../CSS/sign.css';
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
function Sign(){
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const isAuthenticated=useSelector(store=>store.afterSign);
  const navigate=useNavigate();
  const user=useSelector(store=>store.userData);
  useEffect(()=>{
    if(isAuthenticated){
       navigate(`/Anukriti/profile/${user.username}`);
    }
  },[user])
  const [signInColor,setSignInColor]=useState('blue');
  const [signUpColor,setSignUpColor]=useState('orangered');
  const handleSignUp=()=>{
    setSignUpColor('blue');
    setSignInColor('orangered');
  }
  const handleSignIn=()=>{
    setSignInColor('blue');
    setSignUpColor('orangered');
  }
  const location=useLocation();
  const queryParams = new URLSearchParams(location.search);
    const Error = queryParams.get('error');

    useEffect(()=>{
      if(Error === 'email_exists') {
        handleSignUp();
       }
       else{
        handleSignIn();
       }
    },[])
 
  return (
    <>
    <div className="sign" style={{backgroundColor:"rgb(241, 236, 236)"}}>
      <div className="sign-head" style={{padding:"auto",marginBottom:"20px"}}>
        <span style={{cursor:"pointer",fontWeight:"500",color:"white",fontSize:"16px",backgroundColor:signUpColor,padding:"10px",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}} onClick={handleSignUp}>Sign Up</span>
        <span style={{cursor:"pointer",fontWeight:"500",color:"white",fontSize:"16px",backgroundColor:signInColor,padding:"10px",borderBottomRightRadius:"5px",borderTopRightRadius:"5px"}} onClick={handleSignIn}>Sign In</span>
      </div>
      <div id="sign-container">
        {
  
          signInColor==='blue' ? <SignInForm/> :<SignUpForm/>
        }
        
      </div>
    </div>
    </>
  );
}

export default Sign;
