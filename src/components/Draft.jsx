

export default function Draft(){
    let date=new Date().toLocaleDateString();
    return(
        <div className="draft d-flex flex-column justify-content-center align-items-center" style={{border:"1px solid #e9e9e9",width:"160px",height:"150px",boxShadow:"6px 6px 11px rgba(0, 0, 0, 0.2)",marginRight:"15px",minWidth:"150px"}}>
            <img src="https://static.vecteezy.com/system/resources/previews/020/611/709/original/single-continuous-line-drawing-of-hand-gesture-writing-on-an-open-note-book-to-write-business-draft-write-business-diary-concept-trendy-one-line-draw-graphic-design-illustration-vector.jpg" alt="" 
            style={{width:"80px",height:"80px",border:"1px solid gray", borderRadius:"50%"}}
            />
            <p style={{fontSize:"0.7rem" ,marginTop:"14px",marginBottom:"4px",fontWeight:"600"}}>
               New Draft- {date} 
            </p>
        </div>
    )
    
}