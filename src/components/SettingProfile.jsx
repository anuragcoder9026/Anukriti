

function SettingProfile(){
    return(
        <form class="row g-3" style={{width:"75%",marginLeft:"10.5%",marginTop:"20px"}}>
        <div class="col-md-6">
          <label for="validationDefault01" class="form-label">First name *</label>
          <input type="text" class="form-control" id="validationDefault01"  required/>
        </div>
        <div class="col-md-6">
          <label for="validationDefault02" class="form-label">Last name</label>
          <input type="text" class="form-control" id="validationDefault02"  required/>
        </div>
        <div class="col-md-6">
          <label for="validationDefaultUsername" class="form-label">Anukriti-Name</label>
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2"></span>
            <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationDefault04" class="form-label">Your Favourities</label>
          <select class="form-select" id="validationDefault04" required>
            <option selected disabled value="">choose tour Favourities</option>
            <option>Story</option>
            <option>Poem</option>
            <option>Shayari</option>
            <option>Essay</option>
          </select>
        </div>
        <div class="col-md-12" style={{marginBottom:"80px"}}>
  <label for="validationDefault05"  class="form-label">Summary( Optional )</label>
  <textarea class="form-control summary" placeholder="My Name is Anurag Singh" type="text" id="validationDefault05"></textarea>
</div>
<div class="col-md-6">
          <label for="validationDefault06" class="form-label">Email</label>
          <input type="email" class="form-control" id="validationDefault06"  required/>
    </div>
    <div class="col-md-6">
          <label for="validationDefault07" class="form-label">Password</label>
          <input type="password" class="form-control" id="validationDefault07"  required/>
    </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-danger" type="submit">Save Changes</button>
        </div>
      </form>
    )
}

export default SettingProfile;