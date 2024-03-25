
import '../CSS/profile.css';
import userImg from "../assets/user-photo.jpg";
import { ImPencil } from "react-icons/im";
import { useState } from 'react';
    import Button from 'react-bootstrap/Button';
    import Modal from 'react-bootstrap/Modal';
import Library from './Library';
import Content from './Content';
import Follower from './Follower';
function Profile(){
    const [show, setShow] = useState(false);
    const handleClose = () =>setShow(false);
    const handleShow = () => setShow(true);

    const [selectedSpan, setSelectedSpan] = useState('library');
    const handleClick = (spanElement) => {
        setSelectedSpan(spanElement);
      };
      const myArray = [1, 2, 3, 4, 5,6,7,8,9,10,11,12];
    function Example() {
      return (
        <>
          <Modal show={show} onHide={handleClose}>
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
        <div className="cover-image" style={{}}>
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
            <ImPencil style={{marginBottom:"8px",cursor:"pointer"}} onClick={handleShow}/>
        </div>
        <p class="user-about" style={{marginLeft:"5%"}}>My Name is Anurag Singh</p>

        <div className="user-info" style={{marginLeft:"5%",}}>
            <span class="info-ele" style={{color: selectedSpan === 'library' ? 'red' : 'black',borderBottom:selectedSpan === 'library' ? '2px solid red': 'none'}} onClick={() => handleClick('library')}>Library</span>
            <span class="info-ele" style={{color: selectedSpan === 'content' ? 'red' : 'black',borderBottom:selectedSpan === 'content' ? '2px solid red': 'none'}} onClick={() => handleClick('content')}>Content</span>
            <span class="info-ele" style={{color: selectedSpan === 'follower' ? 'red' : 'black',borderBottom:selectedSpan === 'follower' ? '2px solid red': 'none'}} onClick={() => handleClick('follower')}>Followers</span>
            <span class="info-ele foll"style={{color: selectedSpan === 'following' ? 'red' : 'black',borderBottom:selectedSpan === 'following' ? '2px solid red': 'none'}} onClick={() => handleClick('following')}>Following</span>
        </div>
        <div className="library" style={{display:"flex",marginTop:"15px",marginLeft:"5%",gap:"4px",flexWrap:"wrap",height:"100%"}}>
        {myArray.map(() => (
          (selectedSpan==='library' && <Library/>) || (selectedSpan==='content' && <Content/>) || (selectedSpan==='follower' && <Follower/>)||(selectedSpan==='following' && <Follower/>)
        ))}
        </div>
        </div>
    )
}

export default Profile;