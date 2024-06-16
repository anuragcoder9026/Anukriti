
import '../CSS/publish.css'
import { ImCross } from "react-icons/im";
import coverImg from '../assets/publish.jpg'
import { FaCamera } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import {useEffect, useRef, useState } from 'react';
import { IoMdSend } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import axios from "axios";
function Publish (){
    const [defaultPost,setDefaultPost]=useState(null)
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
        const getPostInfo = async () => {
            if(queryPost){
                try {
                    const res = await axios.get('https://anukriti.onrender.com/api/posts/content-info', {
                      params: {id:queryPost},
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      withCredentials: true // Include this line to allow cookies
                    });
                    if (res.status === 200) {
                      setDefaultPost(res.data);
                    }
                  
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
            } 
          };
        authenticate(); 
        getPostInfo();
    }, []);


    const [genreList,setGenreList]=useState([['action & adventure',false],['biography',false],['children',false],['creative',false], ['non-fiction',false],['crime',false],['detective',false],['drama',false],['fantasy',false],['historical',false],['horror',false],['humour',false],['life',false],['motivational',false],['murder mystery',false],
    ['mythology',false],['religion',false],['romance',false],['satire',false],['science fiction',false],['short story',false],['social',false],['thriller',false],['tragedy',false],['travel',false],['women',false],['young adult',false]
   ]);
const navigate=useNavigate();
const location=useLocation();
const searchParams = new URLSearchParams(location.search);
const queryDraft =searchParams.get('draft');
const queryPost= searchParams.get('post');
console.log("querpost draft:",queryDraft);
//post
const contentList=useSelector(store=>store.contentArray); 
const title=useRef(null);
const summary=useRef(null);
const createSeries=useRef(null);
  const [postImage,setPostImage]=useState(null);

  const publishNotify=async(e)=>{
    e.preventDefault();
    const categoryList=[];
    genreList.map((item,index)=>{if(genreList[index][1]) categoryList.push(genreList[index][0]);})
    const postData={
        postId:queryPost,
        title:title.current.value,
        content:contentList,
        seriesTitle:series,
        summary:summary.current.value,
        categories:categoryList,
        coverImage:postImage ? postImage : defaultPost.coverImage,
    }
    console.log(postData);
    // const jsonPostData = JSON.stringify(postData); 
    // console.log(jsonPostData);
    try {
    const res = await axios.post('https://anukriti.onrender.com/api/posts/publish-post', postData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true // Include this line to allow cookies
    });
    console.log(res);
    if(res.status===200){
        toast.success("Published Succesfully !",{position:"bottom-center",theme:"dark"})
    }
   } catch (error) {
    console.log(error);
   }

}

//post
//content image
const [coverImage, setCoverImage] = useState({ url: null, name: '' });
  useEffect(() => {
      return () => {
          // Cleanup URLs when component unmounts or image changes
          if (coverImage.url) URL.revokeObjectURL(coverImage.url);
      };
  }, [coverImage]);

  const handleFileChange = (event, imageType) => {
      const file = event.target.files[0]; // Get the first selected file
      if (file) {
          const url = URL.createObjectURL(file);
          const name = file.name;

          if (imageType === 'cover') {
              if (coverImage.url) URL.revokeObjectURL(coverImage.url); // Cleanup previous URL
              setCoverImage({ url, name });
              setPostImage(file);
          } 
      }
  };

//content image
const [post,setPost]=useState(null);

const saveNotify=async(e)=>{ 
    e.preventDefault();
    const draftData={
       draftId:queryDraft,
       title:queryDraft?`Creation- ${new Date().toLocaleDateString()}`:`New Draft- ${new Date().toLocaleDateString()}`,
       atitle:title.current.value,
       content:contentList,
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
       }
      } catch (error) {
       console.log(error);
      }
    }

    const[dropdown,setDropdown]=useState(false);
    const handleDropdown=()=>{setDropdown(!dropdown)};

    const [series,setSeries]=useState('Not a Series');
    const handleSetSeries=(e)=>{
        e.target.style.backgroundColor="rgb(235 231 231";
        setTimeout(function() {
            setSeries(e.target.innerText);
            setDropdown(false);  
            if(e.target.innerText==='Not a Series') setShowCategory(true);
            else setShowCategory(false);
        }, 200);
    };
    const handleCreateSeries=()=>{
        setSeries(createSeries.current.value)
        setDropdown(!dropdown)
    };
    const [showCategory,setShowCategory]=useState(true);
    const handleGenreClick=(e)=>{
        const newgenreList=[...genreList];
        newgenreList.map((item,index)=>{
            if(e.target.innerText===item[0]) {
                newgenreList[index][1]=!genreList[index][1];
                if(newgenreList[index][1]){
                    e.target.style.border="1px solid rgba(5,105,116,.38)";
                    e.target.style.backgroundColor="#e6f0f1";
                    e.target.style.color="#056974";
                    console.log(e.target.innerText);
                    
                }
                else{
                    e.target.style.border="1px solid rgba(0,0,0,0.125)";
                    e.target.style.backgroundColor="#fff";
                    e.target.style.color="#666666";
                }
            }
         })
         setGenreList(newgenreList)
        };
    const ownCategory=useRef(null);    
    const handleAddOwnCategory=()=>{
        const ownCatg=[ownCategory.current.value,false];
        setGenreList((state)=>[...state,ownCatg])
    }    
const [seriesTitles,setSeriesTitles]=useState(null);
useEffect( ()=>{
    const getSeriesTitle=async()=>{
    try {
        const res = await axios.get('https://anukriti.onrender.com/api/posts/get-series-title', {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true // Include this line to allow cookies
        });
        if(res.status===200){
            setSeriesTitles(res.data);
        }
       } catch (error) {
        console.log(error);
       }
    }
    getSeriesTitle();
},[]);
const handleGoBack = () => {
    navigate(-1); 
    setTimeout(() => {
      window.location.reload();
    }, 10);
  };
console.log("series:",seriesTitles);
    return(
         <div className="publish">
            <div className="go-back" style={{margin:"10px auto",height:"40px",display:"flex",justifyContent:"flex-end"}}>
                
            <ImCross style={{marginRight:"20px",marginTop:"12px"}} onClick={handleGoBack}/>
            </div>
            <div className="img-title-summary">
                 <div className="cover-img">
                      <p style={{marginBottom:"8px"}}>Add Cover Image</p>
                      <div className="add-cover-img" style={{width:"190px",height:"300px"}}>
                        <img src={coverImage.url ||defaultPost?.coverImage|| coverImg} alt="" srcset="" style={{width:"100%",height:"100%"}}/>   
                         <span style={{position:"absolute", backgroundColor:"white",padding:"1px 9px",marginBottom:"0.5px"}}>
                         <input type="file" id="file-input-cover"  style={{display:"none"}} onChange={(e) => handleFileChange(e, 'cover')}/>
                         <label htmlFor="file-input-cover" style={{cursor:"pointer"}}>
                         <FaCamera style={{fontSize:"18px"}}/>  
                        </label>
                        </span>   
                      </div>
                 </div>
                 <div className="title-summary">
                        <p style={{marginBottom:"8px"}}>Add Title</p>
                        <input ref={title} type="text" name="title" id=""  placeholder="Enter Title here" style={{border:"none",width:"100%",padding:"10px",borderRadius:"4px",marginBottom:"35px",fontSize:"14px"}}  defaultValue={defaultPost?.title}/>
                        <p style={{marginBottom:"8px"}}>Add Summary</p>
                        <textarea ref={summary} type="text" name="title" id="" placeholder="Enter Summary here" style={{border:"none",width:"100%",padding:"10px",borderRadius:"4px",height:"150px",maxHeight:"150px",minHeight:"150px",fontSize:"14px"}} defaultValue={defaultPost?.summary}/>
                        {
                            !queryPost &&
                            <>
                                <p style={{marginBottom:"2px",marginTop:"15px"}}>Series</p>
                        <div class="series-dropdown-btn" style={{display:"flex",padding:"6px 8px",backgroundColor:"#d3d1d1"}}>
                          <p style={{width:"92%",marginBottom:"0px",fontWeight:"500"}}>{series}</p><IoMdArrowDropdown style={{marginTop:"6px",cursor:"pointer"}} onClick={handleDropdown}/>
                        </div>
                        <div className="drop">
                        {
                            dropdown && 
                            <div className="series-dropdown">
                               <p style={{color:"#21259",marginBottom:"6px",fontSize:"15px",fontWeight:"500"}}>Create Series</p>
                               <input ref={createSeries} type="text" name="series" id="" placeholder="Type Here" style={{border:"none",width:"80%",padding:"10px",borderRadius:"4px",marginBottom:"0px",fontSize:"14px",color:"#666",fontWeight:"500",backgroundColor:"#f4f4f4"}}/>
                               <IoMdSend style={{fontSize:"30px",marginLeft:"12px"}} onClick={handleCreateSeries}/>
                               <hr />
                               <p style={{color:"#21259",marginBottom:"6px",marginTop:"6px",fontSize:"15px",fontWeight:"500",padding:"10px",cursor:"pointer"}} onClick={handleSetSeries}>Not a Series</p>
                               <hr />
                               {
                                seriesTitles?.map((item,index)=><><p style={{color:"#21259",marginBottom:"3px",marginTop:"3px",fontSize:"15px",fontWeight:"500",padding:"10px",cursor:"pointer"}} onClick={handleSetSeries}>{item.title}</p><hr/></>)
                               }
                               
                            </div>
                        }
                        </div>
                            </>
                        }
                       
                       
                       

                 </div>

            </div>
            {
                showCategory &&   !queryPost &&
                <div className="category-list">
                <p style={{fontWeight:"500",marginBottom:"4px"}}>Categories</p>
                <div className="all-category">
                <div className="genre-list" style={{display:"flex",flexWrap:"wrap"}}>
                     {genreList.map((genre,index)=>(
                     <button className="genreBtn" onClick={handleGenreClick}>{genre[0]}</button>))}
                </div>
                </div>  
            </div>

            }
            
            <div className="own-category">
                {
                    showCategory &&  !queryPost &&
                    <>
                    <p style={{color:"#666",fontSize:"15px",marginBottom:"6px",fontWeight:"500"}}>Add Your Own Category</p>
                <input ref={ownCategory} type="text" name="OwnCategory" id="" placeholder="Type Here" style={{border:"none",padding:"10px",borderRadius:"4px",marginBottom:"35px",fontSize:"14px",color:"#666",fontWeight:"500"}}/>
                <IoMdSend style={{fontSize:"30px",marginLeft:"12px"}} onClick={handleAddOwnCategory}/>
                    </>
                    
                }
                
                <div className="privacy-policy">
                <input type="checkbox" name="privacy" id="" style={{width:"18px",height:"20px"}}/>
                <span style={{color:"#666",fontSize:"14px",marginLeft:"5px",position:"relative",bottom:"4px",fontWeight:"500"}}>I accept Copyright policy and term of Services</span>
                </div>

                <div className="publish-submit" style={{marginTop:"20px"}}>
                    <button type="submit" style={{border:"none",backgroundColor:"#d32f2f",fontWeight:"700",padding:"8px 16px",fontSize:"14px",cursor:"pointer",color:"#fff",borderRadius:"3px",marginRight:"20px"}} onClick={publishNotify}>
                        PUBLISH
                    </button>
                    <button type="button" style={{border:"1px solid #d32f2f",backgroundColor:"#fff",fontWeight:"700",padding:"9px 27px",fontSize:"11px",cursor:"pointer",color:"#d32f2f",borderRadius:"3px"}} onClick={saveNotify}>
                        SAVE
                    </button>
                </div>
            </div>
            <ToastContainer style={{marginBottom:"20px"}}/>
         </div>
    )
}

export default Publish;