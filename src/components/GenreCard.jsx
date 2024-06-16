
import { MdOutlineLibraryBooks } from "react-icons/md";
import '../CSS/Category.css';
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { CgPlayListCheck } from "react-icons/cg";
import { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function GenreCard({post}){
  const navigate=useNavigate();
       const [user,setUser]=useState(null);
       const[ratingInfo,setRating]=useState(null);
       useEffect(()=>{
        const AuthPost = async () => {
          try {
              const res = await axios.get('https://anukriti.onrender.com/api/posts/auth-post', {
                params: {postId:post._id},
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
        const getPostRating = async () => {
          try {
              const res = await axios.get('https://anukriti.onrender.com/api/posts/get-rating', {
                params: {postId:post._id},
                headers: {
                  'Content-Type': 'application/json'
                },
                withCredentials: true // Include this line to allow cookies
              });
              if (res.status === 200) {
                setRating(res.data)
              }
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        AuthPost();
        getPostRating();
       },[post])
       const [library,setLibrary]=useState(false);
       useEffect(()=>{
        const CheckLibrary = async () => {
          if(user){
          try {
              const postId=post._id;
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
          const postId=post._id;
          const res = await axios.post(`https://anukriti.onrender.com/api/posts/library/${postId}`,{library}, {
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
    return(
           user && post && !post.series &&  <div className="genre-card" style={{height:"190px",display:"flex",backgroundColor:"white",textDecoration:"none",color:"black"}}>
            <Link to={`/Anukriti/aboutStory/${post?.title}-${post?._id}`} className="genre-card-left" style={{
            backgroundImage:` linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%),url(${post.coverImage})`,
            backgroundRepeat:"no-repeat",
            width:"125px",
            height:"100%",
            backgroundSize:"100% 100%",
            opacity:"0.95",
            }}>  </Link>
            <div className="genre-card-right" style={{height:"90%",marginRight:"10px",marginTop:"6px"}}>
                <div className="genre-card-right-top" style={{display:"flex",justifyContent:"space-between"}}>
              <Link to={`/Anukriti/aboutStory/${post?.title}-${post?._id}`} className="genre-title" style={{fontWeight:"600",width:"80%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{post?.title} </Link>
              {library ?  <CgPlayListCheck style={{fontSize:"30px",marginTop:"2px"}} onClick={handleLibrary}/>: <MdOutlinePlaylistAdd style={{fontSize:"30px",marginTop:"2px"}} onClick={handleLibrary}/>}
                </div>
                <Link to={`/Anukriti/profile/${user?.username}`} className="genre-author" style={{fontWeight:"600",color:"#555",marginLeft:"12px"}}>{user?.firstName ?`${user?.firstName} ${user?.lastName}` : `${user?.username}`}</Link>
                <Link to={`/Anukriti/aboutStory/${post?.title}-${post?._id}`} className="genre-desc">{post?.summary}</Link>
                <div className="genre-reading" style={{marginLeft:"10px"}}>
                <FaStar style={{marginBottom:"4px"}}/> <span><b>{ratingInfo?.rating.toFixed(1)} </b>({ratingInfo?.ratingCount})</span> <FaEye style={{marginLeft:"10px",marginBottom:"2px"}}/> <span><b>{post?.viewCount}</b> Reads</span>
                </div>
            </div>
           </div>
    )
}

export default GenreCard;