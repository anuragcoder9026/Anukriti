
import loveImg from '../assets/love.avif';
import horrorImg from '../assets/horror.jpg'
import Genre from './Genre';
function Explore(){
    const genreArray=['Horror Stories','Love  Stories','Adventure Stories','Horror Stories','Love  Stories','Adventure Stories','Horror Stories','Love  Stories','Adventure Stories','Horror Stories','Love  Stories','Adventure Stories']
    return(
        <div style={{width:"100%",margin:"80px auto",marginBottom:"0px",backgroundColor:"rgb(241, 236, 236)",padding:"0px 10px"}}>
         <div>
       <h1 style={{display:"inline-block",borderLeft:"5px solid brown",fontFamily:"initial",fontWeight:"bold",margin:"20px 2px",paddingLeft:"8px",marginLeft:"2%"}}>Explore Categories</h1>
       <div className="d-flex card-cont" style={{flexWrap:"wrap",gap:"15px",justifyContent:"space-evenly"}}>

        {genreArray.map((item)=><Genre genre={item} genreImg={(item==='Love  Stories' && loveImg)||(item!=='Love  Stories' && horrorImg)}/>)}
     </div>

        </div>

        </div>
    )
}

export default Explore;