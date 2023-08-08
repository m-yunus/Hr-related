import { useState } from "react";


const Company_Profile = () => {
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
          <span>/ Company Profile</span>
        </h3>
      </div>
      <input type="submit" className="update-button" value="Update"/>
    
    </div>
      <div className="content-container">
   <div className="heading-container">
        <h4>Company Profile</h4>
        <div className="underline-grey"></div>
      </div>

      <ul className="Culture-inputbox-list">
        <li>
          <input type="text" placeholder="Name" />
        </li>
        <li>
          <input type="text" placeholder="Industry" />
        </li>
        <li>
          <input type="text" placeholder="Phone" />
        </li>
        <li>
          <input type="text" placeholder="E-mail" />
        </li>
        <li>
          <input type="text" placeholder="Address" />
        </li>
        <li>
          <input type="text" placeholder="Company Profile" />
        </li>
        <li>
          <input type="text" placeholder="Approver name" />
        </li>
        <li>
          <input type="text" placeholder="Approver email" />
        </li>
        <li>
          <input type="text" placeholder="Replay email" />
        </li>
        
      </ul>
      <div className="heading-container" style={{ paddingTop: "1rem" }}>
        <h4>Rounding Rule</h4>
        <div className="underline-grey"></div>
      </div>

      <ul className=" company-profile-list">
        <li>
          <input type="text" placeholder="Select Percentage " />
        </li>
        <li>
          <input type="text" placeholder="Select Number" />
        </li>
        <li>
          <input type="text" placeholder="Select Currency" />
        </li>
        <li>  <div className="file-input-container">
          <label htmlFor="">Signature</label>
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
          <label htmlFor="">Company Logo</label>
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
          <label htmlFor="">HR Logo</label>
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
      </ul>
      </div>
   </form>
   </div>
   
   </>
  )
}

export default Company_Profile;