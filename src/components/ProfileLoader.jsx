import React from "react"
import ContentLoader from "react-content-loader"

const ProfileLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1500}
    height={550}
    viewBox="0 0 1500 550"
    backgroundColor="#dedede"
    foregroundColor="#f3f1f1"
    {...props}
    style={{marginTop:"90px",marginLeft:"150px"}}
  >
    <rect x="5" y="260" rx="9" ry="9" width="135" height="10" /> 
    <rect x="555" y="230" rx="3" ry="3" width="93" height="3" /> 
    <rect x="2" y="4" rx="0" ry="0" width="1200" height="154" /> 
    <circle cx="600" cy="158" r="66" /> 
    <rect x="555" y="240" rx="0" ry="0" width="94" height="10" /> 
    <rect x="5" y="245" rx="0" ry="0" width="149" height="10" /> 
    <rect x="10" y="315" rx="0" ry="0" width="109" height="178" /> 
    <rect x="135" y="315" rx="0" ry="0" width="109" height="178" /> 
    <rect x="260" y="315" rx="0" ry="0" width="109" height="178" /> 
    <rect x="385" y="315" rx="0" ry="0" width="109" height="178" />
    <rect x="510" y="315" rx="0" ry="0" width="109" height="178" />
    <rect x="625" y="315" rx="0" ry="0" width="109" height="178" />
    <rect x="750" y="315" rx="0" ry="0" width="109" height="178" />
    <rect x="875" y="315" rx="0" ry="0" width="109" height="178" />
    <rect x="900" y="315" rx="0" ry="0" width="109" height="178" />
    <rect x="1025" y="315" rx="0" ry="0" width="109" height="178" />
  </ContentLoader>
)

export default ProfileLoader;