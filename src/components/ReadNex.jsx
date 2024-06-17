import CreateImg from '../assets/card1.jpg';
import { Link, useNavigate } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import StarCount from './SatrCount';
import { useEffect, useState } from 'react';
import axios from 'axios';

import html2pdf from 'html2pdf.js'

function ReadNext({postId}){
    const [nextPost,setNextPost]=useState(null);
    const [user,setUser]=useState(null);
    const navigate=useNavigate();
    const [rating,setRating]=useState(0);
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
        const getNextPost = async () => {
            try {
                const res = await axios.get(`https://anukriti.onrender.com/api/posts/read-next/${postId}`, {
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  withCredentials: true // Include this line to allow cookies
                });
                console.log("nextpost:",res.data);
                if (res.status === 200) {
                  setNextPost(res.data);
                }
              
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          
          getNextPost();
          AuthPost();
          
    },[])
   useEffect(()=>{
    const getPostRating = async () => {
      try {
          const res = await axios.get('https://anukriti.onrender.com/api/posts/get-rating', {
            params: {postId:nextPost._id},
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
    getPostRating();
   },[nextPost])
    const handleReadNext=()=>{
        navigate(`/Anukriti/book-content/${nextPost.title}-${nextPost._id}`)
        setTimeout(() => {
          window.location.reload();
        }, 0);
      }
      
      const handleDownload = () => {
        const element = document.createElement('div');
        element.innerHTML = `<img src="${nextPost.coverImage}" alt="Cover Image"><h2>${nextPost.title}</h2>${nextPost.content}`;
      
        const images = element.querySelectorAll('img');
        const promises = [];
      
        images.forEach(img => {
          const src = img.getAttribute('src');
          if (src && src.startsWith('http')) {
            const promise = new Promise((resolve, reject) => {
              fetch(src)
                .then(response => response.blob())
                .then(blob => {
                  const reader = new FileReader();
                  reader.onload = () => {
                    const dataUrl = reader.result;
                    img.setAttribute('src', dataUrl);
                    resolve();
                  };
                  reader.onerror = reject;
                  reader.readAsDataURL(blob);
                })
                .catch(error => {
                  console.error('Error fetching image:', error);
                  reject(error);
                });
            });
            promises.push(promise);
          }
        });
      
        Promise.all(promises).then(() => {
          html2pdf().from(element).set({
            margin: 1,
            filename:`${nextPost.title}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
          }).save();
        });
      };
      
    return(
       user && nextPost && <div className="read-next" style={{padding:"0px",marginTop:"35px"}}>
        <div className="read-next-upper" style={{}} onClick={handleReadNext}>
            <img src={nextPost?.coverImage || CreateImg} alt="" className="read-next-upper-left" />
            <div className="read-next-upper-right">
                <p style={{fontSize:"12px",fontWeight:"500",marginLeft:"8px",marginBottom:"2px"}}>Read the Next part here...</p>
                <p style={{fontWeight:"450",marginLeft:"8px",marginBottom:"4px"}}>{nextPost?.title}</p>
                <Link to={`/Anukriti/profile/${user?.username}`} style={{fontSize:"12px",fontWeight:"500",marginLeft:"8px",marginBottom:"2px"}}>{user?.firstName ?`${user?.firstName} ${user?.lastName}` : `${user?.username}`}</Link>
                
                <div style={{fontSize:"12px",marginLeft:"8px"}}> <StarCount rating={Math.floor(rating)} ratingColor='#056974' size='10px'/><span style={{marginLeft:"5px"}}>{rating.toFixed(1)}</span> </div>
                   
            </div>
        </div>
        <div className="read-next-bottom">
                 <p className="summary" style={{marginLeft:"1px",fontSize:"15px",height:"60px"}}>
                      {nextPost?.summary}
                </p>
            <div className="read-next-actions">
                <button className="download-btn" onClick={handleDownload}> <IoMdDownload style={{fontSize:"25px",marginRight:"5px",marginBottom:"4px"}} />Download</button>
                    <button className="read-next-btn" onClick={handleReadNext}><FaEye style={{fontSize:"23px",marginBottom:"3px"}} /> Read Next Part</button>

            </div>
          
        </div>
     </div>
    )
}

export default ReadNext;
