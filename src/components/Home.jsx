import Card from "./card";
import axios from "axios";
import { useState,useEffect  } from "react";
import { useSelector } from "react-redux";
import SeriesCard from "./SeriesCard";
function Home(){
    const user=useSelector(store=>store.userData);
    const [allPost,setAllPost]=useState(null);
    const [allSeries,setAllSeries]=useState(null);
    useEffect(()=>{
        const getAllPostId = async () => {
          try {
              const response = await axios.get(`https://anukriti.onrender.com/api/posts/get-all-post`,{
                withCredentials: true // Include cookies with the request
            });
            if (response.status === 200) {
                setAllPost(response.data.postIds);
              }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          
          const getAllSeriesId = async () => {
            try {
                const response = await axios.get(`https://anukriti.onrender.com/api/posts/get-all-series`,{
                  withCredentials: true // Include cookies with the request
              });
              if (response.status === 200) {
                setAllSeries(response.data.seriesIds);
                }
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };

          getAllPostId();  
          getAllSeriesId(); 
        },[])
    return(
        !allSeries || !allPost?<div className="loader" style={{marginTop:"180px",display:"flex",justifyContent:"center",alignItems:"center"}}><div class="spinner-border" style={{width:"7rem", height:"7rem", role:"status",marginBottom:"100px"}}></div></div>:
        <>
      <div className="d-flex card-cont" style={{overflow:"scroll",marginTop: "80px"}}>
       {
        allPost?.map((post,index)=><Card id={post}/>)
       }
       {
        allSeries?.map((item,index)=><SeriesCard seriesId={item}/>)
       }
     </div>
        </>
    )
}
export default Home;