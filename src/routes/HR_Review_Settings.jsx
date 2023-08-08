

const HR_Review_Settings = () => {
  return (
    <>
     <div className="wrapper-right">
      <form action="">
      <div className="dash-right-top">
      
      <div className="pathname">
        <h3>
          <span style={{ color: "skyblue" }}>Personalize</span>{" "}
          <span>/ HR Review Settings</span>
        </h3>
      </div>
      <input type="submit" className="update-button" value="Update"/>
    
    </div>
      <div className="content-container">
    <div className="heading-container">
        <h4>Hr Review settings</h4>
        <div className="underline-grey"></div>
      </div>
     <ul className="Salary-inputbox-list salary-list">
        <li>
          <div className="radio-input-container">
            <label>
              <span>Do You Want to allow HR to override all?</span>
            </label>
            <div className="radio-button-group">
              <input
                type="radio"
                name="HROverride"
                value="yes"
                defaultChecked
              />{" "}
              Yes
              <input type="radio" name="HROverride" value="no" /> No
            </div>
          </div>
        </li>
        <li>
          <div className="radio-input-container">
            <label>
              <span>Is justification mandatory? </span>
            </label>
            <div className="radio-button-group" style={{ paddingLeft: "43px" }}>
              <input
                type="radio"
                name="justification"
                value="yes"
                defaultChecked
              />{" "}
              Yes
              <input type="radio" name="justification" value="no" /> No
            </div>
          </div>
        </li>
        <li>
          <div className="radio-input-container">
            <label>
              <span>Is Attachments mandatory? </span>
            </label>
            <div className="radio-button-group" style={{ paddingLeft: "43px" }}>
              <input
                type="radio"
                name="Attachments"
                value="yes"
                defaultChecked
              />{" "}
              Yes
              <input type="radio" name="Attachments" value="no" /> No
            </div>
          </div>
        </li>
        <li>
          <div className="radio-input-container">
            <label>
              <span>Edit on approval (HR) </span>
            </label>
            <div className="radio-button-group" style={{ paddingLeft: "43px" }}>
              <input
                type="radio"
                name="Attachments"
                value="yes"
                defaultChecked
              />{" "}
              Yes
              <input type="radio" name="Attachments" value="no" /> No
            </div>
          </div>
        </li>

        
      </ul>
      </div>
      </form>
      </div>
    </>
  )
}

export default HR_Review_Settings