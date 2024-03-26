


function SettingPassword(){
    return(
        <form class="row g-3" style={{width:"75%",marginLeft:"10.5%",marginTop:"20px"}}>
        <div class="col-md-12 " >
          <label for="validationDefault01" class="form-label">Current Password *</label>
          <input type="password" class="form-control password" id="validationDefault01" required/>
        </div>

        <div class="col-md-6">
          <label for="validationDefault02" class="form-label">New Password *</label>
          <input type="password" class="form-control" id="validationDefault02"  required/>
        </div>

        <div class="col-md-6">
          <label for="validationDefault02" class="form-label">Confirm Password *</label>
          <input type="password" class="form-control" id="validationDefault02"  required/>
        </div>
      
        <div class="col-12">
          <button class="btn btn-danger" type="submit">Save Changes</button>
        </div>
      </form>
    )
}

export default SettingPassword;