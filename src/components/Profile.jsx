
import '../CSS/profile.css';
import userImg from "../assets/default-profile.png";
import defaultCover from '../assets/cover-image.jpg';
import { ImPencil } from "react-icons/im";
import { useEffect, useRef, useState } from 'react';
    import Button from 'react-bootstrap/Button';
    import Modal from 'react-bootstrap/Modal';
import Library from './Library';
import Content from './Content';
import Follower from './Follower';
import Following from './Following';
import { IoSettings } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from 'react-router-dom';
import folloSound from '../assets/follow-sound.mp3';
import { TiTick } from "react-icons/ti";
import { IoPersonAdd } from "react-icons/io5";
import {useSelector} from 'react-redux';
import axios from 'axios';
import { FaCameraRetro } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import ProfileLoader from './ProfileLoader';
import SeriesContent from './SeriesContent';
function Profile(){
  const [followCount,setFollowCount]=useState(0); 
  const [coverImage, setCoverImage] = useState({ url: null, name: '' });
  const [profileImage, setProfileImage] = useState({ url: null, name: '' });
  const navigate=useNavigate(); 
  useEffect(() => {
      return () => {
          // Cleanup URLs when component unmounts or image changes
          if (coverImage.url) URL.revokeObjectURL(coverImage.url);
          if (profileImage.url) URL.revokeObjectURL(profileImage.url);
      };
  }, [coverImage, profileImage]);

  // const [userProfileImage,setUserProfileImage]=useState(null);
  const handleFileChange = async (event, imageType) => {
    event.preventDefault();
    const file = event.target.files[0]; // Get the first selected file
    console.log(file);
    if (file) {
      const url = URL.createObjectURL(file);
      const name = file.name;
  
      if (imageType === 'cover') {
        if (coverImage.url) URL.revokeObjectURL(coverImage.url); // Cleanup previous URL
        setCoverImage({ url, name });
        try {
          // Create a FormData object to handle file uploads
          const formData = new FormData();
          formData.append('userCover', file);
  
          const res = await axios.post('https://anukriti.onrender.com/api/users/user-cover-img', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            withCredentials: true // Include this line to allow cookies
          });
          console.log(res);
          if (res.status === 200) {
            // Handle success response
          }
        } catch (error) {
          console.log(error);
        }
      } else if (imageType === 'profile') {
        if (profileImage.url) URL.revokeObjectURL(profileImage.url); // Cleanup previous URL
        setProfileImage({ url, name });
        try {
          // Create a FormData object to handle file uploads
          const formData = new FormData();
          formData.append('userProfile', file);
  
          const res = await axios.post('https://anukriti.onrender.com/api/users/user-profile-img', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            withCredentials: true // Include this line to allow cookies
          });
          console.log(res);
          if (res.status === 200) {
            // Handle success response
          }
        } catch (error) {
          console.log(error);
        }
        
      }
    }
  };
   

   const {id}=useParams();
   const[user,setUser]=useState(null);
   const[userAbout,setUserAbout]=useState(null);
   useEffect(()=>{
    const getProfile = async () => {
      try {
          const response = await axios.get(`https://anukriti.onrender.com/api/users/get-profile/${id}`,{
            withCredentials: true // Include cookies with the request
            
        });
        
        if (response.status === 200) {
            const userInfoData=response.data;
            setUser(userInfoData);
            setUserAbout(userInfoData.about);
            setFollowCount(userInfoData.followers?.length);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      getProfile();   
    },[id])
 ///
  
    const [show, setShow] = useState(false);
    const handleClose = () =>setShow(false);
    const handleShow = () => setShow(true);
     
    const [selectedSpan, setSelectedSpan] = useState(id==='self' ? 'library' :'content');
    const handleClick = (spanElement) => {
        setSelectedSpan(spanElement);
      };

      const [audio] = useState(new Audio(folloSound)); 
      useEffect(()=>{
        const CheckFollow = async () => {
          try {
              const res = await axios.get('https://anukriti.onrender.com/api/users/check-follow', {
                params: {followUserId:user._id},
                headers: {
                  'Content-Type': 'application/json'
                },
                withCredentials: true // Include this line to allow cookies
              });
              setFollow(res.data)  
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        CheckFollow();
      },[user])
      
      const[follow,setFollow]=useState(null);
      
      const handleFollow=async()=>{
        if(follow=='Follow'){
          setFollow('Following')
          setFollowCount((followCount)=>followCount+1)
         }
        else{
          setFollow('Follow')
          setFollowCount((followCount)=>followCount-1)
        }
        audio.play();
        try {
          const res = await axios.post('https://anukriti.onrender.com/api/users/follow',{follow}, {
            params: {followUserId:user._id},
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true // Include this line to allow cookies
          });
          if (res.status === 200) {
          }
        
      } catch (error) {
        navigate('/Anukriti/sign');
      }
      }
    const about=useRef(null);  
    const handleAbout=async(e)=>{
      e.preventDefault();
      setUserAbout(about.current.value);
      setShow(false);
      try {
        const res = await axios.put('https://anukriti.onrender.com/api/users/set-about', {about:about.current.value}, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true // Include this line to allow cookies
        });
        
        if(res.status===200){
            
        }
       } catch (error) {
        
       }
    }
    function Example() {
      return (
        <>
          <Modal show={show} onHide={handleClose} style={{marginTop:"100px"}}>
            <Modal.Header closeButton>
              <Modal.Title  style={{fontWeight:"bold"}}>About </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea name="" id="" cols="30" rows="10"  placeholder='About' style={{width:"100%",height:"100px",padding:"5px"}} ref={about}></textarea>
            </Modal.Body>
            <Modal.Footer style={{justifyContent:"flex-start"}}>
              <Button variant="danger" onClick={handleAbout}>
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
         !user ? <div className="loader"><div class="spinner-border" style={{width:"7rem", height:"7rem", role:"status",}}></div></div>: 
        <div className="profile" style={{width:"90%",margin:"100px auto",}}>
        <div className="cover-image" style={{backgroundImage:`url(${coverImage.url || user.coverImage ||  defaultCover})`,display:"flex",justifyContent:"flex-end"}}>
          {
            user.email &&  
            <div className="cover-control" style={{ marginTop: "15px", width: "40px", marginRight: "2%", color: "black" }}>
            <Link to="/Anukriti/setting">
                <IoSettings style={{ fontSize: "40px", backgroundColor: "white", padding: "8px", borderRadius: "50%" }} />
            </Link>
            <input type="file" id="file-input-cover"  style={{display:"none"}} onChange={(e) => handleFileChange(e, 'cover')}/>
            <label htmlFor="file-input-cover" style={{cursor:"pointer"}}>
                <FaCameraRetro style={{  fontSize: "40px", backgroundColor: "white", padding: "8px", borderRadius: "50%", marginTop: "45px", marginRight: "2%" }} />
            </label>
        </div>
          }
          
           
        </div>
        <div className="user" style={{position:"relative",top:"-50px",width:"80%",margin:"auto"}}>
                <div className="user-img" style={{display:"flex",justifyContent:"center"}}>
               <img src={profileImage.url || user.profileImage || userImg} alt="" srcset="" style={{width:"120px",height:"120px",borderRadius:"50%",border:"7px solid white"}}/>
               {
                user.email && <>
                 <input type="file" id="file-input-profile"  style={{display:"none"}} onChange={(e) => handleFileChange(e, 'profile')}/>
               <label htmlFor="file-input-profile" style={{position:"absolute",cursor:"pointer"}}>
               <IoCameraOutline style={{position:"absolute",top:"85px",color:"white",fontSize:"26px",}}/>
               </label> 
                </>
               }
               
               </div>
               <p style={{textAlign:"center",fontWeight:"bold",margin:"0"}}>{user?.firstName ?`${user?.firstName} ${user?.lastName}` : `${user?.username}`}</p>
               <p style={{textAlign:"center",fontSize:"12px"}}>Read by 452 people</p>
        </div>
        {show && <Example/>}
        <div className="title-about" style={{marginTop:"-50px",marginLeft:"5%"}}>
            <span style={{fontWeight:"bold",marginRight:"15px"}}>About</span>
            {user.email && <ImPencil style={{marginBottom:"8px",cursor:"pointer"}} onClick={handleShow}/>}
        </div>
        <p class="user-about" style={{marginLeft:"5%"}}>{userAbout}</p>

         {
          !user.email && <div className="other-follow-btn" style={{display:"flex",justifyContent:"center",marginBottom:"15px"}}>
          {follow && <><div className="follow-btn" style={{display:"flex",justifyContent:"center"}}>
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
              <span style={{color:"#d0021b",border:"1px solid #d0021b",padding:"5px 10px",fontSize:"12px",fontWeight:"600",marginLeft:"5px"}}>{followCount}</span></>}
          </div>
         } 
         

        <div className="user-info" style={{marginLeft:"5%",}}>
          {
            user.library && <span className="info-ele" style={{color: selectedSpan === 'library' ? 'red' : 'black',borderBottom:selectedSpan === 'library' ? '2px solid red': 'none'}} onClick={() => handleClick('library')}>Library</span>
          }
            
            <span className="info-ele" style={{color: selectedSpan === 'content' ? 'red' : 'black',borderBottom:selectedSpan === 'content' ? '2px solid red': 'none'}} onClick={() => handleClick('content')}>Content</span>
            <span className="info-ele" style={{color: selectedSpan === 'follower' ? 'red' : 'black',borderBottom:selectedSpan === 'follower' ? '2px solid red': 'none'}} onClick={() => handleClick('follower')}>Followers</span>
            <span className="info-ele foll"style={{color: selectedSpan === 'following' ? 'red' : 'black',borderBottom:selectedSpan === 'following' ? '2px solid red': 'none'}} onClick={() => handleClick('following')}>Following</span>
        </div>
        <div className="library" style={{display:"flex",marginTop:"15px",marginLeft:"5%",gap:"4px",flexWrap:"wrap",height:"100%"}}>
        {
          selectedSpan==='library' ? user.library.length===0 ?<div style={{fontWeight:"700",fontSize:"16px"}}>😢😢😭 No posts added to Library</div>: user.library.map((item,index)=><Library id={item}/>):  selectedSpan==='follower' ? user.followers.length===0 ?<div style={{fontWeight:"700",fontSize:"16px"}}>😢😢😭 No Followers Yet</div>: user.followers.map((item,index)=><Follower id={item}/>): selectedSpan==='following' ? user.following.length===0 ?<div style={{fontWeight:"700",fontSize:"16px"}}>😢😢😭 No Following Yet</div>: user.following.map((item,index)=><Following id={item}/>):selectedSpan==='content' && user.posts.length===0 ?<div style={{fontWeight:"700",fontSize:"16px"}}>😢😢😭 No Post Yet</div>: user.posts?.map((item,index)=><Content id={item}/>) 
        }
        {
          selectedSpan==='content' && user.series?.map((item,index)=><SeriesContent seriesId={item}/>)
        }
        </div>
        </div>
    )
}

export default Profile;