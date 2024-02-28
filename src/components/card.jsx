import { MdOutlineLibraryBooks } from "react-icons/md";
import {Link} from 'react-router-dom';
import '../CSS/card.css';
import cardImg from '../assets/card1.jpg';
function Card(){
    return(
        <>
        <Link to="#" style={{textDecoration: 'none'}}>
        <div class="card" style={{
            background:`url(${cardImg})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"185px 289px"
            }}>
            <div class="rating">★ 4.7</div>
            <div class="parts"><MdOutlineLibraryBooks className="fs-5" style={{marginRight:"5px"}}/>46 parts</div>
       </div>
        <div className="card-title"><b>Unmarried Mother</b></div>
        <p className="post-read-time">
            10 hours
        </p>
        <p className="post-read-count">
           88K+ Total Readers
        </p>
        </Link>
        </>
    )
}
export default Card;