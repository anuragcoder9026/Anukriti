import { MdOutlineLibraryAdd } from "react-icons/md";
import { GrDownload } from "react-icons/gr";
import '../CSS/aboutStory.css';
import cardImg from '../assets/card1.jpg';
import { Link, useLocation, useParams } from "react-router-dom";
import authorImg from '../assets/user-photo.jpg'
import { useState } from "react";
import ChapterList from "./ChapterList";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import axios from "axios";
import { preURLAction } from "../store/preURL";
import { useDispatch } from "react-redux";
import { CgPlayListCheck } from "react-icons/cg";
import userImg from "../assets/default-profile.png";

import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import {jsPDF} from "jspdf";
function AboutStory(){
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {id} =useParams();
  let postId="";
  for (let i = id.length - 1; i >= 0; i--) {
    if(id[i]==='-') break;
    postId=id[i]+postId;
   } 
   const [user,setUser]=useState(null);
   const [postInfo,setPostInfo]=useState(null);
   const [chapters,setChapters]=useState(null);
   const [ratingInfo,setRating]=useState(null);
   useEffect(()=>{
    const AuthPost = async () => {
        try {
            const res = await axios.get('https://anukriti.onrender.com/api/posts/auth-post', {
              params: {postId},
              headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true // Include this line to allow cookies
            });
            if (res.status === 200) {
               setUser(res.data);
            }
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      const getPostInfo = async () => {
        try {
            const res = await axios.get('https://anukriti.onrender.com/api/posts/content-info', {
              params: {id:postId},
              headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true // Include this line to allow cookies
            });
            if (res.status === 200) {
              setPostInfo(res.data);
            }
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      const getPostRating = async () => {
        try {
            const res = await axios.get('https://anukriti.onrender.com/api/posts/get-rating', {
              params: {postId},
              headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true // Include this line to allow cookies
            });
            console.log("rating:",res);
            if (res.status === 200) {
              setRating(res.data)
            }
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };


      const getChapters = async () => {
        try {
            const res = await axios.get(`https://anukriti.onrender.com/api/posts/series-chapters/${postId}`, {
              headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true // Include this line to allow cookies
            });
            if (res.status === 200) {
              setChapters(res.data);
            }
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      getChapters();
      AuthPost();
      getPostInfo();
      getPostRating();
},[])
// console.log(chapters);
// console.log("user:",user);
// console.log("postInfo:",postInfo);
    useEffect(()=>{
      CheckFollow();
    },[user])
    const CheckFollow = async () => {
      try {
          const res = await axios.get('https://anukriti.onrender.com/api/users/check-follow', {
            params: {followUserId:user?._id},
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true // Include this line to allow cookies
          });
            setFollow(res.data)  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const[follow,setFollow]=useState(null);

    const handleFollow=async()=>{
      try {
        const res = await axios.post('https://anukriti.onrender.com/api/users/follow',{follow}, {
          params: {followUserId:user._id},
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true // Include this line to allow cookies
        });
        if (res.status === 200) {
           if(follow=='Follow'){
            setFollow('Following')
            toast.success(res.data.message,{
            position:"bottom-center",
            theme:"dark"})
           }
          else{
            setFollow('Follow')
            toast.warn(res.data.message,{
            position:"bottom-center",
            theme:"dark"})
          }
        }
      
    } catch (error) {
      console.error('Error fetching data:', error);
      navigate('/Anukriti/sign');
    }
    }

    function estimatedReadingTime(str = "", wordsPerMinute = 200) {
      let trimmedStr = str.trim();
      let wordsArray = trimmedStr.split(/\s+/);
      let words = wordsArray.filter(word => word.length > 0);
      let wordCount = words.length;
      let readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
      
      if (readingTimeMinutes < 60) {
        return `${readingTimeMinutes} minute${readingTimeMinutes !== 1 ? 's' : ''}`;
      } else {
        let readingTimeHours = Math.floor(readingTimeMinutes / 60);
        return `${readingTimeHours} hour${readingTimeHours !== 1 ? 's' : ''}`;
      }
    }
       const [library,setLibrary]=useState(false);
       useEffect(()=>{
         const CheckLibrary = async () => {
           if(user){
           try {
               const res = await axios.get('https://anukriti.onrender.com/api/posts/check-library', {
                 params: {postId},
                 headers: {
                   'Content-Type': 'application/json'
                 },
                 withCredentials: true // Include this line to allow cookies
               });
                 setLibrary(res.data)  
           } catch (error) {
           }
       }
         };
         CheckLibrary();
       },[user])
          const handleLibrary=async()=>{
           try {
             const res = await axios.post(`https://anukriti.onrender.com/api/posts/library/${postId}`,{library}, {
               headers: {
                 'Content-Type': 'application/json'
               },
               withCredentials: true // Include this line to allow cookies
             });
             console.log(res);
             if (res.status === 200) {
               setLibrary(library=>!library);
             }
           
         } catch (error) {
           navigate('/Anukriti/sign')
         }
          }   

          const loaction=useLocation();


          const handleDownload = () => {
            const element = document.createElement('div');
            element.innerHTML = `<img src="${postInfo.coverImage}" alt="Cover Image"><h2>${postInfo.title}</h2>${postInfo.content}`;
          
            const images = element.querySelectorAll('img');
            const promises = [];
          
            images.forEach(img => {
              const src = img.getAttribute('src');
              if (src && src.startsWith('http')) {
                const promise = new Promise((resolve, reject) => {
                  fetch(src)
                    .then(response => response.blob())
                    .then(blob => {
                      const reader = new FileReader();
                      reader.onload = () => {
                        const dataUrl = reader.result;
                        img.setAttribute('src', dataUrl);
                        resolve();
                      };
                      reader.onerror = reject;
                      reader.readAsDataURL(blob);
                    })
                    .catch(error => {
                      console.error('Error fetching image:', error);
                      reject(error);
                    });
                });
                promises.push(promise);
              }
            });
          
            Promise.all(promises).then(() => {
              html2pdf().from(element).set({
                margin: 1,
                filename:`${postInfo.title}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
              }).save();
            });
          };
          
    return(
    !user || !postInfo ? <div className="loader" style={{marginTop:"180px",display:"flex",justifyContent:"center",alignItems:"center"}}><div class="spinner-border" style={{width:"7rem", height:"7rem", role:"status",marginBottom:"100px"}}></div></div>:
    <div style={{backgroundColor:"#f1ecec",paddingBottom:"60px"}}>
        <div class="about-story-row" style={{marginTop:"87px",backgroundColor:"#f1ecec",paddingTop:"25px",paddingBottom:"15px"}}>
        <div class="about-story-col col1">
            <img src={postInfo?.coverImage || cardImg} alt="Loading.."  style={{marginTop:"10px",borderRadius:"10px"}}/>
            
        </div>
        <div class="about-story-col col2">
            <h1 style={{fontWeight:"600",whiteSpace: "nowrap",overflow: "hidden",textOverflow: "ellipsis"}}>{postInfo?.title}</h1>
            {
              postInfo?.categories.map((genre,index)=> <button style={{border:"solid grey 1px",marginLeft:"10px",padding:"2px 8px",borderRadius:"10px",marginTop:"8px"}}>{genre}</button>)
            }
           
            <p className="story-para" >
            {postInfo?.summary}
            </p>
            <div class="descript-row" >
                  <div class="descript-col2">
                    <p class="fs-5" style={{fontWeight:"800",color:"green",marginBottom:"0px"}}>★ {ratingInfo?.rating.toFixed(1)}</p>
                    <p style={{fontSize:"14px"}}>( {ratingInfo?.ratingCount} )</p>
                    </div>

                  <div class="descript-col3">
                  <p style={{fontWeight:"800",fontSize:"20px",marginBottom:"0px"}}>{estimatedReadingTime(postInfo?.content)}</p>
                  <p style={{fontSize:"15px"}}>Reading Time</p>
                  </div>

                  <div class="descript-col4">
                  <p style={{fontWeight:"800",fontSize:"20px",marginBottom:"0px"}}>{postInfo?.viewCount}</p>
                  <p style={{fontSize:"15px"}}>Reading Count</p>
                  </div>
            </div>
            <div class="btn-story" >
               <Link  to={`/Anukriti/book-content/${postInfo?.title}-${postInfo._id}`} class="btn-story-read"><button type="button" class="btn btn-danger" onClick={()=>dispatch(preURLAction.handlePreURL(`${window.location.pathname}`))}>Read Now</button></Link>
               <div class="btn-story-library">
                {
                  !library ? <MdOutlineLibraryAdd className="fs-2"style={{marginTop:"8px",cursor:"pointer"}} onClick={handleLibrary}/>: <CgPlayListCheck className="fs-1" style={{marginTop:"6px",cursor:"pointer"}} onClick={handleLibrary}/>
                }
               </div>
               <div class="btn-story-download"><GrDownload className="fs-3" style={{marginTop:"6px"}} onClick={handleDownload}/></div>
            </div>
        </div>
      </div>
        <div className="about-author-row">
               <div className="author-sec" style={{display:"flex",marginLeft:"10px"}}>
                     <Link to={`/Anukriti/profile/${user?.username}`} style={{marginTop:"15px"}}><img src={user?.profileImage || userImg} alt="" srcset="" style={{width:"56px",height:"56px",borderRadius:"50%"}}/></Link>
                    <div className="name-follow" style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",marginLeft:"14px"}}>
                      <Link to={`/Anukriti/profile/${user?.username}`} className="auth-name">{user?.firstName ?`${user?.firstName} ${user?.lastName}` : `${user?.username}`}</Link>
                      <Link to={`/Anukriti/profile/${user?.username}`} className="auth-follow">5K Follower</Link> 
                    </div>
               </div>
               {
                 !user?.email && <div className="follow-btn" style={{display:"flex",alignItems:"center",marginRight:"25px",color:"#00626c",}}>
                 <span onClick={handleFollow} style={{cursor:"pointer"}}>{follow}</span>
            </div>
               }
               
        </div>
         <p style={{fontWeight:"bold",width:"90%",margin:"0px auto",fontSize:"19px",marginTop:"25px",borderLeft:"3.5px solid brown",paddingLeft:"12px",height:"40px",paddingTop:"6px"}}>Chapters</p>

         {chapters && <div className="all-chater" style={{display:"flex",gap:"15px",width:"90%",margin:"20px auto",flexWrap:"wrap"}}>
              {
                chapters?.map((item,index)=> <ChapterList id={item} sn={index+1}/>)
              } 
              
         </div>}
         <ToastContainer  className="toast-follow" style={{marginBottom:"15px"}}/>
        </div>
    )
}

export default AboutStory;