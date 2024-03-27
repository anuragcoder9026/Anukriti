

import Genre from "./Genre";
import Card from "./card";
function Category({genre,genreImg}){
    return(
        <div style={{marginTop:"10px"}}>

        <div>
        <span style={
        {display:"inline-block",
            width: "5px",
            height: "50px",
            backgroundColor: "brown",
            position:"relative",
            top:"12px",
            marginLeft:"15px"
        }
       }></span> 
       <h1 style={{display:"inline-block", marginLeft:"15px",fontFamily:"initial",fontWeight:"bold"}}>{genre}</h1>
       <div className="d-flex card-cont" style={{overflow:"scroll"}}>
       <Genre genre={genre} genreImg={genreImg}/>
     </div>

        </div>

        </div>
    )
}

export default Category;