import '../CSS/Category.css';
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { CgPlayListCheck } from "react-icons/cg";
import { useParams } from "react-router-dom";
function SeriesGenreCard({seriesId}){
    const navigate=useNavigate();
    const [seriesInfo,setSeriesInfo]=useState(null);
    const [postId,setPostId]=useState('');
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
               const id =res.data.firstPostLink;
               let firstpostId="";
               for (let i = id.length - 1; i >= 0; i--) {
               if(id[i]==='-') break;
               firstpostId=id[i]+firstpostId;
               } 
               setPostId(firstpostId)
              }
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        getSeriesInfo();
      }, []);
      const [library,setLibrary]=useState(false);
      useEffect(()=>{
       const CheckLibrary = async () => {
         if(seriesInfo){
         try {
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
     },[seriesInfo])

     const handleLibrary=async()=>{
       try {
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
        seriesInfo && <div className="genre-card" style={{height:"190px",display:"flex",backgroundColor:"white",textDecoration:"none",color:"black"}}>
        <Link to={`/Anukriti/aboutStory/${seriesInfo.firstPostLink}`} className="genre-card-left" style={{
        backgroundImage:` linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%),url(${seriesInfo.coverImage || GenreCardimg})`,
        backgroundRepeat:"no-repeat",
        width:"125px",
        height:"100%",
        backgroundSize:"100% 100%",
        opacity:"0.95",
        }}> <span style={{position:"relative",top:"163px",left:"4%",color:"white",fontSize:"14px",fontWeight:"500"}}><MdOutlineLibraryBooks style={{fontSize:"16px",marginRight:"7px"}}/>{seriesInfo.parts} parts</span> </Link>

        <div className="genre-card-right" style={{height:"90%",marginRight:"10px",marginTop:"6px"}}>
            <div className="genre-card-right-top" style={{display:"flex",justifyContent:"space-between"}}>
          <Link to={`/Anukriti/aboutStory/${seriesInfo.firstPostLink}`} className="genre-title" style={{fontWeight:"600",width:"80%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{seriesInfo.title} </Link>
          {library ?<CgPlayListCheck style={{fontSize:"30px",marginTop:"2px"}} onClick={handleLibrary}/>  :<MdOutlinePlaylistAdd style={{fontSize:"30px",marginTop:"2px"}} onClick={handleLibrary}/>}
            </div>
            <Link to={`/Anukriti/profile/${seriesInfo.username}`} className="genre-author" style={{fontWeight:"600",color:"#555",marginLeft:"12px"}}>{seriesInfo?.firstName ?`${seriesInfo?.firstName} ${seriesInfo?.lastName}` : `${seriesInfo?.username}`}</Link>
            <Link to={`/Anukriti/aboutStory/${seriesInfo.firstPostLink}`} className="genre-desc">{seriesInfo?.summary}</Link>
            <div className="genre-reading" style={{marginLeft:"10px"}}>
            <FaStar style={{marginBottom:"4px"}}/> <span><b>{seriesInfo.averageRating.toFixed(1)} </b>({seriesInfo.totalRatings})</span> <FaEye style={{marginLeft:"10px",marginBottom:"2px"}}/> <span><b>{seriesInfo.viewCount}</b> Reads</span>
            </div>
        </div>
       </div>
          
    )
}

export default SeriesGenreCard;