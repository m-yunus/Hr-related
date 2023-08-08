import { useState } from "react";

const SuperVisor_page = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    console.log(event);
    setSelectedFile(event.target.files[0]);
  }
  return (
    <>
    <div className="wrapper-right">
      <form action="">
      <div className="dash-right-top">
      
      <div className="pathname">
        <h3>
          <span style={{ color: "skyblue" }}>Personalize</span>{" "}
          <span>/ Supervisor Page</span>
        </h3>
      </div>
      <input type="submit" className="update-button" value="Update"/>
    
    </div>
      <div className="content-container">
    <div className="heading-container">
        <h4>Supervisor Landing Page</h4>
        <div className="underline-grey"></div>
      </div>
      <ul className="supervisor-inputbox-list">
     
        <li>  <div className="file-input-container">
          <label htmlFor="">Load Policy</label>
        <input
          type="file"
          id="file-input"
          className="file-input"
          onChange={handleFileChange}
        />
        
        <label htmlFor="file-input" className="file-input-label">
          Choose File
        </label>
      </div>
      
      {selectedFile && (
        <div>
          <p>Selected file: {selectedFile.name}</p>
        </div>)}
      
      </li>
      
      <li>  <div className="file-input-container">
          <label htmlFor="">Load Learning Material</label>
        <input
          type="file"
          id="file-input"
          className="file-input"
          onChange={handleFileChange}
        />
        
        <label htmlFor="file-input" className="file-input-label">
          Choose File
        </label>
      </div>
      
      {selectedFile && (
        <div>
          <p>Selected file: {selectedFile.name}</p>
        </div>)}
      
      </li>
      <li>
          <input type="text" placeholder="paste Video Url" />
        </li>
      </ul>
      <div className="heading-container" style={{marginTop:"3rem"}}>
        <h4>Supervisor Recommendation Page</h4>
        <div className="underline-grey"></div>
      </div>
      <ul className="Salary-inputbox-list salary-list">
        <li>
          <div className="radio-input-container">
            <label>
              <span>Do You Want Attachment for supervisor?</span>
            </label>
            <div className="radio-button-group" style={{marginLeft:"8rem"}}>
              <input
                type="radio"
                name="salaryComponents"
                value="yes"
                defaultChecked
              />{" "}
              Yes
              <input type="radio" name="salaryComponents" value="no" /> No
            </div>
          </div>
        </li>
        <li>
          <div className="radio-input-container">
            <label>
              <span>Do You Want currency change button For supervisor? </span>
            </label>
            <div className="radio-button-group" style={{ paddingLeft: "43px" }}>
              <input
                type="radio"
                name="salaryComponents"
                value="yes"
                defaultChecked
              />{" "}
              Yes
              <input type="radio" name="salaryComponents" value="no" /> No
            </div>
          </div>
        </li>

       
      </ul>
      <div className="heading-container" style={{marginTop:"1rem"}}>
        <h4>chat for Supervisors</h4>
        <div className="underline-grey"></div>
      </div>
      <ul className="Salary-inputbox-list salary-list">
        <li>
          <div className="radio-input-container">
            <label>
              <span>Enable Chat</span>
            </label>
            <div className="radio-button-group" style={{marginLeft:"8rem"}}>
              <input
                type="radio"
                name="salaryComponents"
                value="yes"
                defaultChecked
              />{" "}
              Yes
              <input type="radio" name="salaryComponents" value="no" /> No
            </div>
          </div>
        </li>
        <li>
          <div className="radio-input-container">
            <label>
              <span>Do You Want Allow supervisors to access employee letters? </span>
            </label>
            <div className="radio-button-group" style={{ paddingLeft: "43px" }}>
              <input
                type="radio"
                name="salaryComponents"
                value="yes"
                defaultChecked
              />{" "}
              Yes
              <input type="radio" name="salaryComponents" value="no" /> No
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

export default SuperVisor_page