import GenreCard from "./GenreCard";
import loveCardImg from '../assets/love-card.jpg'
import horrorCardImg from '../assets/horror.jpg'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SeriesGenreCard from "./SeriesGenreCard";
function Category(){
    const {category}=useParams();
    const [categoryList,setCategoryList]=useState(null);
    const [seriesCategory,setSeriesCategory]=useState(null);
    useEffect(()=>{
        const getCategories = async () => {
            try {
                const res = await axios.get(`https://anukriti.onrender.com/api/posts/get-category/${category}`,{
                  withCredentials: true // Include cookies with the request
              });
                if (res.status === 200) {
                    setCategoryList(res.data);
              }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const getSeriesCategories = async () => {
            try {
                const res = await axios.get(`https://anukriti.onrender.com/api/posts/get-series-category/${category}`,{
                  withCredentials: true // Include cookies with the request
              });
                if (res.status === 200) {
                    setSeriesCategory(res.data);
              }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }; 
        getCategories(); 
        getSeriesCategories();
    },[])
    return(
              <div className="category" style={{marginTop:"80px",backgroundColor:"rgb(241, 236, 236)",marginLeft:"0px",padding:"25px 15px"}}>
                 <h1 style={{display:"inline-block",borderLeft:"5px solid brown",fontFamily:"initial",fontWeight:"bold",margin:"20px 2px",paddingLeft:"8px",marginLeft:"2%"}}>{category}</h1> 
                 <div className="card-cont" style={{width:"100%",display:"flex",gap:"30px",flexWrap:"wrap",justifyContent:"center"}}>
                 {
                    categoryList?.map((item,index)=><GenreCard post={item}/>)
                 }
                 {
                    seriesCategory?.map((item,index)=><SeriesGenreCard seriesId={item._id}/>)
                 }
                 </div>
              </div>
    )
}

export default Category;