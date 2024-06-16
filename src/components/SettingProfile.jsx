import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userDataAction } from "../store/userdataSlice";
import { useDispatch } from "react-redux";
function SettingProfile(){
  const dispatch=useDispatch();
  const userdata=useSelector(store=>store.userData);


  const user=useSelector(store=>store.userData);
  const firstName=useRef(null);
  const lastName=useRef(null);
  const userName=useRef(null);
  const favorities=useRef(null);
  const summary=useRef(null);
  const email=useRef(null);
  const phone=useRef(null);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const userInfo={
      firstName:firstName.current.value,
      lastName:lastName.current.value,
      username:userName.current.value,
      favourities:favorities.current.value,
      summary:summary.current.value,
      email:email.current.value,
      phone:phone.current.value
    }
    try {
      const res = await axios.put('https://anukriti.onrender.com/api/users/set-profile', userInfo, {
          headers: {
              'Content-Type': 'application/json'
          },
          withCredentials: true // Include this line to allow cookies
      });
      
      if(res.status===200){
          dispatch(userDataAction.handleUserData({...userdata,username:userName.current.value}));
          toast.success(res.data,{position:"bottom-center",theme:"dark"})
      }
     } catch (error) {
        toast.error(error.response.data,{position:"bottom-center",theme:"dark"})
      
     }
  }
    return(
        <form class="row g-3" style={{width:"75%",marginLeft:"10.5%",marginTop:"20px"}}>
        <div class="col-md-6">
          <label for="validationDefault01" class="form-label">First name *</label>
          <input type="text" class="form-control" id="validationDefault01" ref={firstName}  defaultValue={user?.firstName} />
        </div>
        <div class="col-md-6">
          <label for="validationDefault02" class="form-label"></label>
          <input type="text" class="form-control" id="validationDefault02" ref={lastName} defaultValue={user?.lastName}/>
        </div>
        <div class="col-md-6">
          <label for="validationDefaultUsername" class="form-label"></label>
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2"></span>
            <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" ref={userName} defaultValue={user?.username} required/>
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationDefault04" class="form-label">Your Favourities</label>
          <select class="form-select" id="validationDefault04" ref={favorities}>
            <option selected disabled value="">choose tour Favourities</option>
            <option>Story</option>
            <option>Poem</option>
            <option>Shayari</option>
            <option>Essay</option>
          </select>
        </div>
        <div class="col-md-12" style={{marginBottom:"80px"}}>
  <label for="validationDefault05"  class="form-label">Summary( Optional )</label>
  <textarea class="form-control summary" type="text" id="validationDefault05" ref={summary} defaultValue={user?.summary}></textarea>
</div>
<div class="col-md-6">
          <label for="validationDefault06" class="form-label">Email</label>
          <input type="email" class="form-control" id="validationDefault06" ref={email} defaultValue={user?.email} required/>
    </div>
    <div class="col-md-6">
          <label for="validationDefault07" class="form-label">Phone</label>
          <input type="tel" class="form-control" id="validationDefault07" ref={phone} defaultValue={user?.phone} />
    </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">You must agree before submitting.</div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-danger" type="submit" onClick={handleSubmit}>Save Changes</button>
        </div>
        <ToastContainer style={{marginBottom:"20px"}}/>
      </form>
    )
}

export default SettingProfile;