import { MdDateRange } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import contentImg from '../assets/content-image.jpg';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currentContentAction } from "../store/currentContentSlice";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function Content({id}){
    const [contentInfo,setContentInfo]=useState(null);
    const dispatch=useDispatch();
    const handleContent=()=>{
        dispatch(currentContentAction.handleCurrentContent(0));
     }
    const [rating,setRating]=useState(0);
     useEffect(() => {
        const getPostInfo = async () => {
          try {
              const res = await axios.get('https://anukriti.onrender.com/api/posts/content-info', {
                params: {id},
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
                params: {postId:id},
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
        getPostInfo();
        getPostRating();
      }, [id]);


    return(
         contentInfo && !contentInfo.series &&<Link to={`/Anukriti/story/${contentInfo?.title}-${id}`} className="user-content" 
          style={{  width:"151px",height:"300px",border:"1px solid #d3d2d2",marginBottom:"6px",textDecoration:"none"}} onClick={handleContent}>
             <img src={contentInfo?.coverImage || contentImg} alt="" srcset="" style={{width:"150px",height:"220px"}}/>
             <div style={{height: "20px",width: "90%",color: "#555",marginTop: "8px",fontWeight: "bold",paddingLeft: "8px",fontSize: "14px",marginBottom: "5px",whiteSpace: "nowrap",overflow: "hidden",textOverflow: "ellipsis"}}> {contentInfo?.title}</div>
              <div style={{color:"#555",paddingLeft:"8px",fontSize:"12px",fontWeight:"500"}}><MdDateRange class="fs-6 mb-1" style={{marginRight:"3px"}}/>{`${new Date(contentInfo?.date).getUTCDate()} ${new Date(contentInfo?.date).toLocaleString('default', { month: 'long', timeZone: 'UTC' })} ${new Date(contentInfo?.date).getUTCFullYear()}`}</div>
              <div style={{color:"#555",paddingLeft:"8px",fontSize:"12px",fontWeight:"500",marginTop:"3px"}}><FaStar class="fs-7 " style={{marginRight:"3px",marginBottom:"5px"}}/>{rating.toFixed(1)}<FaEye class="fs-7" style={{marginRight:"5px",marginLeft:"15px",marginBottom:"3px"}}/>{contentInfo?.viewCount}</div>
         </Link>
    )
}

export default Content;