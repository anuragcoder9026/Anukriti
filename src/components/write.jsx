import JoditEditor from 'jodit-react';
import { useEffect, useRef, useState } from 'react';
import '../CSS/write.css';
import { RiDeleteBinLine } from "react-icons/ri";
import YourComponent from './YourComponent';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { contentAction } from '../store/contentSlice';
function Write() {
    const isAuthenticated=useSelector(store=>store.afterSign);
    const userData=useSelector(store=>store.userData);
    
    useEffect(() => {
        const authenticate = async () => {
            try {
                const response = await axios.get('https://anukriti.onrender.com/api/users/check-auth',{
                  withCredentials: true // Include cookies with the request  
              });
                if (response.status === 200) { 
              }
            } catch (error) {
                navigate('/Anukriti/sign')
            }
        };
        authenticate(); 
    }, []);
    
    const editor = useRef(null);
    const [content, setContent] = useState('');
    let date=new Date().toLocaleDateString();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const publishNotify=()=>{ 
       dispatch(contentAction.handleContentArray(content));
        toast.info("Saved Succesfully !",{
        position:"bottom-center",
        theme:"dark"
    })}

    const saveNotify=async(e)=>{ 
         e.preventDefault();
         console.log(content);
         const draftData={
            draftId:queryDraft,
            title:queryDraft?`Creation- ${new Date().toLocaleDateString()}`:`New Draft- ${new Date().toLocaleDateString()}`,
            atitle:null,
            content:content,
         }
         try {
            const res = await axios.post('https://anukriti.onrender.com/api/posts/save-draft', draftData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true // Include this line to allow cookies
            });
            console.log(res);
            if(res.status===200){
                toast.info("Saved Succesfully !",{
                    position:"bottom-center",
                    theme:"dark"
                })
            //   navigate('/Anukriti/create')
            }
           } catch (error) {
            console.log(error);
           }
         }
   

         const deleteNotify=async()=>{
            try {
              const res = await axios.delete(`https://anukriti.onrender.com/api/posts/delete-draft/${queryDraft}`, {
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
                navigate('/Anukriti/create')
              }
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
      }

    const location=useLocation();
    const searchParams = new URLSearchParams(location.search);
    const queryDraft =searchParams.get('draft');
    const queryPost= searchParams.get('post');
  

    const [post,setPost]=useState(null);
    useEffect(()=>{
      if(queryDraft){
        const getDraft = async () => {
            try {
                const res = await axios.get('https://anukriti.onrender.com/api/posts/get-draft', {
                  params: {draftId:queryDraft},
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  withCredentials: true // Include this line to allow cookies
                });
                if (res.status === 200) {
                    setContent(res.data.content);
                }
              
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          getDraft();
      }
      else if(queryPost){
        const getPostInfo = async () => {
            try {
                const res = await axios.get('https://anukriti.onrender.com/api/posts/content-info', {
                  params: {id:queryPost},
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  withCredentials: true // Include this line to allow cookies
                });
                if (res.status === 200) {
                  setContent(res.data.content);
                }
              
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          getPostInfo();
      }
    },[])
    
    return (
        <div className="text-editor" style={{marginTop: "120px"}}>
            <div class="write-head" style={{backgroundColor:"white"}}>
    <header class="row d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom " style={{marginRight:"10px",marginLeft:"10px"}}>
      
  <div class="col-sm-5 date" style={{fontWeight:"bold",textAlign:"center",paddingLeft:"10px"}}>New Draft- {date}</div>
  <div class="col-sm-7 text-end handle-text">
 <Link to={!queryDraft && !queryPost ?  `/Anukriti/publish/` : queryDraft ? `/Anukriti/publish/?draft=${queryDraft}` : `/Anukriti/publish/?post=${queryPost}` } style={{textDecoration:"none"}}>
  <button type="button" class="btn btn-danger "style={{marginLeft:"5px"}} onClick={publishNotify}>PUBLISH</button>
  </Link>
        <button type="button" class="btn btn-primary" style={{marginLeft:"5px"}} onClick={saveNotify}>Save</button>
        {queryDraft && <span onClick={deleteNotify}> <RiDeleteBinLine style={{marginLeft:"6px",fontSize:"40px",cursor:"pointer"}}/></span>}
</div>
    </header>
  </div>
            <JoditEditor
                ref={editor}
                value={content}
                // config={editorConfig} // Pass the configuration object here
                onChange={newContent => setContent(newContent)}
            />
            {/* <YourComponent htmlContent={content}/> */}
            <ToastContainer style={{marginBottom:"20px"}}/>
        </div>

    );
}

export default Write;
