import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';
import '../CSS/write.css';
import { RiDeleteBinLine } from "react-icons/ri";
import YourComponent from './YourComponent';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
function Write() {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    let date=new Date().toLocaleDateString();


    const saveNotify=()=>{ toast.info("Saved Succesfully !",{
        position:"bottom-center",
        theme:"dark"
    })}
    return (
        <div className="text-editor" style={{marginTop: "120px"}}>
            <div class="write-head" style={{backgroundColor:"white"}}>
    <header class="row d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom " style={{marginRight:"10px",marginLeft:"10px"}}>
      
  <div class="col-sm-5 date" style={{fontWeight:"bold",textAlign:"center",paddingLeft:"10px"}}>New Draft- {date}</div>
  <div class="col-sm-7 text-end handle-text">
 <Link to="/Anukriti/publish" style={{textDecoration:"none"}}>
  <button type="button" class="btn btn-danger "style={{marginLeft:"5px"}}>PUBLISH</button>
  </Link>
        <button type="button" class="btn btn-primary" style={{marginLeft:"5px"}} onClick={saveNotify}>Save</button>
        <span> <RiDeleteBinLine style={{marginLeft:"6px",fontSize:"40px",cursor:"pointer"}}/></span>
</div>
    </header>
  </div>
            <JoditEditor
                ref={editor}
                value={content}
                // config={editorConfig} // Pass the configuration object here
                onChange={newContent => setContent(newContent)}
            />
            <YourComponent htmlContent={content}/>
            <ToastContainer style={{marginBottom:"20px"}}/>
        </div>

    );
}

export default Write;
