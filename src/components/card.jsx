import { MdOutlineLibraryBooks } from "react-icons/md";
import {Link} from 'react-router-dom';
import '../CSS/card.css';
function Card(){
    return(
        <>
        <Link to="#" style={{textDecoration: 'none'}}>
        <div class="card">
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