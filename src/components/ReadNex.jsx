import CreateImg from '../assets/card1.jpg';
import { Link } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import StarCount from './SatrCount';
function ReadNext(){
    
    return(
        <div className="read-next" style={{width:"100%",padding:"0px",marginTop:"35px"}}>
        <div className="read-next-upper" style={{}}>
            <img src={CreateImg} alt="" srcset="" className="read-next-upper-left" />
            <div className="read-next-upper-right">
                <p style={{fontSize:"12px",fontWeight:"500",marginLeft:"8px",marginBottom:"2px"}}>Read the Next part here...</p>
                <p style={{fontWeight:"450",marginLeft:"8px",marginBottom:"4px"}}>Starting Falling For you</p>
                <p style={{fontSize:"12px",fontWeight:"500",marginLeft:"8px",marginBottom:"2px"}}>Anurag Singh</p>
                
                <div style={{fontSize:"12px",marginLeft:"8px"}}> <StarCount rating={4.8} ratingColor='#056974'/><span style={{marginLeft:"5px"}}>4.8</span> </div>
                   
            </div>
        </div>
        <div className="read-next-bottom">
                 <p className="summary" style={{marginLeft:"1px",fontSize:"15px",height:"60px"}}>
                      This story is a boy who was very poor and was living in a very small village .He wanted achieve a big position his life but due to income of his family
                </p>
            <div className="read-next-actions">
                <button className="download-btn"> <IoMdDownload style={{fontSize:"25px",marginRight:"5px",marginBottom:"4px"}}/>Download</button>
                <Link to="#">
                    <button className="read-next-btn"><FaEye style={{fontSize:"23px",marginBottom:"3px"}}/> Read Next Part</button>
                </Link>

            </div>
          
        </div>
     </div>
    )
}

export default ReadNext;