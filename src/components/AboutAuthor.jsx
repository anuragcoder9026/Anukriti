import { Link } from 'react-router-dom';
import authorImg from '../assets/user-photo.jpg';
import { IoPersonAdd } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import {useDispatch, useSelector} from 'react-redux';
import { postLoaderAction } from "../store/postLoaderSlice";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import userImg from "../assets/default-profile.png";
import axios from 'axios';
function AboutAuthor({user}){
 const navigate=useNavigate();
 const dispatch=useDispatch();
 const postLoader=useSelector(store=>store.postLoader);
 useEffect(()=>{
  dispatch(postLoaderAction.handlePostLoader(true));
 },[])
 useEffect(()=>{
  if(user){
    dispatch(postLoaderAction.handlePostLoader(false));
  }
 },[user])
 useEffect(()=>{
  const CheckFollow = async () => {
    try {
        const res = await axios.get('https://anukriti.onrender.com/api/users/check-follow', {
          params: {followUserId:user._id},
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true // Include this line to allow cookies
        });
        setFollow(res.data)  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  CheckFollow();
},[user])

const[follow,setFollow]=useState(null);

const handleFollow=async()=>{
  if(follow=='Follow'){
    setFollow('Following')
   }
  else{
    setFollow('Follow')
  }
  try {
    const res = await axios.post('https://anukriti.onrender.com/api/users/follow',{follow}, {
      params: {followUserId:user._id},
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true // Include this line to allow cookies
    });
    if (res.status === 200) {
    }
  
} catch (error) {
  console.error('Error fetching data:', error);
  navigate('/Anukriti/sign');
}
}
    return(
      !postLoader && user &&<div className="about-author"style={{width:"100%",backgroundColor:"white",padding:"6px 0px",border:"1.5px solid rgba(0,0,0,.125)"}}>
               {user &&<>
                <div className="about-title">Summary</div>
                <div className="about-summary">
                {user?.summary}
                </div>
                </>
               }
             <div className="about-title">About</div>
             <div className="author" style={{padding:"2px 10px"}}>
                <img src={user?.profileImage || userImg} alt="" srcset="" style={{width:"50px",height:"50px",borderRadius:"50%"}}/>
                <Link to={`/Anukriti/profile/${user?.username}`} style={{textDecoration:"none",fontSize:"14px",marginLeft:"15px"}}>{user?.firstName ?`${user?.firstName} ${user?.lastName}` : `${user?.username}`}</Link>
                 
                 {
                 !user?.email && <button style={{color:"#036974",border:"1px solid #036974",float:"right",fontSize:"14px",borderRadius:"3px",marginTop:"11px",padding:follow ? '6px 20px' :'6px 11.5px'}} onClick={handleFollow}>{follow ? <IoPersonAdd style={{marginRight:"6px",marginBottom:"3px"}}/>  :<TiTick style={{marginRight:"6px",marginBottom:"3px"}}/>}{follow}</button>
                 }

             </div>
             <div className="author-desc" style={{marginLeft:"10px",marginTop:"5px",fontSize:"14px"}}>{user?.about}</div>
      </div>
    )
}

export default AboutAuthor;