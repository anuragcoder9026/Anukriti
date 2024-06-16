import { Link, useNavigate } from 'react-router-dom';
import commentorImg from '../assets/user-photo.jpg';
import StarCount from './SatrCount';
import { AiFillLike } from "react-icons/ai";
import { useEffect, useState } from 'react';
import userImg from "../assets/default-profile.png";
import axios from 'axios';
function Comments({reviewId}){
       const navigate=useNavigate();
    const [commentInfo,setCommentInfo]=useState(null);
    const [like,setLike]=useState(null);
    const [likeState,setLikeState]=useState(false);
    const [color,setColor]=useState('#999');
    const handleLike=async(e)=>{
       if(!likeState){
       setLike((like)=>like+1);
       setColor('blue');
       setLikeState((likeState)=>!likeState);
       try {
              const response = await axios.post(`https://anukriti.onrender.com/api/posts/set-like`,{reviewId},{
                withCredentials: true // Include cookies with the request
            });
            console.log(response);
            if (response.status === 200) {
                
              }
            } catch (error) {
              console.error('Error fetching data:', error);
              navigate('/Anukriti/sign')
            }
       } 
       else{
       setLike((like)=>like-1);
       setColor('#999');
       setLikeState((likeState)=>!likeState);
       try {
              const response = await axios.post(`https://anukriti.onrender.com/api/posts/delete-like`,{reviewId},{
                withCredentials: true // Include cookies with the request
            });
            if (response.status === 200) {
                
              }
            } catch (error) {
              console.error('Error fetching data:', error);
              navigate('/Anukriti/sign')
            }
       } 
    }
    useEffect(()=>{
       const getComment= async () => {
              try {
                  const response = await axios.get(`https://anukriti.onrender.com/api/posts/get-comment`,{
                    params:{reviewId},
                    withCredentials: true // Include cookies with the request
                });
                if (response.status === 200) {
                    setCommentInfo(response.data)
                    setLike(response.data.like);
                  }
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
              };
              const checkLike= async () => {
                     try {
                         const response = await axios.get(`https://anukriti.onrender.com/api/posts/check-like`,{
                           params:{reviewId},
                           withCredentials: true // Include cookies with the request
                       });
                       if (response.status === 200) {
                          setColor(response.data);
                          if(response.data=='blue'){
                            setLikeState(true)
                          }
                          else{
                            setLikeState(false);
                          }
                         }
                       } catch (error) {
                         setColor("#999");   
                         setLikeState(false);   
                         console.error('Error fetching data:', error);
                       }
                     };
              getComment();
              checkLike();
    },[])
    return(
           commentInfo && <div className="single-comments" style={{display:"flex",marginBottom:"10px"}}>
            <Link to="#" className="comentor-img">
               <img src={commentInfo.profile || userImg} alt=""  style={{width:"42px",height:"42px",borderRadius:"50%",marginLeft:"15px",marginTop:"7px"}}/>
            </Link>
            <div className="comment-content">
                  <div style={{marginBottom:"-8px"}} className="commentor-name" ><p style={{marginBottom:"-8px"}}><Link to={`/Anukriti/profile/${commentInfo?.username}`} style={{color:"black",fontWeight:"bold",fontSize:"12px"}}>{commentInfo?.firstName ?`${commentInfo?.firstName} ${commentInfo?.lastName}` : `${commentInfo?.username}`}</Link></p>
                  <StarCount rating={commentInfo.rating} ratingColor='#aeadae'></StarCount> <span style={{fontSize:"12px",color:"#999",marginLeft:"4px"}}>{`${new Date(commentInfo?.date).getUTCDate()} ${new Date(commentInfo?.date).toLocaleString('default', { month: 'long', timeZone: 'UTC' })} ${new Date(commentInfo?.date).getUTCFullYear()}`}</span>
                  </div>
             <div className="comment-desc">
                    {commentInfo.comment}
            </div>
            <div className="like">{like}<AiFillLike style={{marginLeft:"10px",marginBottom:"3px",fontSize:"16px",color:color}} onClick={handleLike}/>
            </div>
             </div>
           </div>
    )
}

export default Comments;