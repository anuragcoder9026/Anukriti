import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function StarCount({rating=0,ratingColor='black',size='14px'}){
    const numberOfTimes = Math.floor(rating);
    const componentArray1 = new Array(numberOfTimes).fill(null);
    const componentArray2 = new Array(5-numberOfTimes).fill(null);
    return(
        <span style={{marginLeft:"0px"}}>
            
            {componentArray1.map(() => (
                   <FaStar style={{fontSize:size,color:ratingColor,marginRight:"2px"}}/>
            ))}
             {componentArray2.map(() => (
                   <FaRegStar style={{fontSize:size,color:ratingColor}}/>
            ))}
       </span>
    )
}