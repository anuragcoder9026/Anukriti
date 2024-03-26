import { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import '../CSS/setting.css'
import SettingProfile from "./SettingProfile";
import SettingNotify from "./SettingNotify";
import SettingPassword from "./SettingPassword";
 function Setting(){

    const [selectedSpan, setSelectedSpan] = useState('Profile');
    const handleClick = (spanElement) => {
        setSelectedSpan(spanElement);
      };
   return(
         <div className="setting" style={{marginTop:"110px",width:"100%"}}>
          <div className="setting-top" style={{display:"flex",justifyContent:"space-between"}}>
            <span style={{marginLeft:"10%",borderLeft:"3px solid red",paddingLeft:"15px",paddingTop:"8px",fontWeight:"bold"}}>Setting</span>
            <button style={{border:"none",marginRight:"10%",padding:"8px 15px",color:"red",fontWeight:"500",cursor:"pointer",borderRadius:"4px"}}><BiLogOutCircle style={{marginRight:"8px",fontSize:"20px"}}/>Sign Out</button>
          </div>
           
          <div className="setting-info">
            <span class="setting-info-ele" style={{color: selectedSpan === 'Profile' ? 'red' : 'black',borderBottom:selectedSpan === 'Profile' ? '2px solid red': 'none'}} onClick={() => handleClick('Profile')}>Profile</span>
            <span class="setting-info-ele" style={{color: selectedSpan === 'Notification' ? 'red' : 'black',borderBottom:selectedSpan === 'Notification' ? '2px solid red': 'none'}} onClick={() => handleClick('Notification')}>Notification</span>
            <span class="setting-info-ele" style={{color: selectedSpan === 'Update Password' ? 'red' : 'black',borderBottom:selectedSpan === 'Update Password' ? '2px solid red': 'none'}} onClick={() => handleClick('Update Password')}>Update Password</span>
        </div>

        {
            (selectedSpan==='Profile' &&  <SettingProfile/>) || (selectedSpan==='Notification' && <SettingNotify/>) || (selectedSpan==='Update Password' && <SettingPassword/>)
        }
         </div>

   )
}

export default  Setting;