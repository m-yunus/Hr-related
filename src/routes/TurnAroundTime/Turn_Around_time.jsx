

const Turn_Around_time = () => {
  return (
 <>
 
 <div className="wrapper-right">
      <form action="">
     
        <div className="dash-right-top">
      
          <div className="pathname">
            <h3>
              <span style={{ color: "skyblue" }}>Personalize</span>{" "}
              <span>/ Turn Around Time</span>
            </h3>
          </div>
          <input type="submit" className="update-button" value="Update"/>
        
        </div>
        <div className="content-container">
    <div className="heading-container">
        <h4>Turn Around Time</h4>
        <div className="underline-grey"></div>
      </div>

      <ul className="Culture-inputbox-list">
        <li>
          <h5>TAT for supervisors</h5>
        </li>
        <li>
        <input type="text" placeholder="Turn Around Time" />
        </li>
       
      </ul>
      </div>
      </form>
      </div>
 </>
  )
}

export default Turn_Around_time