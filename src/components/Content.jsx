import { MdDateRange } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import contentImg from '../assets/content-image.jpg';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currentContentAction } from "../store/currentContentSlice";
function Content({id}){
    const dispatch=useDispatch();
    const handleContent=()=>{
        dispatch(currentContentAction.handleCurrentContent(id));
     }

    return(
         <Link to="/Anukriti/other-story/self" className="user-content" style={{width:"151px",height:"300px",border:"1px solid #d3d2d2",marginBottom:"6px",textDecoration:"none"}} onClick={handleContent}>
             <img src={contentImg} alt="" srcset="" style={{width:"150px",height:"220px"}}/>
              <div style={{color:"#555",marginTop:"8px",fontWeight:"bold",paddingLeft:"8px",fontSize:"14px",marginBottom:"5px"}}>Time Travel</div>
              <div style={{color:"#555",paddingLeft:"8px",fontSize:"12px",fontWeight:"500"}}><MdDateRange class="fs-6 mb-1" style={{marginRight:"3px"}}/>30 july 2024</div>
              <div style={{color:"#555",paddingLeft:"8px",fontSize:"12px",fontWeight:"500",marginTop:"3px"}}><FaStar class="fs-7 " style={{marginRight:"3px",marginBottom:"5px"}}/>4.8<FaEye class="fs-7" style={{marginRight:"5px",marginLeft:"15px",marginBottom:"3px"}}/>15894</div>
         </Link>
    )
}

export default Content;