import { MdOutlineLibraryAdd } from "react-icons/md";
import { GrDownload } from "react-icons/gr";
import '../CSS/aboutStory.css';
import cardImg from '../assets/card1.jpg';
import { Link } from "react-router-dom";
import authorImg from '../assets/user-photo.jpg'
import { useState } from "react";
import ChapterList from "./ChapterList";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AboutStory(){
    const[follow,setFollow]=useState(false);
    const handleFollow=()=>{
      setFollow(!follow)
       if(!follow){toast.success("You Are Following Anurag Singh",{
        position:"bottom-center",
        theme:"dark"})}
        else{
          toast.warn("You have Unfollowed Anurag Singh",{
            position:"bottom-center",
            theme:"dark"})
        }
    }


    return(<div style={{backgroundColor:"#f1ecec",paddingBottom:"60px"}}>
        <div class="about-story-row" style={{marginTop:"87px",backgroundColor:"#f1ecec",paddingTop:"25px",paddingBottom:"15px"}}>
        <div class="about-story-col col1">
            <img src={cardImg} alt="Loading.."  style={{marginTop:"10px",borderRadius:"10px"}}/>
        </div>
        <div class="about-story-col col2">
            <h1 style={{fontWeight:"600"}}>Endless Love</h1>
            <button style={{border:"solid grey 1px",marginLeft:"3px",padding:"2px 8px",borderRadius:"10px"}}>Romance</button>
            <button style={{border:"solid grey 1px",marginLeft:"10px",padding:"2px 8px",borderRadius:"10px"}}>Women</button>
            <p className="story-para" style={{marginTop:"15px",fontWeight:"500",maxHeight:"80px",marginBottom:"60px",}}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla et quos nostrum minima consequatur iste nihil! Veniam accusantium  consectetur ...
            </p>
            <div class="descript-row">
                  <div class="descript-col2">
                    <p class="fs-5" style={{fontWeight:"800",color:"green",marginBottom:"0px"}}>★ 4.7</p>
                    <p style={{fontSize:"14px"}}>( 8.2K )</p>
                    </div>

                  <div class="descript-col3">
                  <p style={{fontWeight:"800",fontSize:"20px",marginBottom:"0px"}}>4 Hours</p>
                  <p style={{fontSize:"15px"}}>Reading Time</p>
                  </div>

                  <div class="descript-col4">
                  <p style={{fontWeight:"800",fontSize:"20px",marginBottom:"0px"}}>56594+</p>
                  <p style={{fontSize:"15px"}}>Reading Count</p>
                  </div>
            </div>
            <div class="btn-story" >
               <Link  to="/Anukriti/book-content/other" class="btn-story-read"><button type="button" class="btn btn-danger">Read Now</button></Link>
               <div class="btn-story-library"><MdOutlineLibraryAdd className="fs-2"style={{marginTop:"8px"}}/></div>
               <div class="btn-story-download"><GrDownload className="fs-3" style={{marginTop:"6px"}}/></div>
            </div>
        </div>
      </div>
        <div className="about-author-row">
               <div className="author-sec" style={{display:"flex",marginLeft:"10px"}}>
                     <Link to="/Anukriti/profile/other" style={{marginTop:"15px"}}><img src={authorImg} alt="" srcset="" style={{width:"56px",height:"56px",borderRadius:"50%"}}/></Link>
                    <div className="name-follow" style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",marginLeft:"14px"}}>
                      <Link to="/Anukriti/profile/other" className="auth-name">Anurag Singh "Poet"</Link>
                      <Link to="/Anukriti/profile/other" className="auth-follow">5K Follower</Link> 
                    </div>
               </div>
               <div className="follow-btn" style={{display:"flex",alignItems:"center",marginRight:"25px",color:"#00626c",}}>
                    <span onClick={handleFollow} style={{cursor:"pointer"}}>{follow ? 'Following' : 'Follow'}</span>
               </div>
        </div>
         <p style={{fontWeight:"bold",width:"90%",margin:"0px auto",fontSize:"19px",marginTop:"25px",borderLeft:"3.5px solid brown",paddingLeft:"12px",height:"40px",paddingTop:"6px"}}>Chapters</p>

         <div className="all-chater" style={{display:"flex",gap:"15px",width:"90%",margin:"20px auto",flexWrap:"wrap"}}>
              <ChapterList title={'1. His Love Inside'}/><ChapterList title={'2. Chapter - 1'}/><ChapterList title={'3. Chapter - 2'}/><ChapterList title={'4. Chapter - 3'}/><ChapterList title={'5. Chapter - 4'}/><ChapterList title={'6. Chapter - 5'}/>
         </div>
         <ToastContainer  className="toast-follow" style={{marginBottom:"15px"}}/>
        </div>
    )
}

export default AboutStory;