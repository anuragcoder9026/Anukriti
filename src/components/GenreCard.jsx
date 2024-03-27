
import { MdOutlineLibraryBooks } from "react-icons/md";
import '../CSS/Category.css';
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { CgPlayListCheck } from "react-icons/cg";
import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
function GenreCard({GenreCardimg}){
       const [library,setLibrary]=useState(false);
       const handleLibrary=()=>{
        setLibrary(library=>!library);
       }
    return(
           <Link to="/Anukriti/aboutStory" className="genre-card" style={{height:"190px",display:"flex",backgroundColor:"white",textDecoration:"none",color:"black"}}>
            <div className="genre-card-right" style={{
            backgroundImage:` linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%),url(${GenreCardimg})`,
            backgroundRepeat:"no-repeat",
            width:"125px",
            height:"100%",
            backgroundSize:"100% 100%",
            opacity:"0.95",
            }}> <span style={{position:"relative",top:"163px",left:"4%",color:"white",fontSize:"14px",fontWeight:"500"}}><MdOutlineLibraryBooks style={{fontSize:"16px",marginRight:"7px"}}/>52 parts</span> </div>
            <div className="genre-card-right" style={{width:"80%",height:"90%",marginRight:"10px",marginTop:"6px"}}>
                <div className="genre-card-right-top" style={{display:"flex",justifyContent:"space-between"}}>
              <p className="genre-title" style={{fontWeight:"600",width:"80%",marginBottom:"0px"}}>Love Is Love </p>
              {(library &&  <CgPlayListCheck style={{fontSize:"30px",marginTop:"2px"}} onClick={handleLibrary}/>) || (!library && <MdOutlinePlaylistAdd style={{fontSize:"30px",marginTop:"2px"}} onClick={handleLibrary}/>)}
                </div>
                <p className="genre-author" style={{fontWeight:"600",color:"#555",marginLeft:"12px"}}>Anurag Singh</p>
                <p className="genre-desc">This love story is just fabulous like what a true love story should be ? much enjooyed keep Writing with your interest beloved my dear,god may bless you and you achiev very high position in your life</p>
                <div className="genre-reading" style={{marginLeft:"10px"}}>
                <FaStar style={{marginBottom:"4px"}}/> <span><b>4.9 </b>(159)</span> <FaEye style={{marginLeft:"10px",marginBottom:"2px"}}/> <span><b>75K+</b> Reads</span>
                </div>
            </div>
           </Link>
    )
}

export default GenreCard;