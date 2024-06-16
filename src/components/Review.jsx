import { useSelector } from "react-redux";
import Comments from "./Comments";
import UserRating from "./UserRating";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import userImg from "../assets/default-profile.png";
function Review({brate=0,postId}){
       const commentArray=[1,2,3,4,5,6,7];
       const postLoader=useSelector(store=>store.postLoader);
       const [user,setUser]=useState(null);
       const [reviews,setReviews]=useState(null)
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
          const getAllReviewId = async () => {
            try {
                const response = await axios.get(`https://anukriti.onrender.com/api/posts/get-all-review`,{
                  params:{postId},
                  withCredentials: true // Include cookies with the request
              });
              if (response.status === 200) {
                setReviews(response.data.reviewIds);
                }
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
          AuthPost();
          getAllReviewId();
       },[])
    return(
          user && <div className="user-review" style={{width:"100%",backgroundColor:"white",padding:"6px 0px",border:"1.5px solid rgba(0,0,0,.125)",marginTop:"10px"}}>
            <div className="review-title">Review</div>
            {!user?.email && <UserRating rate={brate} color={'#036974'} postId={postId}/>}
            <div style={{color:"#6c757d",fontWeight:"600",margin:"10px 10px",fontSize:"15px"}}>Reviews</div>
            {reviews &&<div className="all-comments">
                {  reviews?.length===0 ? <div style={{fontSize:"20px",fontWeight:"700",margin:"15px"}}>No reviews Yet  . . . .</div>:
                    reviews?.map((item,index)=> <Comments reviewId={item}/>
                    )
                }
            </div>
            }
         </div>
    )
}

export default Review;