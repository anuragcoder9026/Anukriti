import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import CreateImg from '../assets/card1.jpg';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import {useDispatch, useSelector} from 'react-redux';
import { deleteAction } from "../store/deleteSlice";
import { postLoaderAction } from "../store/postLoaderSlice";
import { preURLAction } from '../store/preURL';
import { useEffect, useState } from "react";
import axios from "axios";
import { CgPlayListCheck } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
function ReadNow({story}){
  const navigate=useNavigate();
   //function for find minute of reading content
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
  
    
    const dispatch=useDispatch();
    const handleDelete=()=>{
            dispatch(deleteAction.handlePopup(true));
    }
    const [user,setUser]=useState(null);
    const [contentInfo,setContentInfo]=useState(null);
    const postLoader=useSelector(store=>store.postLoader);
    const [rating,setRating]=useState(0);
    useEffect(()=>{
        dispatch(postLoaderAction.handlePostLoader(true));
        const AuthPost = async () => {
            try {
                const res = await axios.get('https://anukriti.onrender.com/api/posts/auth-post', {
                  params: {postId:story},
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
                  params: {id:story},
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
          const getPostRating = async () => {
            try {
                const res = await axios.get('https://anukriti.onrender.com/api/posts/get-rating', {
                  params: {postId:story},
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  withCredentials: true // Include this line to allow cookies
                });
        
                if (res.status === 200) {
                  setRating(res.data.rating)
                }
              
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          AuthPost();
          getPostInfo();
          getPostRating();
    },[])
    // console.log("user:",user);
    // console.log("post:",contentInfo);
    useEffect(()=>{
        if(user && contentInfo){
            dispatch(postLoaderAction.handlePostLoader(false));
        }
    },[user,contentInfo])

    const [library,setLibrary]=useState(false);
    useEffect(()=>{
      const CheckLibrary = async () => {
        if(user){
        try {
            const res = await axios.get('https://anukriti.onrender.com/api/posts/check-library', {
              params: {postId:story},
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
          const res = await axios.post(`https://anukriti.onrender.com/api/posts/library/${story}`,{library}, {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true // Include this line to allow cookies
          });
          
          if (res.status === 200) {
            setLibrary(library=>!library);
          }
        
      } catch (error) {
        navigate('/Anukriti/sign')
      }
       }

       const [coverImage, setCoverImage] = useState({ url: null, name: '' });
         useEffect(() => {
             return () => {
                 if (coverImage.url) URL.revokeObjectURL(coverImage.url);
             };
         }, [coverImage]);
       
         const handleFileChange =async (event, imageType) => {
          event.preventDefault();
             const file = event.target.files[0]; // Get the first selected file
             if (file) {
                 const url = URL.createObjectURL(file);
                 const name = file.name;
                 if (imageType === 'cover') {
                     if (coverImage.url) URL.revokeObjectURL(coverImage.url); // Cleanup previous URL
                     setCoverImage({ url, name });

                     try {
                      const formData = new FormData();
                      formData.append('postCover', file);
 
                      const res = await axios.post('https://anukriti.onrender.com/api/posts/post-cover-img',formData, {
                        params: {postId:story},
                        headers: {
                           'Content-Type': 'multipart/form-data'
                        },
                        withCredentials: true // Include this line to allow cookies
                      });
                      console.log(res);
                      if (res.status === 200) {
                        
                      }
                    
                  } catch (error) {
                    console.error('Error fetching data:', error);
                  }
                 }
             }
         };
         const location=useLocation();
  const handleWhatsappClick = () => {
    const message = `Check this story on Anukriti: https://anuragcoder9026.github.io${location.pathname}`;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };
    const handleFacebookClick = () => {
    const message = `Check this story on Anukriti: https://anuragcoder9026.github.io${location.pathname}`;
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(message)}`;
    window.open(facebookURL, '_blank');
  };
    return(
        !postLoader&& user && contentInfo &&<div className="read-now" style={{width:"100%",backgroundColor:"white",padding:"9px",border:"1.5px solid rgba(0,0,0,.125)"}}>
            <div className="read-now-upper" style={{}}>
              <div className="read-now-upper-left">
                {
                  user?.email && 
                  <>
                      <input type="file" id="file-input-cover"  style={{display:"none"}} onChange={(e) => handleFileChange(e, 'cover')}/>
                         <label htmlFor="file-input-cover" style={{cursor:"pointer"}}>
                         < FaCamera className="camera-img"/>
                        </label>
                  </>
                }
             
              <img src={coverImage.url|| contentInfo?.coverImage || CreateImg} alt="" srcset=""  />
              </div>
                <div className="read-now-upper-right">
                    <p style={{fontWeight:"700",marginLeft:"8px",marginBottom:"0px"}}>{contentInfo?.title}</p>
                    <Link to="" style={{fontSize:"14px",marginLeft:"10px"}}>{user?.firstName ?`${user?.firstName} ${user?.lastName}` : `${user?.username}`}</Link>
                    {
                        user?.email &&
                        <p className="publish-date" style={{fontSize:"13px",marginLeft:"10px",color:"#737373",display:"flex",flexWrap:"wrap",gap:"4px"}}><span style={{marginLeft:"0px"}}>Publish Date:</span><span style={{marginLeft:"0px"}}>{`${new Date(contentInfo?.date).getUTCDate()} ${new Date(contentInfo?.date).toLocaleString('default', { month: 'long', timeZone: 'UTC' })} ${new Date(contentInfo?.date).getUTCFullYear()}`}</span></p>
                    }
                    <div className="post-reading" style={{display:"flex",flexWrap:"wrap",marginTop:"25x"}}>
                    <span><FaStar style={{marginBottom:"3px"}}/> {rating.toFixed(1)}</span>
                    <span><FaEye style={{marginRight:"3px"}}/>{contentInfo?.viewCount}</span>
                    <span><FaClock style={{marginRight:"3px",fontSize:"11px",marginBottom:"2px"}}/>{estimatedReadingTime(contentInfo?.content)}</span>
                    </div>
                    <div className="category">
                        {
                            contentInfo?.categories.map((item,index)=> <Link className="category-gene">{item}</Link>)
                        }
                    </div>
                    <p className="summary">
                          {contentInfo?.summary}
                    </p>
                </div>
            </div>
            {
              user?.email && <div className="edit-delete" style={{display:"flex",justifyContent:"center",fontSize:"14px",marginTop:"15px"}}>
              <button style={{border:"none",color:"brown",padding:"7px",marginRight:"10px",paddingRight:"14px"}} onClick={handleDelete}><MdDeleteOutline style={{fontSize:"16px"}}/> Delete </button>
              <Link to={`/Anukriti/write/?post=${story}`} style={{textDecoration:"none"}}><button style={{border:"none",color:"green",padding:"7px 18px",marginLeft:"10px",paddingRight:"20px"}}><MdOutlineEdit style={{fontSize:"16px"}}/> Edit</button></Link>
        </div>
            }
                  
            <div className="read-now-bottom">
                <div className="read-now-actions" style={{display:"flex",justifyContent:"center"}}>
                    {
                        !user?.email && <button className="library-btn" onClick={handleLibrary}>{!library ? < MdOutlineLibraryAdd style={{fontSize:"25px",marginRight:"5px"}}/> : <CgPlayListCheck style={{fontSize:"25px",marginRight:"5px"}} />}Library</button>
                    }
                    
                    <Link to={`/Anukriti/book-content/${contentInfo.title}-${story}`} style={{width:"50%",}}>
                        <button className="read-btn" onClick={()=>dispatch(preURLAction.handlePreURL(`http://localhost:5173/Anukriti/story/${contentInfo?.title}-${story}`))}> Read now</button>
                    </Link>

                </div>
                <div className="read-now-share" style={{marginTop:"25px",textAlign:"center"}}>
                    <span >Share with Your Friends: </span> 
                    <span style={{backgroundColor:"green",padding:"6px 8px",borderRadius:"50%",width:"25px",height:"25px",marginLeft:"5px",marginRight:"5px"}}>
                        <BsWhatsapp style={{color:"white"}} onClick={handleWhatsappClick}/> 
                    </span>
                    <span style={{backgroundColor:"blue",padding:"6px 8px",borderRadius:"50%",width:"25px",height:"25px",marginLeft:"5px"}}>
                        <FaFacebookF style={{color:"white"}} onClick={handleFacebookClick}/> 
                      
                    </span>
                </div>
            </div>
         </div>
    )
}

export default ReadNow;
