import { Link } from 'react-router-dom';
import authorImg from '../assets/user-photo.jpg';
import { IoPersonAdd } from "react-icons/io5";
import { useState } from 'react';
import { TiTick } from "react-icons/ti";
function AboutAuthor({story}){
 const [aboutFollow,setAbouFollow]=useState(true);
 const handleFollow=()=>{setAbouFollow(!aboutFollow)};
    return(
      <div className="about-author"style={{width:"100%",backgroundColor:"white",padding:"6px 0px",border:"1.5px solid rgba(0,0,0,.125)"}}>
               {story==='self' &&<>
                <div className="about-title">Summary</div>
                <div className="about-summary">
                This story is a boy who was very poor and was living in a very 
                small village .He wanted achieve a big position his life but due
                to income of his family He could not go any Where outside the Home
                but he often goes to city for making money
                </div>
                </>
               }
             <div className="about-title">About</div>
             <div className="author" style={{padding:"2px 10px"}}>
                <img src={authorImg} alt="" srcset="" style={{width:"50px",height:"50px",borderRadius:"50%"}}/>
                <Link to={story==='self' ? '/Anukriti/profile/self' :'/Anukriti/profile/other'} style={{textDecoration:"none",fontSize:"14px",marginLeft:"15px"}}>Anurag singh</Link>
                 
                 {
                  story==='other' && <button style={{color:"#036974",border:"1px solid #036974",float:"right",fontSize:"14px",borderRadius:"3px",marginTop:"11px",padding:aboutFollow ? '6px 20px' :'6px 11.5px'}} onClick={handleFollow}>{aboutFollow ? <IoPersonAdd style={{marginRight:"6px",marginBottom:"3px"}}/>  :<TiTick style={{marginRight:"6px",marginBottom:"3px"}}/>}{aboutFollow ? 'Follow' :'Following'}</button>
                 }

             </div>
             <div className="author-desc" style={{marginLeft:"10px",marginTop:"5px",fontSize:"14px"}}>My name is Anurag Singh.</div>
      </div>
    )
}

export default AboutAuthor;