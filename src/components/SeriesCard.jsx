import { MdOutlineLibraryBooks } from "react-icons/md";
import {Link} from 'react-router-dom';
import '../CSS/card.css';
import cardImg from '../assets/card1.jpg';
import { useEffect, useState } from "react";
import axios from "axios";
function SeriesCard({seriesId}){
    const [seriesInfo,setSeriesInfo]=useState(null);
     useEffect(() => {
        const getSeriesInfo = async () => {
          try {
              const res = await axios.get(`https://anukriti.onrender.com/api/posts/series-content/${seriesId}`, {
                headers: {
                  'Content-Type': 'application/json'
                },
                withCredentials: true // Include this line to allow cookies
              });
              
              if (res.status === 200) {
                setSeriesInfo(res.data);
              }
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        getSeriesInfo();
      }, []);

   
      
    return(
        
        seriesInfo && <Link to={`/Anukriti/aboutStory/${seriesInfo.firstPostLink}`} style={{textDecoration: 'none'}}>
        <div class="card">
            <img src={seriesInfo.coverImage || cardImg} alt=""  style={{height:"100%"}}/>    
            <div class="rating">★{seriesInfo.averageRating.toFixed(1)}</div>
            <div class="parts"><MdOutlineLibraryBooks className="fs-5"/>{seriesInfo.parts} parts</div>
       </div>
        <div className="card-title"><b>{seriesInfo.title}</b></div>
        <p className="post-read-time">
            {seriesInfo.readTime}
        </p>
        <p className="post-read-count">
           {seriesInfo.viewCount} Total Readers
        </p>
        </Link>
        
    )
}
export default SeriesCard;