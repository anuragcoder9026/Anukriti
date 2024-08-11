import axios from "axios";
import { useState,useEffect  } from "react";
import { useParams } from "react-router-dom";
import QueryCard from "./QueryCard";
import sorryImg from '../assets/sorry.jpeg';
import '../CSS/sorry.css'
function PostQuery(){
    const {id} =useParams();

    const [allPost,setAllPost]=useState(null);
    useEffect(()=>{
        const getAllPostId = async () => {
          try {
              const response = await axios.get(`https://anukriti.onrender.com/api/posts/get-post-by-query`,{
                params: {searchTerm:id},
                headers: {
                  'Content-Type': 'application/json'
                },
                withCredentials: true // Include cookies with the request
            });
            if (response.status === 200) {
                setAllPost(response.data.postIds);
              }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          getAllPostId();  
        },[id])
    return(
        (!allPost || !id)?<div className="loader" style={{marginTop:"180px",display:"flex",justifyContent:"center",alignItems:"center"}}><div class="spinner-border" style={{width:"7rem", height:"7rem", role:"status",marginBottom:"100px"}}></div></div>:
        <>
      <div className="d-flex card-cont" style={{overflow:"scroll",marginTop: "80px"}}>
       {
        allPost?.map((post,index)=><QueryCard id={post}/>)
       }
       
     </div>
        {allPost.length==0 && <div className="sorry" style={{width:"100%",height:"280px",display:"flex",flexDirection:"column",  justifyContent:"center",alignItems:"center"}}><img src={sorryImg}/>   <div>No Stories or Poem Found.</div></div>}
        </>
    )
}
export default PostQuery;
