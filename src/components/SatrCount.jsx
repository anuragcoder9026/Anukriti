import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function StarCount({rating,ratingColor}){
    const numberOfTimes = Math.floor(rating);
    const componentArray1 = new Array(numberOfTimes).fill(null);
    const componentArray2 = new Array(5-numberOfTimes).fill(null);
    return(
        <span style={{marginLeft:"0px"}}>
            
            {componentArray1.map((index) => (
                   <FaStar key={index} style={{fontSize:"10px",color:ratingColor,marginRight:"2px"}}/>
            ))}
             {componentArray2.map((index) => (
                   <FaRegStar style={{fontSize:"10px",color:ratingColor}}/>
            ))}
       </span>
    )
}