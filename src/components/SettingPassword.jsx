import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SettingPassword(){
    const password=useRef(null);
    const newPassword=useRef(null);
    const confirmPassword=useRef(null);
    const handleSaveChanges=async(e)=>{
      e.preventDefault();
      if(newPassword.current.value !== confirmPassword.current.value){
        toast.error("New Password and Confirm Password are not same",{position:"bottom-center",theme:"dark"})
      }
      else{
        const passwordInfo={
          password:password.current.value,
          newPassword:newPassword.current.value
        }
        try {
          const res = await axios.put('https://anukriti.onrender.com/api/users/update-password', passwordInfo, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true // Include this line to allow cookies
        });
        if(res.status===200){
            toast.success(res.data,{position:"bottom-center",theme:"dark"})
        }
        } catch (error) {
          toast.error(error.response.data,{position:"bottom-center",theme:"dark"})
        }
      }

    }
    return(
        <form class="row g-3" style={{width:"75%",marginLeft:"10.5%",marginTop:"20px"}}>
        <div class="col-md-12 " >
          <label for="validationDefault01" class="form-label">Current Password *</label>
          <input type="password" class="form-control password" id="validationDefault01" ref={password} required/>
        </div>

        <div class="col-md-6">
          <label for="validationDefault02" class="form-label">New Password *</label>
          <input type="password" class="form-control" id="validationDefault02" ref={newPassword}  required/>
        </div>

        <div class="col-md-6">
          <label for="validationDefault02" class="form-label">Confirm Password *</label>
          <input type="password" class="form-control" id="validationDefault02" ref={confirmPassword}  required/>
        </div>
      
        <div class="col-12">
          <button class="btn btn-danger" type="submit" onClick={handleSaveChanges}>Save Changes</button>
        </div>
        <ToastContainer style={{marginBottom:"20px"}}/>
      </form>
    )
}

export default SettingPassword;