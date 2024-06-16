import { useEffect, useRef, useState } from 'react';
import authorImg from '../assets/user-photo.jpg';
import { FaRegStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import userImg from "../assets/default-profile.png";
import { useSelector } from 'react-redux';
function UserRating({rate=0,color,postId}){
    const user=useSelector((store)=>store.userData); 
    const [rating,setRating]=useState(0); 
    const navigate=useNavigate();
    useEffect(()=>{
        if(rate>0) setRating(rate);
    },[rate])
    const [writeReview,setWriteReview]=useState(true);
    const handleStar=async(rating)=>{
        setRating(rating);
        try {
            const res = await axios.post('https://anukriti.onrender.com/api/posts/set-rating',{rating}, {
              params: {postId},
              headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true // Include this line to allow cookies
            });
            } catch (error) {
              console.error('Error fetching data:', error);
             navigate('/Anukriti/sign');
           }
    }
    const handleWriteReview=(val)=>{
        setWriteReview(val);
    }
    const handleDelete=async()=>{
        setRating(0);
        setWriteReview(false);
        try {
          const res = await axios.delete('https://anukriti.onrender.com/api/posts/delete-review', {
            params: {postId},
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true // Include this line to allow cookies
          });
          console.log(res);
          } catch (error) {
            console.error('Error fetching data:', error);
            navigate('/Anukriti/sign')
         }
    }
    const handleEdit=()=>{
        setWriteReview(true);
    }
    const comment=useRef(null);
    const handleSave=async()=>{
      try {
        const res = await axios.post('https://anukriti.onrender.com/api/posts/set-comment',{comment:comment.current.value}, {
          params: {postId},
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true // Include this line to allow cookies
        });
        console.log(res);
        } catch (error) {
          console.error('Error fetching data:', error);
         navigate('/Anukriti/sign');
       }
    }
    return(
        <div className="user-rating">
           <div className="user-img" style={{display:"flex",justifyContent:"center"}}><img src={user?.profileImage ||userImg} alt="" style={{width:"60px",height:"60px",borderRadius:"50%",border:"2px solid #cbc8c8"}}/></div>
           <div style={{display:"flex"}}>
           <div style={{display:"flex",justifyContent:"center",fontSize:"14px",marginTop:"9px",fontWeight:"500",width:"85%",marginLeft:"8%"}}>Your Rating 
          </div>
          
           <div className="dropdown" style={{display:"flex",justifyContent:"flex-end",width:"5%",marginRight:"20px"}}>
  <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{float:"right"}}>
  <BsThreeDotsVertical />
  </button>
  <ul className="dropdown-menu" style={{fontSize:"12px"}}>
    <li><a className="dropdown-item" href="#" style={{fontWeight:"500"}} onClick={handleEdit}>Edit Review</a></li>
    <li><a className="dropdown-item" href="#" style={{fontWeight:"500"}} onClick={handleDelete}>Delete Review</a></li>
  </ul>
</div>
          
          </div>
          <div style={{fontSize:"25px",display:"flex",justifyContent:"center",marginTop:"1px",     color:"#056974"}}>
  {rating>=1?<FaStar onClick={()=>handleStar(1)} style={{color:color}}/>:<FaRegStar onClick={()=>handleStar(1)} style={{color:color}}/>}
  {rating>=2?<FaStar onClick={()=>handleStar(2)} style={{color:color}}/>:<FaRegStar onClick={()=>handleStar(2)}style={{color:color}}/>}
  {rating>=3?<FaStar onClick={()=>handleStar(3)}style={{color:color}}/>:<FaRegStar onClick={()=>handleStar(3)}style={{color:color}}/>}
  {rating>=4?<FaStar onClick={()=>handleStar(4)}style={{color:color}}/>:<FaRegStar onClick={()=>handleStar(4)}style={{color:color}}/>}
  {rating==5?<FaStar onClick={()=>handleStar(5)}style={{color:color}}/>:<FaRegStar onClick={()=>handleStar(5)}style={{color:color}}/>}   
          </div>
            
         {
            (writeReview===true &&  
            <><div className="write-review-section" style={{display:"flex",justifyContent:"center",marginTop:"13px"}}>
            <textarea className="form-control" placeholder="Write Review" type="text" id="validationDefault05" 
            style={{width:"92%",height:"80px"}}
            ref={comment} > </textarea>
            </div>
    
            <div className="review-action" style={{display:"flex",justifyContent:"flex-end",paddingRight:"4%"}}>
            <button className="review-cancel" style={{border:"none",fontSize:"14px",padding:"6px 7px",borderRadius:"3px",marginTop:"11px"}} onClick={()=>handleWriteReview(false)}>Cancel</button>
            <button style={{backgroundColor:"#036974",color:"#fff",border:"1px solid #036974",float:"right",fontSize:"14px",padding:"6px 10px",borderRadius:"3px",marginTop:"11px",marginLeft:"8px"}} onClick={handleSave}>Submit</button>
            </div></>)||(writeReview===false && 
            <div className="write-review-btn" style={{display:"flex",justifyContent:"center",marginTop:"13px"}}>
             <button style={{backgroundColor:"#036974",color:"white",border:"1px solid #036974",float:"right",fontSize:"14px",padding:"6px 10px",borderRadius:"3px",marginTop:"0px"}} onClick={()=>handleWriteReview(true)}>Write Review</button>
             </div>)
         }
       

        </div>
    )
}

export default UserRating;