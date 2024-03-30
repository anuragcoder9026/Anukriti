import { Link } from 'react-router-dom';
import commentorImg from '../assets/user-photo.jpg';
import StarCount from './SatrCount';
import { AiFillLike } from "react-icons/ai";

function Comments(){
    
    return(
           <div className="single-comments" style={{display:"flex",marginBottom:"10px"}}>
            <Link to="#" className="comentor-img">
               <img src={commentorImg} alt=""  style={{width:"42px",height:"42px",borderRadius:"50%",marginLeft:"15px",marginTop:"7px"}}/>
            </Link>
            <div className="comment-content">
                  <div style={{marginBottom:"-8px"}} className="commentor-name" ><p style={{marginBottom:"-8px"}}><Link to="#" style={{color:"black",fontWeight:"bold",fontSize:"12px"}}>Shubham Patel</Link></p>
                  <StarCount rating={5} ratingColor='#aeadae'></StarCount> <span style={{fontSize:"12px",color:"#999",marginLeft:"4px"}}>24 August 2024</span>
                  </div>
             <div className="comment-desc">
                    This story was much about happy life and a person can enjoy through his bad times. A very unique way of writing and beautiful words.
            </div>
            <div className="like">18<AiFillLike style={{marginLeft:"10px",marginBottom:"3px",fontSize:"16px"}} />
            </div>
             </div>
           </div>
    )
}

export default Comments;