
import '../CSS/publish.css'
import { ImCross } from "react-icons/im";
import coverImg from '../assets/publish.jpg'
import { FaCamera } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import {useRef, useState } from 'react';
import { IoMdSend } from "react-icons/io";
import { Link } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Publish (){

     let genreList=[['action & adventure',false],['biography',false],['children',false],['creative',false], ['non-fiction',false],['crime',false],['detective',false],['drama',false],['fantasy',false],['historical',false],['horror',false],['humour',false],['life',false],['motivational',false],['murder mystery',false],
     ['mythology',false],['religion',false],['romance',false],['satire',false],['science fiction',false],['short story',false],['social',false],['thriller',false],['tragedy',false],['travel',false],['women',false],['young adult',false]
    ];

    const publishNotify=()=>{ toast.success("Published Succesfully !",{
        position:"bottom-center",
        theme:"dark"
    })}
    
    const saveNotify=()=>{ toast.info("Saved Succesfully !",{
        position:"bottom-center",
        theme:"dark"
    })}

    const[dropdown,setDropdown]=useState(false);
    const handleDropdown=()=>{setDropdown(!dropdown)};

    const [series,setSeries]=useState('Not a Series');
    const handleSetSeries=(e)=>{
        e.target.style.backgroundColor="rgb(235 231 231";
        setTimeout(function() {
            setSeries(e.target.innerText);
            setDropdown(false);  
            if(e.target.innerText==='Not a Series') setShowCategory(true);
            else setShowCategory(false);
        }, 200);
    };
    
    const [showCategory,setShowCategory]=useState(true);
    const handleGenreClick=(e)=>{
         genreList.map((item,index)=>{
            if(e.target.innerText===item[0]) {
                item[1]=(!item[1]);
                if(item[1]){
                    e.target.style.border="1px solid rgba(5,105,116,.38)";
                    e.target.style.backgroundColor="#e6f0f1";
                    e.target.style.color="#056974";
                    console.log(e.target.innerText);
                }
                else{
                    e.target.style.border="1px solid rgba(0,0,0,0.125)";
                    e.target.style.backgroundColor="#fff";
                    e.target.style.color="#666666";
                }
            }
         })
    };

    return(
         <div className="publish">
            <div className="go-back" style={{margin:"10px auto",height:"40px",display:"flex",justifyContent:"flex-end"}}>
                <Link to="/Anukriti/write" style={{textDecoration:"none"}}>
            <ImCross style={{marginRight:"20px",marginTop:"12px"}}/></Link>
            </div>
            <div className="img-title-summary">
                 <div className="cover-img">
                      <p style={{marginBottom:"8px"}}>Add Cover Image</p>
                      <div className="add-cover-img" style={{
                         background:`url(${coverImg})`,
                         backgroundRepeat:"no-repeat",
                         backgroundSize:"190px 300px"}}>
                         <span style={{backgroundColor:"white",padding:"1px 9px",marginBottom:"0.5px"}}>
                         <FaCamera style={{fontSize:"18px"}}/>  
                        </span>   
                      </div>
                 </div>
                 <div className="title-summary">
                        <p style={{marginBottom:"8px"}}>Add Title</p>
                        <input type="text" name="title" id=""  placeholder="Enter Title here" style={{border:"none",width:"100%",padding:"10px",borderRadius:"4px",marginBottom:"35px",fontSize:"14px"}} />
                        <p style={{marginBottom:"8px"}}>Add Summary</p>
                        <textarea type="text" name="title" id="" placeholder="Enter Summary here" style={{border:"none",width:"100%",padding:"10px",borderRadius:"4px",height:"150px",maxHeight:"150px",minHeight:"150px",fontSize:"14px"}}/>
                        <p style={{marginBottom:"2px",marginTop:"15px"}}>Series</p>
                        <div class="series-dropdown-btn" style={{display:"flex",padding:"6px 8px",backgroundColor:"#d3d1d1"}}>
                          <p style={{width:"92%",marginBottom:"0px",fontWeight:"500"}}>{series}</p><IoMdArrowDropdown style={{marginTop:"6px",cursor:"pointer"}} onClick={handleDropdown}/>
                        </div>
                        <div className="drop">
                        {
                            dropdown && 
                            <div className="series-dropdown">
                               <p style={{color:"#21259",marginBottom:"6px",fontSize:"15px",fontWeight:"500"}}>Create Series</p>
                               <input type="text" name="series" id="" placeholder="Type Here" style={{border:"none",width:"100%",padding:"10px",borderRadius:"4px",marginBottom:"0px",fontSize:"14px",color:"#666",fontWeight:"500",backgroundColor:"#f4f4f4"}}/>
                               <hr />
                               <p style={{color:"#21259",marginBottom:"6px",marginTop:"6px",fontSize:"15px",fontWeight:"500",padding:"10px",cursor:"pointer"}} onClick={handleSetSeries}>Not a Series</p>
                               <hr />
                               <p style={{color:"#21259",marginBottom:"6px",marginTop:"6px",fontSize:"15px",fontWeight:"500",padding:"10px",cursor:"pointer"}} onClick={handleSetSeries}>Time Travel A mystery</p>
                            </div>
                        }
                        </div>
                       
                       

                 </div>

            </div>
            {
                showCategory &&
                <div className="category-list">
                <p style={{fontWeight:"500",marginBottom:"4px"}}>Categories</p>
                <div className="all-category">
                <div className="genre-list" style={{display:"flex",flexWrap:"wrap"}}>
                     {genreList.map((genre,index)=>(
                     <button className="genreBtn" onClick={handleGenreClick}>{genre[0]}</button>))}
                </div>
                </div>  
            </div>

            }
            
            <div className="own-category">
                {
                    showCategory &&
                    <>
                    <p style={{color:"#666",fontSize:"15px",marginBottom:"6px",fontWeight:"500"}}>Add Your Own Category</p>
                <input type="text" name="OwnCategory" id="" placeholder="Type Here" style={{border:"none",padding:"10px",borderRadius:"4px",marginBottom:"35px",fontSize:"14px",color:"#666",fontWeight:"500"}}/>
                <IoMdSend style={{fontSize:"30px",marginLeft:"12px"}}/>
                    </>
                    
                }
                
                <div className="privacy-policy">
                <input type="checkbox" name="privacy" id="" style={{width:"18px",height:"20px"}}/>
                <span style={{color:"#666",fontSize:"14px",marginLeft:"5px",position:"relative",bottom:"4px",fontWeight:"500"}}>I accept Copyright policy and term of Services</span>
                </div>

                <div className="publish-submit" style={{marginTop:"20px"}}>
                    <button type="submit" style={{border:"none",backgroundColor:"#d32f2f",fontWeight:"700",padding:"8px 16px",fontSize:"14px",cursor:"pointer",color:"#fff",borderRadius:"3px",marginRight:"20px"}} onClick={publishNotify}>
                        PUBLISH
                    </button>
                    <button type="button" style={{border:"1px solid #d32f2f",backgroundColor:"#fff",fontWeight:"700",padding:"9px 27px",fontSize:"11px",cursor:"pointer",color:"#d32f2f",borderRadius:"3px"}} onClick={saveNotify}>
                        SAVE
                    </button>
                </div>
            </div>
            <ToastContainer style={{marginBottom:"20px"}}/>
         </div>
    )
}

export default Publish;