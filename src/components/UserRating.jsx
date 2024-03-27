import { useState } from 'react';
import authorImg from '../assets/user-photo.jpg';
import { FaRegStar } from "react-icons/fa";
import StarCount from './SatrCount';



function UserRating(){
    const [rating,setRating]=useState(0);
    const [writeReview,setWriteReview]=useState(false);
    const handleStar=(star)=>{
        setRating(star);
    }
    const handleWriteReview=()=>{
        setWriteReview(writeReview=>!writeReview);
    }
    return(
        <div className="user-rating">
           <div className="user-img" style={{display:"flex",justifyContent:"center"}}><img src={authorImg} alt="" srcset="" style={{width:"60px",height:"60px",borderRadius:"50%",border:"2px solid #cbc8c8"}}/></div>
           <div style={{display:"flex",justifyContent:"center",fontSize:"14px",marginTop:"9px",fontWeight:"500"}}>Your Rating</div>

           {
             (rating===0 && <div className="before-rating" style={{display:"flex",justifyContent:"center",marginTop:"13px"}}>
             <FaRegStar className="before-rating-star" onClick={()=>handleStar(1)}/>
             <FaRegStar className="before-rating-star" onClick={()=>handleStar(2)}/>
             <FaRegStar className="before-rating-star" onClick={()=>handleStar(3)}/>
             <FaRegStar className="before-rating-star" onClick={()=>handleStar(4)}/>
             <FaRegStar className="before-rating-star" onClick={()=>handleStar(5)}/>
         </div>) || (rating!==0 && <div className="after-rating" style={{display:"flex",justifyContent:"center",marginTop:"1px"}}>
                 <StarCount rating={rating} ratingColor='#056974'/>
           </div>)
           }
            
         {
            (writeReview===true &&  
            <><div className="write-review-section" style={{display:"flex",justifyContent:"center",marginTop:"13px"}}>
            <textarea class="form-control" placeholder="Write Review" type="text" id="validationDefault05" 
            style={{width:"92%",height:"80px"}}
            > </textarea>
            </div>
    
            <div className="review-action" style={{display:"flex",justifyContent:"flex-end",paddingRight:"4%"}}>
            <button className="review-cancel" style={{border:"none",fontSize:"14px",padding:"6px 7px",borderRadius:"3px",marginTop:"11px"}} onClick={handleWriteReview}>Cancel</button>
            <button style={{backgroundColor:"#036974",color:"#fff",border:"1px solid #036974",float:"right",fontSize:"14px",padding:"6px 10px",borderRadius:"3px",marginTop:"11px",marginLeft:"8px"}}>Submit</button>
            </div></>)||(writeReview===false && 
            <div className="write-review-btn" style={{display:"flex",justifyContent:"center",marginTop:"13px"}}>
             <button style={{backgroundColor:"#036974",color:"white",border:"1px solid #036974",float:"right",fontSize:"14px",padding:"6px 10px",borderRadius:"3px",marginTop:"0px"}} onClick={handleWriteReview}>Write Review</button>
             </div>)
         }
       

        </div>
    )
}

export default UserRating;