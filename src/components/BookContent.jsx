import { FaArrowLeft } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdMusicOff } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import '../CSS/bookContent.css';
import { useState } from "react";
import StarCount from "./SatrCount";
import { Link } from "react-router-dom";
import ReadNext from "./ReadNex";
import readingMusic from '../assets/reading-music.mp3';
function BookContent(){
  const [audio] = useState(new Audio(readingMusic));
  const [music,setMusic]=useState(false);
  const handlePlay = () => {
    audio.loop = true; 
    setMusic(music=>!music);
    audio.play();
  };

  const handlePause = () => {
    setMusic(music=>!music);
    audio.pause();
  };

    return(
           <div className="book-content">
                  <div className="book-content-header">
                      <div className="bch-left">
                      <Link to="/Anukriti/aboutStory"><FaArrowLeft style={{marginRight:"15px"}}/></Link><span>Love Story (1)</span><TiArrowSortedDown style={{marginLeft:"7px"}}/>
                      </div>
                      <div className="bch-right">
                        {
                           (music &&  <MdMusicNote style={{fontSize:"23px"}} onClick={handlePause}   />) ||
                           (!music && <MdMusicOff style={{fontSize:"23px"}} onClick={handlePlay} />)
                        }
                        <IoMdSettings style={{fontSize:"23px",marginLeft:"10px",marginRight:"10px"}}/>
                        <PiDotsThreeOutlineVerticalFill style={{fontSize:"20px"}}/>
                      </div>
                  </div>
                  <div className="book-content-body">
                         <div className="chapter-title">Love Story (1)</div>
                         <div className="chapter-body">
                         Title: The Forgotten Diary

Once upon a time, in a small village nestled between rolling hills and lush green forests, there lived a young girl named Lily. Lily was an adventurous soul, always eager to explore the mysteries hidden within the nooks and crannies of her village. One sunny afternoon, while rummaging through the attic of her old family home, she stumbled upon a dusty old diary tucked away in a forgotten corner.

Intrigued by the discovery, Lily blew off the dust and opened the diary to reveal its contents. The pages were yellowed with age, and the ink had faded, but the words penned on them still held a certain allure. The diary belonged to a girl named Emily, who lived in the same village centuries ago. As Lily delved deeper into the diary, she found herself transported back in time to an era of horse-drawn carriages and candlelit streets.

Emily's entries spoke of a forbidden love affair with a young poet from a neighboring village. Their love was as tumultuous as it was passionate, and they often met in secret beneath the moonlit sky. But their happiness was short-lived, for their romance was frowned upon by society, and their families forbade them from seeing each other.

As Lily read on, she became enthralled by Emily's story, feeling as though she were living it herself. She could sense the longing in Emily's words, the ache of a heart torn between love and duty. But just as she reached the climax of the tale, the diary abruptly ended, leaving Lily hanging on the edge of a cliff, desperate for resolution.

Determined to uncover the truth, Lily embarked on a quest to unravel the mystery surrounding Emily's disappearance. Armed with nothing but the diary and her insatiable curiosity, she scoured the village for clues, questioning the elders and scouring the archives for any mention of Emily and her lover.

As days turned into weeks and weeks turned into months, Lily's obsession with Emily's story consumed her every waking moment. She neglected her chores and ignored her friends, her mind fixated on the enigma of the forgotten diary. But just when she was on the verge of giving up hope, fate intervened in the most unexpected way.

One stormy night, as Lily lay tossing and turning in bed, unable to shake the haunting images of Emily's lost love from her mind, a bolt of lightning struck the old oak tree outside her window. Startled from her reverie, Lily rushed to the window to survey the damage, only to find a hidden compartment nestled within the hollow trunk of the tree.

Heart racing with anticipation, Lily pried open the compartment to reveal a treasure trove of artifacts from a bygone era. Among the relics was a locket inscribed with Emily's initials and a tattered love letter addressed to her beloved poet. With trembling hands, Lily unfolded the letter and read the words penned by Emily's own hand, her heart swelling with empathy for the star-crossed lovers.

In that moment, as the rain poured down outside and the wind howled through the trees, Lily felt a profound connection to Emily and her timeless tale of love and loss. She realized that some stories were meant to be remembered, not for their endings, but for the journey they took us on, the lessons they taught us, and the memories they left behind.

With a newfound sense of purpose, Lily vowed to honor Emily's legacy by sharing her story with the world, ensuring that her love would never be forgotten. And as she closed the diary for the final time, she whispered a silent promise to herself to cherish every moment, to embrace every adventure, and to never stop searching for the magic hidden within the pages of life.

And so, as the dawn broke over the horizon and the birds began to sing, Lily emerged from the shadows of the past, her spirit alight with the flame of discovery, ready to embark on a new chapter in the never-ending story of her own life.
                         </div>
                         <div className="rate-share">
                            <div className="chapter-rate">
                                  <p style={{fontSize:"13px",marginBottom:"0px"}}>Rate " Love Story (1) "</p>
                                  <StarCount rating={0} ratingColor='#059674' size='25px'/>
                            </div>
                            <div className="chapter-share">
                            <p style={{fontSize:"13px",marginBottom:"4px",textAlign:"right"}}>share</p>
                            <span style={{backgroundColor:"green",padding:"6px 8px",borderRadius:"50%",width:"25px",height:"25px",marginLeft:"5px",marginRight:"5px"}}>
                            <BsWhatsapp style={{color:"white"}}/> 
                           </span>
                            <span style={{backgroundColor:"blue",padding:"6px 8px",borderRadius:"50%",width:"25px",height:"25px",marginLeft:"5px"}}>
                           <FaFacebookF style={{color:"white"}}/> 
                          </span>
                          <span style={{marginLeft:"8px",fontSize:"18px"}}>
                          <MdShare />
                          </span>
                            </div>
                         </div>
                         <div className="see-all-reviews" style={{display:"flex",justifyContent:"center"}}>
                              <Link to="/Anukriti/other-story"><button className="all-review-btn">See All Reviews</button></Link>
                         </div>
                  </div>
                  <div className="chapter-next">
                      <ReadNext/>
                  </div>
           </div>
    )
}

export default BookContent;