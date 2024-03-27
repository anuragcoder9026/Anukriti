



function SettingNotify(){

      return(
        <form class="row g-3" style={{width:"75%",marginLeft:"10.5%",marginTop:"20px"}}>
       
        <div class="col-md-7 col-sm-12" style={{marginBottom:"10px"}}>
          <label for="validationDefault01" class="form-label">Anukriti Achievements</label>
          <select class="form-select" id="validationDefault01" required>
            <option selected disabled value="">choose duration</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Never</option>
          </select>
        </div>

        
        <div class="col-md-7 col-sm-12" style={{marginBottom:"10px"}}>
          <label for="validationDefault01" class="form-label">Anukriti Email-Following and Comments</label>
          <select class="form-select" id="validationDefault01" required >
            <option selected disabled value="">choose duration</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Never</option>
          </select>
        </div>
        <div className="content">Anukriti Content</div>
         <div class="form-check" style={{marginTop:"6px",marginLeft:"20px",}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
               <label class="form-check-label " for="flexCheckChecked" style={{fontWeight:"500"}}>
                Anukriti Review
                </label>
        </div>
        <div class="form-check" style={{marginTop:"3px",marginLeft:"20px",}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
               <label class="form-check-label " for="flexCheckChecked" style={{fontWeight:"500"}}>
               Anukriti Comment
                </label>
        </div>

        <div className="network" style={{marginTop:"20px"}}>Anukriti Network</div>
         <div class="form-check" style={{marginTop:"6px",marginLeft:"20px",}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
               <label class="form-check-label " for="flexCheckChecked" style={{fontWeight:"500"}}>
               New Anukriti Follower
                </label>
        </div>
        <div class="form-check" style={{marginTop:"3px",marginLeft:"20px",}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
               <label class="form-check-label " for="flexCheckChecked" style={{fontWeight:"500"}}>
               New Content by your Anukriti follower
                </label>
        </div>
        <div class="col-12" >
          <button class="btn btn-danger" type="submit">Save Changes</button>
        </div>
      </form>
      )
}

export default SettingNotify;