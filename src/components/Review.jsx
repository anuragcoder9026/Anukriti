import Comments from "./Comments";
import UserRating from "./UserRating";



function Review({brate=0,story}){
       const commentArray=[1,2,3,4,5,6,7];
    return(
         <div className="user-review" style={{width:"100%",backgroundColor:"white",padding:"6px 0px",border:"1.5px solid rgba(0,0,0,.125)",marginTop:"10px"}}>
            <div className="review-title">Review</div>
            {story==='other' && <UserRating rate={brate}/>}
            <div style={{color:"#6c757d",fontWeight:"600",margin:"10px 10px",fontSize:"15px"}}>Reviews</div>
            <div className="all-comments">
                {
                    commentArray.map((index)=> <Comments/>
                    )
                }
            </div>
         </div>
    )
}

export default Review;