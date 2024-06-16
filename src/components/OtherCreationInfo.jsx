
import '../CSS/otherCreate.css'
import AboutAuthor from './AboutAuthor';
import ReadNext from './ReadNex';
import ReadNow from './ReadNow';
import Review from './Review';
import { useParams } from 'react-router-dom';
import { FaRegCircleQuestion } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import { deleteAction } from "../store/deleteSlice";
import { postLoaderAction } from '../store/postLoaderSlice';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OtherCreationInfo(){
     const {id} =useParams();
     let postId="";
     for (let i = id.length - 1; i >= 0; i--) {
       if(id[i]==='-') break;
       postId=id[i]+postId;
      }
      // console.log(postId);
     
     const dispatch=useDispatch();
     const deleteModal=useSelector(store=>store.deleteModal);
     const postLoader=useSelector(store=>store.postLoader);
     const handleDeleteModal=()=>{
        dispatch(deleteAction.handlePopup(false));
    };
    const [user,setUser]=useState(null);
    useEffect(()=>{
       dispatch(postLoaderAction.handlePostLoader(true));
        dispatch(deleteAction.handlePopup(false));
        const AuthPost = async () => {
            try {
                const res = await axios.get('https://anukriti.onrender.com/api/posts/auth-post', {
                  params: {postId},
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  withCredentials: true // Include this line to allow cookies
                });
                if (res.status === 200) {
                   setUser(res.data);
                }
              
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          AuthPost();
    },[])
   
    const [star,setStar]=useState(0);
    useEffect(()=>{
      const CheckRating = async () => {
        try {
            const res = await axios.get('https://anukriti.onrender.com/api/posts/check-rating', {
              params: {postId},
              headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true // Include this line to allow cookies
            });
              console.log(res);
              if(res.status===200){
                setStar(res.data.rating)
              }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      CheckRating();
    },[user])
    

    const deleteNotify=async()=>{
      try {
        const res = await axios.delete(`https://anukriti.onrender.com/api/posts/delete-post/${postId}`, {
          params: {postId},
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true // Include this line to allow cookies
        });
        console.log(res);
        if (res.status === 200) {
          toast.success("Deleted Succesfully !",{
            position:"bottom-center",
            theme:"dark"
        })
        }
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
        }
    // console.log("user:",user);
    return(
      <div className="other-creation" >
        {
          postLoader && !user &&<div className="loader"><div class="spinner-border" style={{width:"7rem", height:"7rem", role:"status",}}></div></div>
        }
            {
                user?.email && !postLoader &&  <div className="delete-popup" style={{top:deleteModal?'130px' : '-330px'}}>
                <div className="delete-modal">
                       <div className="modal-logo"><FaRegCircleQuestion/></div>
                       <div style={{width:"80%",textAlign:"center",marginLeft:"27px",marginTop:"10px",fontWeight:"600"}}>Are you sure to Delete this Content ?</div>
                       <div className="modal-button">
                           <button style={{border:"none",backgroundColor:"#fff",padding:"5px 8px",fontSize:"14px",fontWeight:"500"}} onClick={()=>handleDeleteModal(false)}>Cancel</button>
                           <button style={{border:"none",backgroundColor:"#d0021b",color:"#fff",padding:"5px 8px",fontSize:"14px",fontWeight:"500"}} onClick={deleteNotify}>Delete</button>
                           <ToastContainer style={{marginBottom:"15px"}}/>
                       </div> 
                </div>
                </div>
            }{
              <div className="other-creation-info">
              <div className="other-creation-left">
                    <ReadNow story={postId}/>
                    {postId && <ReadNext postId={postId}/>}
              </div>
              <div className="other-creation-right">
                       <AboutAuthor user={user}/>
                       <Review brate={star} postId={postId}/>
              </div>
             </div>
            }
            
         </div>
    )
}

export default OtherCreationInfo;