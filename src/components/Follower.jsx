
import followerImg from '../assets/follower-image.jpg';
import { TiTick } from "react-icons/ti";
import { IoPersonAdd } from "react-icons/io5";
import { useState } from 'react';
import folloSound from '../assets/follow-sound.mp3';
function Follower(){
      const [audio] = useState(new Audio(folloSound));
      const [follow,setFollow]=useState('Follow');
      const handleFollow=()=>{
        setFollow(follow === 'Follow' ? 'Following' : 'Follow');
        audio.play();
      }
    return(
          <div className="user-follower" style={{width:"151px",height:"211px",border:"1px solid #d3d2d2",marginBottom:"6px"}}>
             <img src={followerImg} alt="" srcset="" style={{width:"100px",height:"100px",borderRadius:"50%",margin:"10px 24.2px"}}/>
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
             >Shubham Patel</div>
             <div className="follower-count" 
             style={{
                fontSize:"11px",
                textAlign:"center"
             }}
             >Followers: <b>209</b></div>
             <div className="follow-btn" style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
             <button style={{
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
             {follow}</button>
             </div>
          </div>
    )

}

export default Follower;