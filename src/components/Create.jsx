import { Link } from "react-router-dom";
import "../CSS/create.css";
import Draft from "./Draft";
import { RiDraftLine } from "react-icons/ri";
function Create() {
  return (
    <div style={{backgroundColor:"#f8f8f8",paddingBottom:"40px"}}>
    <div class="card-create text-center d-flex align-items-center"
      style={{ margin: "auto", width: "90%", minHeight: "150px",marginTop:"100px",marginBottom:"30px" }}>
      <div class="card-body">
        <p style={{ fontSize: "1rem" }}>
          Here, you can write your Creation on Anukriti...
        </p>
        <Link to="/write" class="btn btn-danger">
          Add new Creation
        </Link>
      </div>
    </div>
    <div className="draft-head" style={{backgroundColor:"white",width:"90%",margin:"0 4.3vw",paddingBottom:"20px"}}>
    <span style={
        {display:"inline-block",
            width: "5px",
            height: "50px",
            backgroundColor: "brown",
            position:"relative",
            top:"12px"
        }
       }></span> 
       <h2 style={{display:"inline-block",width: "150px",
            height: "50px",marginLeft:"10px",fontFamily:"serif",fontSize:"2rem",fontWeight:"550"}}>
        <RiDraftLine style={{marginTop:"-4px",marginRight:"6px",}}/>Draft</h2>   
      
    <div className="d-flex  gap-2 card-cont" style={{overflow:"scroll",padding:"10px",width:"98%",margin:"0 0.8vw",backgroundColor:"white"}}>
   <Draft/><Draft/><Draft/><Draft/><Draft/><Draft/><Draft/><Draft/><Draft/><Draft/><Draft/><Draft/><Draft/><Draft/><Draft/><Draft/><Draft/>
   </div>
   </div> 
   </div>
  );
}

export default Create;
