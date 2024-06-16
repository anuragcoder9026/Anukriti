import { useState, } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import '../CSS/setting.css'
import SettingProfile from "./SettingProfile";
import SettingNotify from "./SettingNotify";
import SettingPassword from "./SettingPassword";
import axios from "axios";
import { useNavigate ,} from 'react-router-dom';
import { afterSignAction } from "../store/aftersignSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
 function Setting(){
    const dispatch=useDispatch();
    const [selectedSpan, setSelectedSpan] = useState('Profile');
    const handleClick = (spanElement) => {
        setSelectedSpan(spanElement);
      };

      const navigate = useNavigate(); 
      const handleSignOut = async (e) => {
        e.preventDefault();
        try { 
            const res = await axios.get('https://anukriti.onrender.com/api/users/logout',{
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true // Include this line to allow cookies
            });
            console.log(res);
            if (res.status === 200) {
                dispatch(afterSignAction.handleAfterSign(false));
                navigate(`/Anukriti/sign`);
            }
        } catch (err) {
            console.log(err);
        }
    };

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

   return(
         <div className="setting" style={{marginTop:"110px",width:"100%"}}>
          <div className="setting-top" style={{display:"flex",justifyContent:"space-between"}}>
            <span style={{marginLeft:"10%",borderLeft:"3px solid red",paddingLeft:"15px",paddingTop:"8px",fontWeight:"bold"}}>Setting</span>
            <button style={{border:"none",marginRight:"10%",padding:"8px 15px",color:"red",fontWeight:"500",cursor:"pointer",borderRadius:"4px"}} onClick={handleSignOut}><BiLogOutCircle style={{marginRight:"8px",fontSize:"20px"}}/>Sign Out</button>
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