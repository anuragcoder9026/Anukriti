import { Link, useNavigate } from "react-router-dom";
import "../CSS/create.css";
import Draft from "./Draft";
import { RiDraftLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function Create() {
  const isAuthenticated=useSelector(store=>store.afterSign);
  const navigate = useNavigate(); 
  const userinfo=useSelector(store=>store.userData);
  const[user,setUser]=useState(null);
  useEffect(() => {
    const authenticate = async () => {
        try {
            const response = await axios.get('https://anukriti.onrender.com/api/users/check-auth',{
              withCredentials: true // Include cookies with the request  
          });
            if (response.status === 200) { 
          }
        } catch (error) {
            navigate('/Anukriti/sign')
        }
    };
    authenticate(); 
}, []);
  useEffect(()=>{
    const getProfile = async () => {
      try {
          const response = await axios.get(`https://anukriti.onrender.com/api/users/get-profile/${userinfo?.username}`,{
            withCredentials: true // Include cookies with the request
            
        });
        
        if (response.status === 200) {
            setUser(response.data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      getProfile();   
    },[userinfo])
    
  return (
    <div style={{backgroundColor:"#f8f8f8",paddingBottom:"40px"}}>
    <div class="card-create text-center d-flex align-items-center"
      style={{ margin: "auto", width: "90%", minHeight: "150px",marginTop:"100px",marginBottom:"30px" }}>
      <div class="card-body">
        <p style={{ fontSize: "1rem" }}>
          Here, you can write your Creation on Anukriti...
        </p>
        <Link to="/Anukriti/write" class="btn btn-danger">
          Add new Creation
        </Link>
      </div>
    </div>
    <div className="draft-head" style={{backgroundColor:"white",width:"90%",margin:"0 4.3vw",paddingBottom:"20px"}}>
    <span style={
        {display:"inline-block",
            width: "5px",
            height: "50px",
            backgroundColor: "brown",
            position:"relative",
            top:"12px"
        }
       }></span> 
       <h2 style={{display:"inline-block",width: "150px",
            height: "50px",marginLeft:"10px",fontFamily:"serif",fontSize:"2rem",fontWeight:"550"}}>
        <RiDraftLine style={{marginTop:"-4px",marginRight:"6px",}}/>Draft</h2>   
      
    <div className="d-flex  gap-2 card-cont" style={{overflow:"scroll",padding:"10px",width:"98%",margin:"0 0.8vw",backgroundColor:"white"}}>
      {
        !user ? <div ><div class="spinner-border" style={{width:"5rem", height:"5rem", role:"status",}}></div></div>: user.drafts?.map((item,index)=><Draft draftId={item}/>)
      }
   </div>
   </div> 
   </div>
  );
}

export default Create;
