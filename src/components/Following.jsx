
import { TiTick } from "react-icons/ti";
import { IoPersonAdd } from "react-icons/io5";
import { useEffect, useState } from 'react';
import folloSound from '../assets/follow-sound.mp3';
import userImg from "../assets/default-profile.png";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function Following({id}){
      const [audio] = useState(new Audio(folloSound));
      const navigate=useNavigate(); 
   const[user,setUser]=useState(null);
   useEffect(()=>{
    const getFollow = async () => {
      try {
          const response = await axios.get(`https://anukriti.onrender.com/api/users/get-follow/${id}`,{
            withCredentials: true // Include cookies with the request
            
        });
        
        if (response.status === 200) {
            const userInfoData=response.data;
            setUser(userInfoData);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      getFollow();   
    },[id])


    const[follow,setFollow]=useState(null);
    useEffect(()=>{
      const CheckFollow = async () => {
        if(user){
        try {
            const res = await axios.get('https://anukriti.onrender.com/api/users/check-follow', {
              params: {followUserId:user?._id},
              headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true // Include this line to allow cookies
            });
              setFollow(res.data)  
        } catch (error) {
        }
    }
      };
      CheckFollow();
    },[user])
    

    const handleFollow=async()=>{
      audio.play();
      if(follow=='Follow'){
         setFollow('Following')
        }
       else{
         setFollow('Follow')
       }
      try {
        const res = await axios.post('https://anukriti.onrender.com/api/users/follow',{follow}, {
          params: {followUserId:user?._id},
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true // Include this line to allow cookies
        });
        if (res.status === 200) {
        }
      
    } catch (error) {
      navigate('/Anukriti/sign');
    }
    }
    return(
          <div className="user-follower" style={{width:"151px",height:"211px",border:"1px solid #d3d2d2",marginBottom:"6px"}}>
             <img src={user?.profileImage || userImg} alt="" srcset="" style={{width:"100px",height:"100px",borderRadius:"50%",margin:"10px 24.2px"}}/>
             <div className="follower-name"
             style={{
                width:"90%",
                fontSize:"12px",
                overflow:"hidden",
                whiteSpace:"nowrap",
                textOverflow:"ellipsis",
                padding:"0 5px 5px",
                margin:"0 auto",
                color:"red",
                textAlign:"center",
                fontWeight:"500"
             }}
             >
              {
                user? <Link to={`/Anukriti/profile/${user?.username}`}> {user?.firstName ?`${user?.firstName} ${user?.lastName}` : `${user?.username}`} </Link>:<div style={{backgroundColor:"#e5e3e3",height:"17px"}}></div>
              }
             </div>
             {
              user? <div className="follower-count" 
              style={{
                 fontSize:"11px",
                 textAlign:"center"
              }}
              >Followers: <b>{user?.followers?.length}</b></div>:
              <div style={{backgroundColor:"#e5e3e3",height:"17px",width:"65%",margin:"auto"}}></div>
             }
            
             {<div className="follow-btn" style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
              {
                user&&follow ?<button style={{
                  border:"none",
                  background:"#d0021b",
                  color:"#fff",
                  fontSize:"12px",
                  margin:"auto auto",
                  padding:"5px 8px",
                  borderRadius:"3px"
               }} onClick={handleFollow}>
               {
                 ((follow==='Follow' && <IoPersonAdd style={{color:"white",fontSize:"13px",marginBottom:"3px",marginRight:"5px"}}/>)||(follow==='Following' && <TiTick style={{color:"white",fontSize:"16px",marginBottom:"2px",marginRight:"3px"}}/>))
               }
               {follow}</button>:  follow ?<button style={{
                border:"none",
                background:"#d0021b",
                color:"#fff",
                padding:"15px 48px",
                borderRadius:"3px"
             }}></button>: <div></div>
              }
             
             </div>}
          </div>
    )

}

export default Following;
