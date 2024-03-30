import '../CSS/aboutStory.css'
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
function ChapterList({title}){

    return(
         <div className="one-chapter" style={{height:"95px",backgroundColor:"#fff",borderRadius:"15px",paddingTop:"20px",paddingLeft:"20px",paddingRight:"15px"}}>
             <div className="title-date" style={{display:"flex",justifyContent:"space-between",height:"40%",alignItems:"center"}}>
                <p  className="title" style={{width:"55%",fontWeight:"bold",marginBottom:"0px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{title}</p>
                <p className="date" style={{marginBottom:"0px",color:"#616161"}}>31 August 2024</p>
             </div>
             <div className="chapter-list-reading" style={{height:"50%"}}>
                 <FaEye style={{fontSize:"19px",marginBottom:"3px",marginRight:"5px"}}/><span>5K+</span>
                 <FaStar style={{fontSize:"17px",marginBottom:"4px",marginLeft:"15px",marginRight:"4px"}}/><span>4.8</span>
                 <FaClock style={{marginBottom:"4px",marginLeft:"17px",marginRight:"5px"}}/><span>1 minute</span>
             </div>
         </div>
    )
}

export default ChapterList;