
import '../CSS/otherCreate.css'
import AboutAuthor from './AboutAuthor';
import ReadNext from './ReadNex';
import ReadNow from './ReadNow';
import Review from './Review';


function OtherCreationInfo(){

    return(
         <div className="other-creation" >
            <div className="other-creation-info">
             <div className="other-creation-left">
                   <ReadNow/>
                   <ReadNext/>
             </div>
             <div className="other-creation-right">
                      <AboutAuthor/>
                      <Review/>
             </div>
            </div>
         </div>
    )
}

export default OtherCreationInfo;