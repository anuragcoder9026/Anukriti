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
import { Link, useParams } from "react-router-dom";
import ReadNext from "./ReadNex";
import readingMusic from '../assets/reading-music.mp3';
import { RxCross2 } from "react-icons/rx";
import { HiPlus } from "react-icons/hi";
import { FaMinus } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { CgFormatLineHeight } from "react-icons/cg";
import { MdOutlineDensitySmall } from "react-icons/md";
import lineDec from '../assets/lineHigh.webp';
import sideImg from '../assets/side-love.webp';
import { IoPersonAdd } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Review from "./Review";
import { TiTick } from "react-icons/ti";
function BookContent(){
  const {id}=useParams();
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


  const [chSetting,setChSetting]=useState(false);
  const handleSetting=()=>{setChSetting(chSetting=>!chSetting); }

  const [fontSiz,setFontSiz]=useState(16);
  const handleIncSize=()=> {setFontSiz(fontSiz=>fontSiz+1)};
  const handleDecSize=()=> {setFontSiz(fontSiz=>fontSiz-1)};

  const [lineHigh,setlineHigh]=useState(1.6);
  const handleLineHigh=(val)=>{setlineHigh(val)};

  const [backColor,setBackColor]=useState(true);
  const handleBackColor=(val)=>{setBackColor(val)};

  const [side,setSide]=useState(false);
  const handleSide=()=>{setSide(side=>!side)}; 

  const [sideReview,setSideReview]=useState(true);
  const handleSideEdit=(val)=>{setSideReview(val)};

  const [starCont,setStarCont]=useState(0);
  const handleStarCont=(val)=>{setStarCont(val)}; 

  const [cancel,setCancel]=useState(false);
  const handleCancel=(val)=>{
    setSideReview(false);
    setCancel(val)
  };
  const handleDelete=()=>{
     setStarCont(0);
     setCancel(false);
     setSideReview(true);
  }

  const [bottomStar,setButtomStar]=useState(0);
  const handleButtomStar=(val)=>{
    setBottom(true)
    setButtomStar(val)};

  const [bottom,setBottom]=useState(false);
  const handleBottom=(val)=>{setBottom(val)};

  const[follow,setFollow]=useState(true);
  const handleFollow=()=>{setFollow(!follow)}
    return(
           <div className="book-content" >
              <div className="chapter-sidebar" style={{left:side ? '0px' :'-310px',paddingBottom:"10px"}}>
                  <div className="side-top" style={{display:"flex",marginLeft:"10px"}}>

                  <div className="side-to-left" style={{width:"130px",height:"170px"}}>
                       <img src={sideImg} alt="" style={{width:"100%",height:"100%"}}/>
                   </div>

                  <div style={{display:"flex",justifyContent:"flex-end",fontSize:"24px",paddingRight:"15px",width:"165px"}}><RxCross2 onClick={handleSide} style={{cursor:"pointer"}}/></div>
                  </div>
                  <div className="book-name" style={{color:"#2c3e50",fontSize:"18",fontWeight:"500",margin:"10px 13px",textAlign:"left",width:"45%",overflow:"hidden"}}> Love Story (1)</div>
                  
                  <div className="side-middle" style={{borderBottom:"1.5px solid #e9e9e9",marginBottom:"20px"}}>
                  <div className="side-author-section" style={{display:"flex",height:"51px",marginLeft:"10px",marginBottom:"20px"}}>
                     <img src={sideImg} alt=""  style={{width:"40px",height:"40px",borderRadius:"50%",margin:"auto 3px",}}/>
                     <span style={{margin:"auto 8px",width:"115px",color:"black",fontSize:"15px",overflow:"hidden"}}> Anurag Singh patel  "Poet"</span>
                      
                      {
                        id==='other' && <>
                               <button style={{color:"#036974",border:"1px solid #036974",float:"right",fontSize:"14px",padding:follow ? '0px 8px' :'0px 5px 0px 1px',borderRadius:"3px",height:"60%",margin:"auto 0px",marginLeft:"5px"}} onClick={handleFollow}>
                                {
                                  follow ? <IoPersonAdd style={{marginRight:"6px"}}/> :<TiTick style={{marginRight:"6px",marginLeft:"0px"}}/>
                                }
                                {follow ? 'Follow' :'Following'}</button>
                        </>
                      }
                     
                  </div>
                  </div>

                  <div className="side-rating" style={{marginLeft:"10px"}}>
                    {
                      id==='other' && <p style={{marginBottom:"2px",fontSize:"15px",}}>Your Rating 
                      {
                        (cancel && sideReview) &&
                        <span style={{color:"brown",float:"right",fontSize:"13px",marginRight:"20px",fontWeight:"500",cursor:"pointer"}} onClick={()=>{handleSideEdit(false)}}>Cancel</span>
                      }
                      
                      
                      </p>
                    }
                      
                      {
                        id=='other' && <>
                            <div className="side-star" style={{display:"flex",justifyContent:"space-between"}}>
                       {
                        (starCont===0 && 
                        <div style={{marginLeft:"0px"}}>
                          <FaRegStar style={{color:"#f5a623",fontSize:"26px",}} onClick={()=>{handleStarCont(1)}}/>
                          <FaRegStar style={{color:"#f5a623",fontSize:"26px"}} onClick={()=>{handleStarCont(2)}}/>
                          <FaRegStar style={{color:"#f5a623",fontSize:"26px"}} onClick={()=>{handleStarCont(3)}}/>
                          <FaRegStar style={{color:"#f5a623",fontSize:"26px"}} onClick={()=>{handleStarCont(4)}}/>
                          <FaRegStar style={{color:"#f5a623",fontSize:"26px"}} onClick={()=>{handleStarCont(5)}}/>
                        </div>) || 
                        (starCont!==0 && <StarCount rating={starCont} ratingColor='#f5a623' size='26px'/>)
                       } 

                      {
                        (starCont!==0 && !cancel || !sideReview ) && <div class="dropdown" style={{marginRight:"10px"}}>
                        <button class="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false"><BsThreeDotsVertical /> </button>
                      <ul class="dropdown-menu" style={{fontSize:"12px"}}>
                         <li><a class="dropdown-item" href="#" style={{fontWeight:"500"}} onClick={()=>{handleSideEdit(true)}}>Edit Review</a></li>
                         <li><a class="dropdown-item" href="#" style={{fontWeight:"500"}} onClick={handleDelete}>Delete Review</a></li>
                      </ul>
                    </div>
                      }
                    

                     </div>
                     {
                       (sideReview && starCont!==0) && <> <textarea name="side-review" id="" cols="28" rows="3" placeholder="Write a Review" style={{padding:"8px", border:"1px solid #ced4da",color:"#495057",fontSize:"14px",fontWeight:"500",marginLeft:"6px",marginTop:"15px",marginBottom:"6px"}}></textarea>

                       <div className="side-save" style={{display:"flex",justifyContent:"flex-end"}}>
                        {
                          !cancel && <button style={{border:"none",padding:"4px 9px",marginRight:"15px",backgroundColor:"#e2e3e4",color:"#212529",fontSize:"14px"}} onClick={()=>handleCancel(true)}>Cancel</button>
                        }
                         
                         <button style={{border:"none",padding:"4px 9px",marginRight:"15px",backgroundColor:"#4e9862",color:"#fff"}}>save</button>
                       </div> </>
                     }
                        </>
                      }
                      
                     
                      <div className="side-share-edit" style={{width:"100%",height:"68px",display:"flex",marginTop:"10px"}}>
                        <div className="side-share" style={{width:"40%",height:"100%"}}>
                               <p style={{marginLeft:"8px",marginBottom:"11px"}}>Share</p>
                               <span style={{backgroundColor:"green",padding:"6px 8px",borderRadius:"50%",width:"25px",height:"25px",marginLeft:"5px",marginRight:"5px"}}>
                            <BsWhatsapp style={{color:"white"}}/> 
                           </span>
                            <span style={{backgroundColor:"blue",padding:"6px 8px",borderRadius:"50%",width:"25px",height:"25px",marginLeft:"5px"}}>
                           <FaFacebookF style={{color:"white"}}/> 
                          </span>  
                        </div>

                      </div>
                  </div>
                   <div className="side-read-next" style={{width:"100%",height:"100px",display:"flex",backgroundColor:"#e9e9e9",marginTop:"15px",marginLeft:"10px",padding:"10px",paddingRight:"0px"}}>
                      <img src={sideImg} alt="" style={{width:"65px",height:"80px"}}/>
                      <div className="side-next-desc" style={{marginTop:"20px",marginLeft:"7px"}}>
                         <p style={{fontSize:"10px",fontWeight:"500",marginBottom:"0px"}}>Read the next part of this book here</p>
                         <span style={{overflow:"hidden",fontWeight:"500"}}>Love Story</span> <span>(2)</span>
                      </div>
                   </div>
              </div> 

              {
                (chSetting &&  <div className="chapter-setting" style={{width:"100%",height:"185px",position:"fixed",top:"180px",zIndex:"1999"}}>
                <div className="chapter-setting-modal">
                    <div style={{display:"flex",justifyContent:"flex-end",fontSize:"24px"}}><RxCross2 onClick={handleSetting}/></div>
                    <div className="chapter-option"><span>Font Size: </span><HiPlus style={{color:"black",fontSize:"17px",marginLeft:"6px"}} onClick={handleIncSize}/><FaMinus style={{color:"black",fontSize:"17px",marginLeft:"14px"}} onClick={handleDecSize}/></div>
                    <div className="chapter-option"><span>Background: </span><MdLibraryBooks style={{fontSize:"30px",marginLeft:"6px",marginBottom:"7px",color:"black"}} onClick={()=>handleBackColor(false)}/><MdOutlineLibraryBooks style={{fontSize:"30px",marginLeft:"14px",marginBottom:"7px",color:"gray"}} onClick={()=>handleBackColor(true)}/></div>
                    <div className="chapter-option"><span> Line Spacing: </span>
                    <CgFormatLineHeight style={{fontSize:"30px",marginLeft:"6px",marginBottom:"7px",color:"black"}} onClick={()=>{handleLineHigh(2.0)}}/>
                    
                    <MdOutlineDensitySmall style={{fontSize:"22px",marginLeft:"16px",marginBottom:"7px",color:"black"}} onClick={()=>{handleLineHigh(1.6)}}/>
                    
                    <img src={lineDec} alt="" style={{width:"33px",height:"27px",color:"red",marginBottom:"7px",marginLeft:"16px"}} onClick={()=>{handleLineHigh(1.2)}}/>
                    </div>
                </div>
             </div>)
              }
                  <div className="book-content-header">
                      <div className="bch-left">
                      <Link to="/Anukriti/aboutStory"><FaArrowLeft style={{marginRight:"15px"}}/></Link><span>Love Story (1)</span><TiArrowSortedDown style={{marginLeft:"7px",cursor:"pointer"}} onClick={handleSide}/>
                      </div>
                      <div className="bch-right">
                        {
                           (music &&  <MdMusicNote style={{fontSize:"23px"}} onClick={handlePause}   />) ||
                           (!music && <MdMusicOff style={{fontSize:"23px"}} onClick={handlePlay} />)
                        }
                        <IoMdSettings style={{fontSize:"23px",marginLeft:"10px",marginRight:"10px"}} onClick={handleSetting}/>
                        <PiDotsThreeOutlineVerticalFill style={{fontSize:"20px"}}/>
                      </div>
                  </div>
                  <div className="book-content-body" style={{opacity:(chSetting || side || bottom) ? .3 : 1.0,color:backColor ? 'black' :'white',backgroundColor:backColor ? 'white' :'black'}}>
                         <div className="chapter-title">Love Story (1)</div>
                         <div className="chapter-body" style={{color:backColor ? '#2c3e50' :'white',fontSize:`${fontSiz}px`,lineHeight:lineHigh}}>
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
                         {
                  id==='other' &&  <div className="chapter-rate">
                  <p style={{fontSize:"13px",marginBottom:"0px"}}>Rate " Love Story (1) "</p>
                        
<div style={{fontSize:"25px",display:"flex",justifyContent:"center",marginTop:"1px",     color:"#056974",cursor:"pointer"}}>
{bottomStar>=1?<FaStar onClick={()=>handleButtomStar(1)}/>:<FaRegStar onClick={()=>handleButtomStar(1)}/>}
{bottomStar>=2?<FaStar onClick={()=>handleButtomStar(2)}/>:<FaRegStar onClick={()=>handleButtomStar(2)}/>}
{bottomStar>=3?<FaStar onClick={()=>handleButtomStar(3)}/>:<FaRegStar onClick={()=>handleButtomStar(3)}/>}
{bottomStar>=4?<FaStar onClick={()=>handleButtomStar(4)}/>:<FaRegStar onClick={()=>handleButtomStar(4)}/>}
{bottomStar==5?<FaStar onClick={()=>handleButtomStar(5)}/>:<FaRegStar onClick={()=>handleButtomStar(5)}/>}   
</div>
            </div>
                }  
                           
                            <div className="chapter-share">
                            <p style={{fontSize:"13px",marginBottom:"4px",textAlign:"left",paddingLeft:"8px"}}>share</p>
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
                              <Link to={`/Anukriti/other-story/${id}`}><button className="all-review-btn">See All Reviews</button></Link>
                         </div>
                  </div>
                  <div className="chapter-next">
                      <ReadNext/>
                  </div>
                  <div className="bottom-popup" style={{bottom:bottom?'0vh':'-710vh'}}>
                    <RxCross2 className="bottom-cross" onClick={()=>handleBottom(false)}/> 
                    <Review brate={bottomStar} story='other'/>
                  </div>
           </div>
    )
}

export default BookContent;