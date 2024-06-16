import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

import libraryImg from '../assets/library.webp';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Library({id}){
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

  const [contentInfo,setContentInfo]=useState(null);
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
    }, []);

    return(
        contentInfo && <Link to={`/Anukriti/story/${contentInfo?.title}-${id}`} style={{textDecoration:"none"}}>
        <div className="library-element" style={{width:"265px",height:"244px",border:"1px solid #d3d2d2"}}>
          <img src={contentInfo?.coverImage || libraryImg} alt="" srcset="" style={{width:"250px",height:"150px",margin:"6px"}}/>
          <p style={{margin:"0px 8px",color:"#212121",overflow:"hidden",whiteSpace:"nowrap",fontSize:"18px", textOverflow:"ellipsis"}}>{contentInfo?.title}</p>
          <div className="lib-discript" style={{display:"flex",marginTop:"10px",fontSize:"12px",color:"#212121"}}>
            <span style={{flexGrow:"1",flexBasis:"33%",padding:"12px 5px",border:"1px solid #d3d2d2",textAlign:"center",fontWeight:"500"}}><FaStar class="mb-1"/> {rating.toFixed(1)}</span>
            <span style={{flexGrow:"1",flexBasis:"33%",padding:"12px 5px",border:"1px solid #d3d2d2",textAlign:"center",fontWeight:"500",}}><FaEye className="fs-6 "style={{marginRight:"5px",marginBottom:"2px"}}/>{contentInfo?.viewCount}</span>
            <span style={{flexGrow:"1",flexBasis:"33%",padding:"12px 5px",border:"1px solid #d3d2d2",textAlign:"center",fontWeight:"500"}}><FaClock style={{marginRight:"5px",marginBottom:"2px"}}/>{estimatedReadingTime(contentInfo?.content)}</span>
          </div>
        </div>
        </Link>
    )
}

export default Library;