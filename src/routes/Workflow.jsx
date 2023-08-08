

const Workflow = () => {
  return (
    <>
     <div className="wrapper-right">
      <form action="">
      <div className="dash-right-top">
      
      <div className="pathname">
        <h3>
          <span style={{ color: "skyblue" }}>Personalize</span>{" "}
          <span>/ Workflow</span>
        </h3>
      </div>
      <input type="submit" className="update-button" value="Update"/>
    
    </div>
      <div className="content-container">
      <div className="heading-container">
        <h4>WorkFlow</h4>
        <div className="underline-grey"></div>
      </div>

      <ul className="Salary-inputbox-list salary-list">
        <li><label>
              <span>How Many Levels Of approval required?</span>
            </label></li>
        <li>
          <div className="checkbox-input-container">
            
            <div className="checkbox-group">
              <input
                type="checkbox"
                name="approvalLevel"
                value="supervisor"
                checked
              />
              <span className="checkbox-label">Supervisor</span>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" name="approvalLevel" value="manager" />
              <span className="checkbox-label">Manager</span>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" name="approvalLevel" value="sub_hr" />
              <span className="checkbox-label">Sub HR</span>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" name="approvalLevel" value="hr" checked />
              <span className="checkbox-label">HR</span>
            </div>
          </div>
        </li>
      </ul>
      </div>
      </form>
      </div>
    
    </>
  );
};

export default Workflow;
