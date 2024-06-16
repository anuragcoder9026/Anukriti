
import loveImg from '../assets/love.avif';
import horrorImg from '../assets/horror.jpg'
import adventureImg from '../assets/adventure.jpg';
import biographyImg from '../assets/biography.jpeg';
import childrenImg from '../assets/children.jpeg';
import creativeImg from '../assets/creative.jpeg';
import nonfictionImg from '../assets/nonfiction.jpeg';
import crimeImg from '../assets/crime.jpeg';
import detectiveImg from '../assets/detective.jpeg';
import dramaImg from '../assets/drama.jpeg';
import fantasyImg from '../assets/fantasy.jpeg';
import historyImg from '../assets/history.jpeg';
import humourImg from '../assets/humour.jpeg';
import lifeImg from '../assets/life.jpeg';
import motiveImg from '../assets/motive.jpeg';
import murdermystImg from '../assets/murdermyst.jpeg';
import mythoImg from '../assets/mytho.jpeg';
import religionImg from '../assets/religion.jpeg';
import satireImg from '../assets/satire.jpeg';
import scienceImg from '../assets/science.jpeg';
import shortImg from '../assets/short.jpeg';
import socialImg from '../assets/social.jpeg';
import thrillerImg from '../assets/thriller.jpeg';
import tragedyImg from '../assets/tragedy.jpeg';
import travelImg from '../assets/travel.jpeg';
import womenImg from '../assets/women.jpeg';
import adultImg from '../assets/adult.jpeg';
import Genre from './Genre';
function Explore(){
    const genreArray=[['action & adventure',adventureImg],['biography',biographyImg],['children',childrenImg],['creative',creativeImg], ['non-fiction',nonfictionImg],['crime',crimeImg],['detective',detectiveImg],['drama',dramaImg],['fantasy',fantasyImg],['historical',historyImg],['horror',horrorImg],['humour',humourImg],['life',lifeImg],['motivational',motiveImg],['murder mystery',murdermystImg],
    ['mythology',mythoImg],['religion',religionImg],['romance',loveImg],['satire',satireImg],['science fiction',scienceImg],['short story',shortImg],['social',socialImg],['thriller',thrillerImg],['tragedy',tragedyImg],['travel',travelImg],['women',womenImg],['young adult',adultImg]
   ]
    return(
        <div style={{width:"100%",margin:"80px auto",marginBottom:"0px",backgroundColor:"rgb(241, 236, 236)",padding:"0px 10px"}}>
         <div>
       <h1 style={{display:"inline-block",borderLeft:"5px solid brown",fontFamily:"initial",fontWeight:"bold",margin:"20px 2px",paddingLeft:"8px",marginLeft:"2%"}}>Explore Categories</h1>
       <div className="d-flex card-cont" style={{flexWrap:"wrap",gap:"15px",justifyContent:"space-evenly"}}>

        {genreArray.map((item,index)=><Genre genre={item[0]} genreImg={item[1]}/>)}
     </div>

        </div>

        </div>
    )
}

export default Explore;