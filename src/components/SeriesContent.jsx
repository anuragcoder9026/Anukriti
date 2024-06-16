import { MdDateRange } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import contentImg from '../assets/content-image.jpg';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { MdOutlineLibraryBooks } from "react-icons/md";
function SeriesContent({seriesId}){
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
        seriesInfo && (
            <Link to={`/Anukriti/aboutStory/${seriesInfo.firstPostLink}`} className="user-content" 
                  style={{ width:"151px", height:"300px", border:"1px solid #d3d2d2", marginBottom:"6px", textDecoration:"none", position: "relative" }}>
              <img src={seriesInfo?.coverImage || contentImg} alt="" style={{ width:"150px", height:"220px" }}/>
            <div style={{color:"white", position: "absolute", top: "195px", left: "0px" ,backgroundColor:"#D00B12",width:"100%"}}>
            <MdOutlineLibraryBooks style={{ color:"#D00B12",fontSize:"27px" ,backgroundColor:"white",padding:"3px",marginRight:"7px"}} />{`${seriesInfo?.parts} parts`}
            </div>
              <div style={{ height: "20px", width: "90%", color: "#555", marginTop: "8px", fontWeight: "bold", paddingLeft: "8px", fontSize: "14px", marginBottom: "5px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {seriesInfo?.title}
              </div>
              <div style={{ color:"#555", paddingLeft:"8px", fontSize:"12px", fontWeight:"500" }}>
                <MdDateRange className="fs-6 mb-1" style={{ marginRight:"3px" }}/>
                {`${new Date(seriesInfo?.date).getUTCDate()} ${new Date(seriesInfo?.date).toLocaleString('default', { month: 'long', timeZone: 'UTC' })} ${new Date(seriesInfo?.date).getUTCFullYear()}`}
              </div>
              <div style={{ color:"#555", paddingLeft:"8px", fontSize:"12px", fontWeight:"500", marginTop:"3px" }}>
                <FaStar className="fs-7" style={{ marginRight:"3px", marginBottom:"5px" }}/>{seriesInfo.averageRating.toFixed(1)}
                <FaEye className="fs-7" style={{ marginRight:"5px", marginLeft:"15px", marginBottom:"3px" }}/>{seriesInfo?.viewCount}
              </div>
            </Link>
          )
          
    )
}

export default SeriesContent;