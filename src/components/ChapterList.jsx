import { useEffect, useState } from 'react';
import '../CSS/aboutStory.css'
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom';
function ChapterList({id,sn}){
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

    const [post,setPost]=useState(null);
    useEffect(()=>{
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
                  setPost(res.data);
                }
              
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          getPostInfo();
    },[]) 
    return(
        post && <Link to={`/Anukriti/book-content/${post?.title}-${id}`} className="one-chapter" style={{height:"95px",backgroundColor:"#fff",borderRadius:"15px",paddingTop:"20px",paddingLeft:"20px",paddingRight:"15px"}}>
             <div className="title-date" style={{display:"flex",justifyContent:"space-between",height:"40%",alignItems:"center"}}>
                <p  className="title" style={{width:"55%",fontWeight:"bold",marginBottom:"0px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{`${sn}. ${post?.title}`}</p>
                <p className="date" style={{marginBottom:"0px",color:"#616161"}}>{`${new Date(post?.date).getUTCDate()} ${new Date(post?.date).toLocaleString('default', { month: 'long', timeZone: 'UTC' })} ${new Date(post?.date).getUTCFullYear()}`}</p>
             </div>
             <div className="chapter-list-reading" style={{height:"50%"}}>
                 <FaEye style={{fontSize:"19px",marginBottom:"3px",marginRight:"5px"}}/><span>{post?.viewCount}</span>
                 <FaStar style={{fontSize:"17px",marginBottom:"4px",marginLeft:"15px",marginRight:"4px"}}/><span>4.8</span>
                 <FaClock style={{marginBottom:"4px",marginLeft:"17px",marginRight:"5px"}}/><span>{estimatedReadingTime(post?.content)}</span>
             </div>
         </Link>
    )
}

export default ChapterList;