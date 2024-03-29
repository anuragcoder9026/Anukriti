import { useEffect, useState } from 'react';
import authorImg from '../assets/user-photo.jpg';
import { FaRegStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

function UserRating({rate=0}){
    const [rating,setRating]=useState(0);
    useEffect(()=>{
        if(rate>0) setRating(rate);
    },[rate])
    const [writeReview,setWriteReview]=useState(true);
    const handleStar=(star)=>{
        setRating(star);
    }
    const handleWriteReview=(val)=>{
        setWriteReview(val);
    }
    const handleDelete=()=>{
        setRating(0);
        setWriteReview(false);
    }
    const handleEdit=()=>{
        setWriteReview(true);
    }
    return(
        <div className="user-rating">
           <div className="user-img" style={{display:"flex",justifyContent:"center"}}><img src={authorImg} alt="" srcset="" style={{width:"60px",height:"60px",borderRadius:"50%",border:"2px solid #cbc8c8"}}/></div>
           <div style={{display:"flex"}}>
           <div style={{display:"flex",justifyContent:"flex-end",fontSize:"14px",marginTop:"9px",fontWeight:"500",width:"58%"}}>Your Rating 
          </div>
          
           <div class="dropdown" style={{display:"flex",justifyContent:"flex-end",width:"40%",marginRight:"20px"}}>
  <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{float:"right"}}>
  <BsThreeDotsVertical />
  </button>
  <ul class="dropdown-menu" style={{fontSize:"12px"}}>
    <li><a class="dropdown-item" href="#" style={{fontWeight:"500"}} onClick={handleEdit}>Edit Review</a></li>
    <li><a class="dropdown-item" href="#" style={{fontWeight:"500"}} onClick={handleDelete}>Delete Review</a></li>
  </ul>
</div>
          
          </div>
          <div style={{fontSize:"25px",display:"flex",justifyContent:"center",marginTop:"1px",     color:"#056974"}}>
  {rating>=1?<FaStar onClick={()=>handleStar(1)}/>:<FaRegStar onClick={()=>handleStar(1)}/>}
  {rating>=2?<FaStar onClick={()=>handleStar(2)}/>:<FaRegStar onClick={()=>handleStar(2)}/>}
  {rating>=3?<FaStar onClick={()=>handleStar(3)}/>:<FaRegStar onClick={()=>handleStar(3)}/>}
  {rating>=4?<FaStar onClick={()=>handleStar(4)}/>:<FaRegStar onClick={()=>handleStar(4)}/>}
  {rating==5?<FaStar onClick={()=>handleStar(5)}/>:<FaRegStar onClick={()=>handleStar(5)}/>}   
          </div>
            
         {
            (writeReview===true &&  
            <><div className="write-review-section" style={{display:"flex",justifyContent:"center",marginTop:"13px"}}>
            <textarea class="form-control" placeholder="Write Review" type="text" id="validationDefault05" 
            style={{width:"92%",height:"80px"}}
            > </textarea>
            </div>
    
            <div className="review-action" style={{display:"flex",justifyContent:"flex-end",paddingRight:"4%"}}>
            <button className="review-cancel" style={{border:"none",fontSize:"14px",padding:"6px 7px",borderRadius:"3px",marginTop:"11px"}} onClick={()=>handleWriteReview(false)}>Cancel</button>
            <button style={{backgroundColor:"#036974",color:"#fff",border:"1px solid #036974",float:"right",fontSize:"14px",padding:"6px 10px",borderRadius:"3px",marginTop:"11px",marginLeft:"8px"}}>Submit</button>
            </div></>)||(writeReview===false && 
            <div className="write-review-btn" style={{display:"flex",justifyContent:"center",marginTop:"13px"}}>
             <button style={{backgroundColor:"#036974",color:"white",border:"1px solid #036974",float:"right",fontSize:"14px",padding:"6px 10px",borderRadius:"3px",marginTop:"0px"}} onClick={()=>handleWriteReview(true)}>Write Review</button>
             </div>)
         }
       

        </div>
    )
}

export default UserRating;