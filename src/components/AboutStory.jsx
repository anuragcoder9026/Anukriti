import { MdOutlineLibraryAdd } from "react-icons/md";
import { GrDownload } from "react-icons/gr";
import '../CSS/aboutStory.css';
import cardImg from '../assets/card1.jpg';
import { Link } from "react-router-dom";
function AboutStory(){
    return(
        <div class="about-story-row" style={{marginTop:"87px",backgroundColor:"#f1ecec",paddingTop:"25px",paddingBottom:"15px"}}>
        <div class="about-story-col col1">
            <img src={cardImg} alt="" srcset="" style={{marginTop:"10px",borderRadius:"10px"}}/>
        </div>
        <div class="about-story-col col2">
            <h1 style={{fontWeight:"600"}}>Endless Love</h1>
            <button style={{border:"solid grey 1px",marginLeft:"3px",padding:"2px 8px",borderRadius:"10px"}}>Romance</button>
            <button style={{border:"solid grey 1px",marginLeft:"10px",padding:"2px 8px",borderRadius:"10px"}}>Women</button>
            <p className="story-para" style={{marginTop:"15px",fontWeight:"500",maxHeight:"80px",marginBottom:"60px",}}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla et quos nostrum minima consequatur iste nihil! Veniam accusantium  consectetur ...
            </p>
            <div class="descript-row">
                  <div class="descript-col2">
                    <p class="fs-5" style={{fontWeight:"800",color:"green",marginBottom:"0px"}}>★ 4.7</p>
                    <p style={{fontSize:"14px"}}>( 8.2K )</p>
                    </div>

                  <div class="descript-col3">
                  <p style={{fontWeight:"800",fontSize:"20px",marginBottom:"0px"}}>4 Hours</p>
                  <p style={{fontSize:"15px"}}>Reading Time</p>
                  </div>

                  <div class="descript-col4">
                  <p style={{fontWeight:"800",fontSize:"20px",marginBottom:"0px"}}>56594+</p>
                  <p style={{fontSize:"15px"}}>Reading Count</p>
                  </div>
            </div>
            <div class="btn-story" >
               <Link  to="/Anukriti/book-content" class="btn-story-read"><button type="button" class="btn btn-danger">Read Now</button></Link>
               <div class="btn-story-library"><MdOutlineLibraryAdd className="fs-2"style={{marginTop:"8px"}}/></div>
               <div class="btn-story-download"><GrDownload className="fs-3" style={{marginTop:"6px"}}/></div>
            </div>
        </div>
      </div>
    )
}

export default AboutStory;