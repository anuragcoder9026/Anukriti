import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import CreateImg from '../assets/card1.jpg';
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import {useDispatch} from 'react-redux';
import { deleteAction } from "../store/deleteSlice";
function ReadNow({story}){
    const dispatch=useDispatch();
         const handleDelete=()=>{
            dispatch(deleteAction.handlePopup(true));
       }
    return(
         <div className="read-now" style={{width:"100%",backgroundColor:"white",padding:"9px",border:"1.5px solid rgba(0,0,0,.125)"}}>
            <div className="read-now-upper" style={{}}>
                <img src={CreateImg} alt="" srcset="" className="read-now-upper-left" />
                <div className="read-now-upper-right">
                    <p style={{fontWeight:"700",marginLeft:"8px",marginBottom:"0px"}}>Unmarried Mother</p>
                    <Link to="" style={{fontSize:"14px",marginLeft:"10px"}}>Anurag Singh</Link>
                    {
                        story==='self' &&
                        <p className="publish-date" style={{fontSize:"13px",marginLeft:"10px",color:"#737373",display:"flex",flexWrap:"wrap",gap:"4px"}}><span style={{marginLeft:"0px"}}>Publish Date:</span><span style={{marginLeft:"0px"}}>24 July2024 </span></p>
                    }
                    <div className="post-reading" style={{display:"flex",flexWrap:"wrap",marginTop:"25x"}}>
                    <span><FaStar style={{marginBottom:"3px"}}/> 4.8 </span>
                    <span><FaEye style={{marginRight:"3px"}}/>5689</span>
                    <span><FaClock style={{marginRight:"3px",fontSize:"11px",marginBottom:"2px"}}/>8 minute</span>
                    </div>
                    <div className="category">
                        <Link className="category-gene">Horror</Link>
                        <Link className="category-gene">Love</Link>
                    </div>
                    <p className="summary">
                          This story is a boy who was very poor and was living in a very small village .He wanted achieve a big position his life but due to income of his family
                    </p>
                </div>
            </div>
            {
              story==='self' && <div className="edit-delete" style={{display:"flex",justifyContent:"center",fontSize:"14px",marginTop:"15px"}}>
              <button style={{border:"none",color:"brown",padding:"7px",marginRight:"10px",paddingRight:"14px"}} onClick={handleDelete}><MdDeleteOutline style={{fontSize:"16px"}}/> Delete </button>
              <Link to="/Anukriti/write" style={{textDecoration:"none"}}><button style={{border:"none",color:"green",padding:"7px 18px",marginLeft:"10px",paddingRight:"20px"}}><MdOutlineEdit style={{fontSize:"16px"}}/> Edit</button></Link>
        </div>
            }
                  
            <div className="read-now-bottom">
                <div className="read-now-actions" style={{display:"flex",justifyContent:"center"}}>
                    {
                        story==='other' && <button className="library-btn"> < MdOutlineLibraryAdd style={{fontSize:"25px",marginRight:"5px"}}/>Library</button>
                    }
                    
                    <Link to={story==='self' ? '/Anukriti/book-content/self' :'/Anukriti/book-content/other'} style={{width:"50%",}}>
                        <button className="read-btn"> Read now</button>
                    </Link>

                </div>
                <div className="read-now-share" style={{marginTop:"25px",textAlign:"center"}}>
                    <span >Share with Your Friends: </span> 
                    <span style={{backgroundColor:"green",padding:"6px 8px",borderRadius:"50%",width:"25px",height:"25px",marginLeft:"5px",marginRight:"5px"}}>
                        <BsWhatsapp style={{color:"white"}}/> 
                    </span>
                    <span style={{backgroundColor:"blue",padding:"6px 8px",borderRadius:"50%",width:"25px",height:"25px",marginLeft:"5px"}}>
                        <FaFacebookF style={{color:"white"}}/> 
                    </span>
                </div>
            </div>
         </div>
    )
}

export default ReadNow;