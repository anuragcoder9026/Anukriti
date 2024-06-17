import { FaArrowLeft } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdMusicOff } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import '../CSS/bookContent.css';
import { useState,useEffect, useRef } from "react";
import StarCount from "./SatrCount";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ReadNext from "./ReadNex";
import readingMusic from '../assets/reading-music.mp3';
import { RxCross2 } from "react-icons/rx";
import { HiPlus } from "react-icons/hi";
import { FaMinus } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { CgFormatLineHeight } from "react-icons/cg";
import { MdOutlineDensitySmall } from "react-icons/md";
import lineDec from '../assets/lineHigh.webp';
import sideImg from '../assets/side-love.webp';
import { IoPersonAdd } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Review from "./Review";
import { TiTick } from "react-icons/ti";
import {useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import parse from 'html-react-parser';
import { ToastContainer, toast } from 'react-toastify';
import { preURLAction } from "../store/preURL";
import userImg from "../assets/default-profile.png";
function BookContent(){
  const dispatch=useDispatch();
  const {id}=useParams();
  const navigate=useNavigate(); 
  let postId="";
     for (let i = id.length - 1; i >= 0; i--) {
        if(id[i]==='-') break;
        postId=id[i]+postId;
      }
  // console.log("book-content",postId);
  const [user,setUser]=useState(null);
  const [contentInfo,setContentInfo]=useState(null);
  const [nextPost,setNextPost]=useState(null);
  
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
          params: {id:postId,inCount:1},
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true // Include this line to allow cookies
        });
        if (res.status === 200) {
          setContentInfo(res.data);
        }
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const getNextPost = async () => {
    try {
        const res = await axios.get(`https://anukriti.onrender.com/api/posts/read-next/${postId}`, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true // Include this line to allow cookies
        });
        if (res.status === 200) {
          setNextPost(res.data);
        }
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
//  console.log("user:",user);
//  console.log("post:",contentInfo);

const CheckRating = async () => {
  try {
      const res = await axios.get('https://anukriti.onrender.com/api/posts/check-rating', {
        params: {postId},
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true // Include this line to allow cookies
      });
        console.log(res);
        if(res.status===200){
          setStarCont(res.data.rating)
          setButtomStar(res.data.rating)
        }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const CheckFollow = async () => {
  try {
      const res = await axios.get('https://anukriti.onrender.com/api/users/check-follow', {
        params: {followUserId:user._id},
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

useEffect(()=>{
  AuthPost();
  getPostInfo();
  getNextPost();
},[]);

useEffect(()=>{
  CheckFollow();
},[user])
useEffect(()=>{
  CheckRating();
},[postId])

const prevoiusURL=useSelector(store=>store.preURL);
const handleReadNext=()=>{
  console.log(window.location.pathname);
  navigate(`/Anukriti/book-content/${nextPost.title}-${nextPost._id}`)
  setTimeout(() => {
    window.location.reload();
  }, 0);
}
const[follow,setFollow]=useState(null);
const handleGoBack = () => {
  navigate(-1); 
  setTimeout(() => {
    window.location.reload();
  }, 10);
};
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

  const [audio] = useState(new Audio(readingMusic));
  const [music,setMusic]=useState(false);
  const handlePlay = () => {
    audio.loop = true; 
    setMusic(music=>!music);
    audio.play();
  };

  const handlePause = () => {
    setMusic(music=>!music);
    audio.pause();
  };


  const [chSetting,setChSetting]=useState(false);
  const handleSetting=()=>{setChSetting(chSetting=>!chSetting); }

  const [fontSiz,setFontSiz]=useState(16);
  const handleIncSize=()=> {setFontSiz(fontSiz=>fontSiz+1)};
  const handleDecSize=()=> {setFontSiz(fontSiz=>fontSiz-1)};

  const [lineHigh,setlineHigh]=useState(1.6);
  const handleLineHigh=(val)=>{setlineHigh(val)};

  const [backColor,setBackColor]=useState(true);
  const handleBackColor=(val)=>{setBackColor(val)};

  const [side,setSide]=useState(false);
  const handleSide=()=>{setSide(side=>!side)}; 

  const [sideReview,setSideReview]=useState(true);
  const handleSideEdit=(val)=>{setSideReview(val)};

  const [starCont,setStarCont]=useState(0);
  const handleStarCont=async(rating)=>{
    setStarCont(rating);
    setButtomStar(rating)
    try {
      const res = await axios.post('https://anukriti.onrender.com/api/posts/set-rating',{rating}, {
        params: {postId},
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true // Include this line to allow cookies
      });
      } catch (error) {
        console.error('Error fetching data:', error);
       navigate('/Anukriti/sign');
     }
  }; 
  const comment=useRef(null); 
  const handleSave=async()=>{
    try {
      const res = await axios.post('https://anukriti.onrender.com/api/posts/set-comment',{comment:comment.current.value}, {
        params: {postId},
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true // Include this line to allow cookies
      });
      console.log(res);
      } catch (error) {
        console.error('Error fetching data:', error);
       navigate('/Anukriti/sign');
     }
  }

  const [cancel,setCancel]=useState(false);
  const handleCancel=(val)=>{
    setSideReview(false);
    setCancel(val)
  };
  const handleDelete=async()=>{
     setStarCont(0);
     setCancel(false);
     setSideReview(true);
     setButtomStar(0);
     try {
      const res = await axios.delete('https://anukriti.onrender.com/api/posts/delete-review', {
        params: {postId},
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true // Include this line to allow cookies
      });
      console.log(res);
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/Anukriti/sign')
     }
  }

  const [bottomStar,setButtomStar]=useState(0);
  const handleButtomStar=async(rating)=>{
    setBottom(true);
    setButtomStar(rating);
    setStarCont(rating)
    try {
      const res = await axios.post('https://anukriti.onrender.com/api/posts/set-rating',{rating}, {
        params: {postId},
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true // Include this line to allow cookies
      });
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/Anukriti/sign');
       
     }
  };

  const [bottom,setBottom]=useState(false);
  const handleBottom=(val)=>{setBottom(val)};

  
  const location=useLocation();
  const handleWhatsappClick = () => {
    const message = `Check this story on Anukriti:https://anuragcoder9026.github.io${location.pathname}`;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };
  const handleFacebookClick = () => {
    const message = `Check this story on Anukriti: https://anuragcoder9026.github.io${location.pathname}`;
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(message)}`;
    window.open(facebookURL, '_blank');
  };
    return(
           <div className="book-content" >
              <div className="chapter-sidebar" style={{left:side ? '0px' :'-310px',paddingBottom:"10px"}}>
                  <div className="side-top" style={{display:"flex",marginLeft:"10px"}}>

                  <div className="side-to-left" style={{width:"130px",height:"170px"}}>
                       <img src={contentInfo?.coverImage || sideImg} alt="" style={{width:"100%",height:"100%"}}/>
                   </div>

                  <div style={{display:"flex",justifyContent:"flex-end",fontSize:"24px",paddingRight:"15px",width:"165px"}}><RxCross2 onClick={handleSide} style={{cursor:"pointer"}}/></div>
                  </div>
                  <div className="book-name" style={{color:"#2c3e50",fontSize:"18",fontWeight:"500",margin:"10px 13px",textAlign:"left",width:"45%",overflow:"hidden"}}> {contentInfo?.title}</div>
                  
                  <div className="side-middle" style={{borderBottom:"1.5px solid #e9e9e9",marginBottom:"20px"}}>
                  <div className="side-author-section" style={{display:"flex",height:"51px",marginLeft:"10px",marginBottom:"20px"}}>
                     <img src={user?.profileImage || userImg} alt=""  style={{width:"40px",height:"40px",borderRadius:"50%",margin:"auto 3px",}}/>
                     <span style={{margin:"auto 8px",width:"115px",color:"black",fontSize:"15px",overflow:"hidden"}}> {user?.firstName ?`${user?.firstName} ${user?.lastName}` : `${user?.username}`}</span>
                      
                      {
                        !user?.email && <>
                               <button style={{color:"#036974",border:"1px solid #036974",float:"right",fontSize:"14px",padding:follow ? '0px 8px' :'0px 4px 0px 0px',borderRadius:"3px",height:"60%",margin:"auto 0px",marginLeft:"1px"}} onClick={handleFollow}>
                                {
                                  follow ? <IoPersonAdd style={{marginRight:"2px"}}/> :<TiTick style={{marginRight:"0px",marginLeft:"0px"}}/>
                                }
                                {follow}</button>
                        </>
                      }
                     
                  </div>
                  </div>

                  <div className="side-rating" style={{marginLeft:"10px"}}>
                    {
                      !user?.email  && <p style={{marginBottom:"2px",fontSize:"15px",}}>Your Rating 
                      {
                        (cancel && sideReview) &&
                        <span style={{color:"brown",float:"right",fontSize:"13px",marginRight:"20px",fontWeight:"500",cursor:"pointer"}} onClick={()=>{handleSideEdit(false)}}>Cancel</span>
                      }
                      
                      
                      </p>
                    }
                      
                      {
                        !user?.email && <>
                            <div className="side-star" style={{display:"flex",gap:"7px"}}>
                       
                        {starCont>=1?<FaStar onClick={()=>handleStarCont(1)} style={{color:'#f5a623',fontSize:"30px"}}/>:<FaRegStar onClick={()=>handleStarCont(1)} style={{color:'#f5a623',fontSize:"30px"}}/>}
                        {starCont>=2?<FaStar onClick={()=>handleStarCont(2)} style={{color:'#f5a623',fontSize:"30px"}}/>:<FaRegStar onClick={()=>handleStarCont(2)} style={{color:'#f5a623',fontSize:"30px"}}/>}
                        {starCont>=3?<FaStar onClick={()=>handleStarCont(3)} style={{color:'#f5a623',fontSize:"30px"}}/>:<FaRegStar onClick={()=>handleStarCont(3)} style={{color:'#f5a623',fontSize:"30px"}}/>}
                        {starCont>=4?<FaStar onClick={()=>handleStarCont(4)} style={{color:'#f5a623',fontSize:"30px"}}/>:<FaRegStar onClick={()=>handleStarCont(4)} style={{color:'#f5a623',fontSize:"30px"}}/>}
                        {starCont==5?<FaStar onClick={()=>handleStarCont(5)} style={{color:'#f5a623',fontSize:"30px"}}/>:<FaRegStar onClick={()=>handleStarCont(5)} style={{color:'#f5a623',fontSize:"30px"}}/>} 

                        

                      {
                        (starCont!==0 && !cancel || !sideReview ) && <div class="dropdown" style={{marginRight:"10px"}}>
                        <button class="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false"><BsThreeDotsVertical /> </button>
                      <ul class="dropdown-menu" style={{fontSize:"12px"}}>
                         <li><a class="dropdown-item" href="#" style={{fontWeight:"500"}} onClick={()=>{handleSideEdit(true)}}>Edit Review</a></li>
                         <li><a class="dropdown-item" href="#" style={{fontWeight:"500"}} onClick={handleDelete}>Delete Review</a></li>
                      </ul>
                    </div>
                      }
                    

                     </div>
                     {
                       (sideReview && starCont!==0) && <> <textarea name="side-review" id="" cols="28" rows="3" placeholder="Write a Review" style={{padding:"8px", border:"1px solid #ced4da",color:"#495057",fontSize:"14px",fontWeight:"500",marginLeft:"6px",marginTop:"15px",marginBottom:"6px"}} ref={comment}></textarea>

                       <div className="side-save" style={{display:"flex",justifyContent:"flex-end"}}>
                        {
                          !cancel && <button style={{border:"none",padding:"4px 9px",marginRight:"15px",backgroundColor:"#e2e3e4",color:"#212529",fontSize:"14px"}} onClick={()=>handleCancel(true)}>Cancel</button>
                        }
                         
                         <button style={{border:"none",padding:"4px 9px",marginRight:"15px",backgroundColor:"#4e9862",color:"#fff"}} onClick={handleSave}>save</button>
                       </div> </>
                     }
                        </>
                      }
                      
                     
                      <div className="side-share-edit" style={{width:"100%",height:"68px",display:"flex",marginTop:"10px"}}>
                        <div className="side-share" style={{width:"40%",height:"100%"}}>
                               <p style={{marginLeft:"8px",marginBottom:"11px"}}>Share</p>
                               <span style={{backgroundColor:"green",padding:"6px 8px",borderRadius:"50%",width:"25px",height:"25px",marginLeft:"5px",marginRight:"5px"}}>
                            <BsWhatsapp style={{color:"white"}} onClick={handleWhatsappClick}/> 
                           </span>
                            <span style={{backgroundColor:"blue",padding:"6px 8px",borderRadius:"50%",width:"25px",height:"25px",marginLeft:"5px"}}>
                          <FaFacebookF style={{color:"white"}} onClick={handleFacebookClick}/> 
                          </span>  
                        </div>

                      </div>
                  </div>
                   {nextPost && <div className="side-read-next" style={{width:"100%",height:"100px",display:"flex",backgroundColor:"#e9e9e9",marginTop:"15px",marginLeft:"10px",padding:"10px",paddingRight:"0px",cursor:"pointer"}} onClick={handleReadNext}>
                      <img src={nextPost?.coverImage || sideImg} alt="" style={{width:"65px",height:"80px"}}/>
                      <div className="side-next-desc" style={{marginTop:"20px",marginLeft:"7px"}}>
                         <p style={{fontSize:"10px",fontWeight:"500",marginBottom:"0px"}}>Read the next part of this book here</p>
                         <span style={{overflow:"hidden",fontWeight:"500"}}>{nextPost?.title}</span>
                      </div>
                   </div>}
              </div> 

              {
                (chSetting &&  <div className="chapter-setting" style={{width:"100%",height:"185px",position:"fixed",top:"180px",zIndex:"1999"}}>
                <div className="chapter-setting-modal">
                    <div style={{display:"flex",justifyContent:"flex-end",fontSize:"24px"}}><RxCross2 onClick={handleSetting}/></div>
                    <div className="chapter-option"><span>Font Size: </span><HiPlus style={{color:"black",fontSize:"17px",marginLeft:"6px"}} onClick={handleIncSize}/><FaMinus style={{color:"black",fontSize:"17px",marginLeft:"14px"}} onClick={handleDecSize}/></div>
                    <div className="chapter-option"><span>Background: </span><MdLibraryBooks style={{fontSize:"30px",marginLeft:"6px",marginBottom:"7px",color:"black"}} onClick={()=>handleBackColor(false)}/><MdOutlineLibraryBooks style={{fontSize:"30px",marginLeft:"14px",marginBottom:"7px",color:"gray"}} onClick={()=>handleBackColor(true)}/></div>
                    <div className="chapter-option"><span> Line Spacing: </span>
                    <CgFormatLineHeight style={{fontSize:"30px",marginLeft:"6px",marginBottom:"7px",color:"black"}} onClick={()=>{handleLineHigh(2.0)}}/>
                    
                    <MdOutlineDensitySmall style={{fontSize:"22px",marginLeft:"16px",marginBottom:"7px",color:"black"}} onClick={()=>{handleLineHigh(1.6)}}/>
                    
                    <img src={lineDec} alt="" style={{width:"33px",height:"27px",color:"red",marginBottom:"7px",marginLeft:"16px"}} onClick={()=>{handleLineHigh(1.2)}}/>
                    </div>
                </div>
             </div>)
              }
                  <div className="book-content-header">
                      <div className="bch-left">
                      <FaArrowLeft style={{marginRight:"15px",marginBottom:"22px"}} onClick={handleGoBack}/>
                      <span  className="ellipsis-span">{contentInfo?.title}</span>
                      <TiArrowSortedDown style={{marginLeft:"7px",cursor:"pointer",marginBottom:"22px"}} onClick={handleSide}/>
                      </div>
                      <div className="bch-right">
                        {
                           (music &&  <MdMusicNote style={{fontSize:"23px"}} onClick={handlePause}   />) ||
                           (!music && <MdMusicOff style={{fontSize:"23px"}} onClick={handlePlay} />)
                        }
                        <IoMdSettings style={{fontSize:"23px",marginLeft:"10px",marginRight:"10px"}} onClick={handleSetting}/>
                        <PiDotsThreeOutlineVerticalFill style={{fontSize:"20px"}}/>
                      </div>
                  </div>
                  <div className="book-content-body" style={{opacity:(chSetting || side || bottom) ? .3 : 1.0,color:backColor ? 'black' :'white',backgroundColor:backColor ? 'white' :'black'}}>
                         <div className="chapter-title">{contentInfo?.title}</div>
                            
                        { contentInfo && <div className="chapter-body" style={{color:backColor ? '#2c3e50' :'white',fontSize:`${fontSiz}px`,lineHeight:lineHigh}}>
                         {/* <YourComponent  backColor={backColor} fontSiz={fontSiz} lineHigh={lineHigh} htmlContent={contentList[currentId]}/> */}
                          {
                            parse(contentInfo?.content )
                          }
                         </div>}
                         <div className="rate-share">
                         {
                 user && !user?.email &&  <div className="chapter-rate">
                  <p style={{fontSize:"13px",marginBottom:"0px"}}>Rate " {contentInfo?.title} "</p>
                        
<div style={{fontSize:"25px",display:"flex",justifyContent:"center",marginTop:"1px",     color:"#056974",cursor:"pointer"}}>
{bottomStar>=1?<FaStar onClick={()=>handleButtomStar(1)}/>:<FaRegStar onClick={()=>handleButtomStar(1)}/>}
{bottomStar>=2?<FaStar onClick={()=>handleButtomStar(2)}/>:<FaRegStar onClick={()=>handleButtomStar(2)}/>}
{bottomStar>=3?<FaStar onClick={()=>handleButtomStar(3)}/>:<FaRegStar onClick={()=>handleButtomStar(3)}/>}
{bottomStar>=4?<FaStar onClick={()=>handleButtomStar(4)}/>:<FaRegStar onClick={()=>handleButtomStar(4)}/>}
{bottomStar==5?<FaStar onClick={()=>handleButtomStar(5)}/>:<FaRegStar onClick={()=>handleButtomStar(5)}/>}   
</div>
            </div>
                }  
                           
                            <div className="chapter-share">
                            <p style={{fontSize:"13px",marginBottom:"4px",textAlign:"left",paddingLeft:"8px"}}>share</p>
                            <span style={{backgroundColor:"green",padding:"6px 8px",borderRadius:"50%",width:"25px",height:"25px",marginLeft:"5px",marginRight:"5px"}}>
                           <BsWhatsapp style={{color:"white"}} onClick={handleWhatsappClick}/> 
                           </span>
                            <span style={{backgroundColor:"blue",padding:"6px 8px",borderRadius:"50%",width:"25px",height:"25px",marginLeft:"5px"}}>
                          <FaFacebookF style={{color:"white"}} onClick={handleFacebookClick}/> 
                          </span>
                          <span style={{marginLeft:"8px",fontSize:"18px"}}>
                          <MdShare />
                          </span>
                            </div>
                         </div>
                         <div className="see-all-reviews" style={{display:"flex",justifyContent:"center"}}>
                              <Link to={`/Anukriti/story/${id}`}><button className="all-review-btn">See All Reviews</button></Link>
                         </div>
                         
                  </div>
                         {
                          nextPost && <div className="chapter-next">
                          <ReadNext postId={postId}/>
                          </div>
                         }
                  <div className="bottom-popup" style={{bottom:bottom?'0vh':'-710vh'}}>
                    <RxCross2 className="bottom-cross" onClick={()=>handleBottom(false)}/> 
                    <Review brate={bottomStar} postId={postId}/>
                  </div>
                  <ToastContainer  className="toast-follow" style={{marginBottom:"15px"}}/>
           </div>
    )
}

export default BookContent;
