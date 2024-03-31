

function GenreBtn({category,clicked}){

    return(
           <button style={{
               border:clicked?"1px solid rgba(5,105,116,.38)":"1px solid rgba(0,0,0,0.125)",
               borderRadius:"15px",
               backgroundColor:clicked?"#e6f0f1":"#fff",
               margin:"0px 8px 8px 0px",
               padding:"4px 10px",
               color:clicked?"#056974":"#666666",
               fontSize:"15px",
               cursor:"pointer"
           }}>
             {category}
           </button>
    )
}

export default GenreBtn;