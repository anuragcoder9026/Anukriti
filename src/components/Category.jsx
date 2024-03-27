import GenreCard from "./GenreCard";
import loveCardImg from '../assets/love-card.jpg'
import horrorCardImg from '../assets/horror.jpg'


function Category(){
    return(
              <div className="category" style={{marginTop:"80px",backgroundColor:"rgb(241, 236, 236)",marginLeft:"0px",padding:"25px 15px"}}>
                 <h1 style={{display:"inline-block",borderLeft:"5px solid brown",fontFamily:"initial",fontWeight:"bold",margin:"20px 2px",paddingLeft:"8px",marginLeft:"2%"}}>Love Stories</h1> 
                 <div className="card-cont" style={{width:"100%",display:"flex",gap:"30px",flexWrap:"wrap",justifyContent:"center"}}>
                 <GenreCard GenreCardimg={loveCardImg}/> <GenreCard GenreCardimg={loveCardImg}/> 
                 <GenreCard GenreCardimg={loveCardImg}/> <GenreCard GenreCardimg={loveCardImg}/> 
                 <GenreCard GenreCardimg={loveCardImg}/> <GenreCard GenreCardimg={loveCardImg}/> 
                 <GenreCard GenreCardimg={loveCardImg}/> <GenreCard GenreCardimg={loveCardImg}/> 
                 <GenreCard GenreCardimg={loveCardImg}/> 
                 </div>
              </div>
    )
}

export default Category;