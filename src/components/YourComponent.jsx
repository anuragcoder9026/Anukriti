import React from 'react';
import DOMPurify from 'dompurify';

const YourComponent = ({ htmlContent ,backColor,fontSiz,lineHigh}) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  return (
    <div style={{color:backColor ? '#2c3e50' :'white',fontSize:`${fontSiz}px`,lineHeight:lineHigh,width:"100%",textAlign:"left",paddingBottom:"35px",}} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
  );
};

export default YourComponent;
