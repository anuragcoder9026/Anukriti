import { Link } from "react-router-dom";


function Genre({genre,genreImg}){

    return(
         
          <Link to="/Anukriti/genre" className="genre" style={{
            backgroundImage:` linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%),url(${genreImg})`,
            backgroundRepeat:"no-repeat",
            width:"350px",
            height:"192px",
            backgroundSize:"100% 100%",
            borderRadius:"8px",
            opacity:"0.95",
            textDecoration:"none"
            }}>
              <p style={{color:"white",position:"relative",top:"160px",fontWeight:"700",marginLeft:"10px"}}>{genre}</p>
          </Link>
    )
}
export default Genre;