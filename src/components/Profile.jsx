
import '../CSS/profile.css';
import userImg from "../assets/user-photo.jpg";
import { ImPencil } from "react-icons/im";
import { useEffect, useState } from 'react';
    import Button from 'react-bootstrap/Button';
    import Modal from 'react-bootstrap/Modal';
import Library from './Library';
import Content from './Content';
import Follower from './Follower';
import { IoSettings } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import folloSound from '../assets/follow-sound.mp3';
import { TiTick } from "react-icons/ti";
import { IoPersonAdd } from "react-icons/io5";
import {useSelector} from 'react-redux';
function Profile(){
  const contentList=useSelector(store=>store.contentArray);  
   const {id}=useParams();
    const [show, setShow] = useState(false);
    const handleClose = () =>setShow(false);
    const handleShow = () => setShow(true);

    const [selectedSpan, setSelectedSpan] = useState(id==='self' ? 'library' :'content');
    const handleClick = (spanElement) => {
        setSelectedSpan(spanElement);
      };

      const [audio] = useState(new Audio(folloSound));
      const [follow,setFollow]=useState('Follow');
      const handleFollow=()=>{
        setFollow(follow === 'Follow' ? 'Following' : 'Follow');
        audio.play();
      }  
      const myArray = [1, 2, 3, 4, 5,6,7,8,9,10,11,12];
    function Example() {
      return (
        <>
          <Modal show={show} onHide={handleClose} style={{marginTop:"100px"}}>
            <Modal.Header closeButton>
              <Modal.Title  style={{fontWeight:"bold"}}>About </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea name="" id="" cols="30" rows="10"  placeholder='About' style={{width:"100%",height:"100px",padding:"5px"}}></textarea>
            </Modal.Body>
            <Modal.Footer style={{justifyContent:"flex-start"}}>
              <Button variant="danger" onClick={handleClose}>
                Submit
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
 
    return(
        <div className="profile" style={{width:"90%",margin:"100px auto",}}>
        <div className="cover-image" style={{display:"flex",justifyContent:"flex-end"}}>
          {
            id==='self' &&  <Link to="/Anukriti/setting" style={{marginTop:"15px",marginRight:"2%",color:"black"}}>
            <IoSettings style={{fontSize:"40px",backgroundColor:"white",padding:"8px",borderRadius:"50%"}} /> </Link>
          }
           
        </div>
        <div className="user" style={{position:"relative",top:"-50px",}}>
                <div className="user-img" style={{display:"flex",justifyContent:"center"}}>
               <img src={userImg} alt="" srcset="" style={{width:"120px",height:"120px",borderRadius:"50%",border:"7px solid white"}}/></div>
               <p style={{textAlign:"center",fontWeight:"bold",margin:"0"}}>Anurag Singh</p>
               <p style={{textAlign:"center",fontSize:"12px"}}>Read by 452 people</p>
        </div>
        {show && <Example/>}
        <div className="title-about" style={{marginTop:"-50px",marginLeft:"5%"}}>
            <span style={{fontWeight:"bold",marginRight:"15px"}}>About</span>
            {id==='self' && <ImPencil style={{marginBottom:"8px",cursor:"pointer"}} onClick={handleShow}/>}
        </div>
        <p class="user-about" style={{marginLeft:"5%"}}>My Name is Anurag Singh</p>

         {
          id==='other' && <div className="other-follow-btn" style={{display:"flex",justifyContent:"center",marginBottom:"15px"}}>
          <div className="follow-btn" style={{display:"flex",justifyContent:"center"}}>
              <button style={{
                 border:"none",
                 background:"#d0021b",
                 color:"#fff",
                 fontSize:"12px",
                 margin:"0px auto",
                 padding:"5px 8px",
                 borderRadius:"3px",
                 marginTop:"0px"
              }} onClick={handleFollow}>
              {
                ((follow==='Follow' && <IoPersonAdd style={{color:"white",fontSize:"13px",marginBottom:"3px",marginRight:"5px"}}/>)||(follow==='Following' && <TiTick style={{color:"white",fontSize:"16px",marginBottom:"2px",marginRight:"3px"}}/>))
              }
              {follow}</button>
              </div>
              <span style={{color:"#d0021b",border:"1px solid #d0021b",padding:"5px 10px",fontSize:"12px",fontWeight:"600",marginLeft:"5px"}}>2560</span>
          </div>
         } 
         

        <div className="user-info" style={{marginLeft:"5%",}}>
          {
            id==='self' && <span class="info-ele" style={{color: selectedSpan === 'library' ? 'red' : 'black',borderBottom:selectedSpan === 'library' ? '2px solid red': 'none'}} onClick={() => handleClick('library')}>Library</span>
          }
            
            <span class="info-ele" style={{color: selectedSpan === 'content' ? 'red' : 'black',borderBottom:selectedSpan === 'content' ? '2px solid red': 'none'}} onClick={() => handleClick('content')}>Content</span>
            <span class="info-ele" style={{color: selectedSpan === 'follower' ? 'red' : 'black',borderBottom:selectedSpan === 'follower' ? '2px solid red': 'none'}} onClick={() => handleClick('follower')}>Followers</span>
            <span class="info-ele foll"style={{color: selectedSpan === 'following' ? 'red' : 'black',borderBottom:selectedSpan === 'following' ? '2px solid red': 'none'}} onClick={() => handleClick('following')}>Following</span>
        </div>
        <div className="library" style={{display:"flex",marginTop:"15px",marginLeft:"5%",gap:"4px",flexWrap:"wrap",height:"100%"}}>
        {myArray.map(() => (
          (selectedSpan==='library' && <Library/>) || (selectedSpan==='follower' && <Follower/>)||(selectedSpan==='following' && <Follower/>)
        ))}

        {
          contentList.map((item,index)=>(
            (selectedSpan==='content' && <Content id={index}/>) 
          ))
        }
        </div>
        </div>
    )
}

export default Profile;