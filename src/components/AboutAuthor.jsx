import { Link } from 'react-router-dom';
import authorImg from '../assets/user-photo.jpg';
import { IoPersonAdd } from "react-icons/io5";

function AboutAuthor(){

    return(
      <div className="about-author"style={{width:"100%",backgroundColor:"white",padding:"6px 0px",border:"1.5px solid rgba(0,0,0,.125)"}}>
             <div className="about-title">About</div>
             <div className="author" style={{padding:"2px 10px"}}>
                <img src={authorImg} alt="" srcset="" style={{width:"50px",height:"50px",borderRadius:"50%"}}/>
                <Link to="" style={{textDecoration:"none",fontSize:"14px",marginLeft:"15px"}}>Anurag singh</Link>
                <button style={{color:"#036974",border:"1px solid #036974",float:"right",fontSize:"14px",padding:"6px 20px",borderRadius:"3px",marginTop:"11px"}}><IoPersonAdd style={{marginRight:"6px",marginBottom:"3px"}}/>Follow</button>
             </div>
             <div className="author-desc" style={{marginLeft:"10px",marginTop:"5px",fontSize:"14px"}}>My name is Anurag Singh.</div>
      </div>
    )
}

export default AboutAuthor;