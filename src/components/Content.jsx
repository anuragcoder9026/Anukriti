import { MdDateRange } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import contentImg from '../assets/content-image.jpg';
function Content(){


    return(
         <div className="user-content" style={{width:"151px",height:"300px",border:"1px solid #d3d2d2",marginBottom:"6px"}}>
             <img src={contentImg} alt="" srcset="" style={{width:"150px",height:"220px"}}/>
              <div style={{color:"#555",marginTop:"8px",fontWeight:"bold",paddingLeft:"8px",fontSize:"14px",marginBottom:"5px"}}>Time Travel</div>
              <div style={{color:"#555",paddingLeft:"8px",fontSize:"12px",fontWeight:"500"}}><MdDateRange class="fs-6 mb-1" style={{marginRight:"3px"}}/>30 july 2024</div>
              <div style={{color:"#555",paddingLeft:"8px",fontSize:"12px",fontWeight:"500",marginTop:"3px"}}><FaStar class="fs-7 " style={{marginRight:"3px",marginBottom:"5px"}}/>4.8<FaEye class="fs-7" style={{marginRight:"5px",marginLeft:"15px",marginBottom:"3px"}}/>15894</div>
         </div>
    )
}

export default Content;