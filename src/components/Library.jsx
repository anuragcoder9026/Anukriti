import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

import libraryImg from '../assets/library.webp';
import { Link } from "react-router-dom";
function Library(){


    return(
        <Link to="/Anukriti/other-story" style={{textDecoration:"none"}}>
        <div className="library-element" style={{width:"265px",height:"244px",border:"1px solid #d3d2d2"}}>
          <img src={libraryImg} alt="" srcset="" style={{width:"250px",height:"150px",margin:"6px"}}/>
          <p style={{margin:"0px 8px",color:"#212121",overflow:"hidden",whiteSpace:"nowrap",fontSize:"18px", textOverflow:"ellipsis"}}>Time Travel: A mystry</p>
          <div className="lib-discript" style={{display:"flex",marginTop:"10px",fontSize:"12px",color:"#212121"}}>
            <span style={{flexGrow:"1",flexBasis:"33%",padding:"12px 5px",border:"1px solid #d3d2d2",textAlign:"center",fontWeight:"500"}}><FaStar class="mb-1"/> 4.9</span>
            <span style={{flexGrow:"1",flexBasis:"33%",padding:"12px 5px",border:"1px solid #d3d2d2",textAlign:"center",fontWeight:"500",}}><FaEye className="fs-6 "style={{marginRight:"5px",marginBottom:"2px"}}/>53,232</span>
            <span style={{flexGrow:"1",flexBasis:"33%",padding:"12px 5px",border:"1px solid #d3d2d2",textAlign:"center",fontWeight:"500"}}><FaClock style={{marginRight:"5px",marginBottom:"2px"}}/>5 hours</span>
          </div>
        </div>
        </Link>
    )
}

export default Library;