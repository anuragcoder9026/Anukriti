
import {Link} from 'react-router-dom';
import '../CSS/card.css';
import cardImg from '../assets/card1.jpg';
import { useEffect, useState } from "react";
import axios from "axios";
function QueryCard({id}){
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
    const [rating,setRating]=useState(0);
    useEffect(() => {
        const getPostInfo = async () => {
          try {
              const res = await axios.get('https://anukriti.onrender.com/content-info', {
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
        const getPostRating = async () => {
          try {
              const res = await axios.get('http://localhost:8000/api/posts/get-rating', {
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
        
        post && <Link to={`/Anukriti/aboutStory/${post?.title}-${id}`} style={{textDecoration: 'none'}}>
        <div class="card">
            <img src={post?.coverImage || cardImg} alt=""  style={{height:"100%"}}/>    
            <div class="rating">★ {rating.toFixed(1)}</div>
       </div>
        <div className="card-title"><b>{post?.title}</b></div>
        <p className="post-read-time">
            {estimatedReadingTime(post?.content)}
        </p>
        <p className="post-read-count">
           {post.viewCount} Total Readers
        </p>
        </Link>
        
    )
}
export default QueryCard;