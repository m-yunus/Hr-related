import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../ApiService/ApiService";

const Company_Profile = () => {
  const [signature, setSignature] = useState({});
  const [logo, setLogo] = useState({});
  const [hrLogo, setHrlogo] = useState({});
  const [companyformData, setFormData] = useState({
    company_name: "",
    company_address: "",
    company_industry: "",
    company_phone: "",
    company_email: "",
    company_profile: "",
    company_approver_name: "",
    company_approver_email: "",
    company_approver_reply_email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };
    const formData = new FormData();
    formData.append("company_name", companyformData.company_name);
    formData.append("company_address", companyformData.company_address);
    formData.append("company_industry", companyformData.company_industry);
    formData.append("company_phone", companyformData.company_phone);
    formData.append("company_email", companyformData.company_email);
    formData.append("company_profile", companyformData.company_profile);
    formData.append("company_approver_name", companyformData.company_approver_name);
    formData.append("company_approver_email", companyformData.company_approver_email);
    formData.append("company_approver_reply_email", companyformData.company_approver_reply_email);
    formData.append("company_signature", signature);
    formData.append("company_logo", logo);
    formData.append("company_hr_logo", hrLogo);
console.log(companyformData);
console.log("first",signature);
console.log("sec",logo);
console.log("hr",hrLogo);
console.log(formData)
    try {
      const response = await axios.post(
        `${BaseUrl}/api/personalize/company-profile`,
        formData,
        { headers }
      );
      console.log("succesfully:", response.data);
      // Handle success (e.g., show success message)
    } catch (error) {
      console.error("API error:", error);
      // Handle error (e.g., show error message)
    }
  };

  const handleFilesignature = (event) => {
    const signatureFile = event.target.files[0];
    setSignature(signatureFile);
  };

  const handleFilelogo = (event) => {
    const logoFile = event.target.files[0];
    setLogo(logoFile);
  };

  const handleFileHrlogo = (event) => {
    const hrlogoFile = event.target.files[0];
    setHrlogo(hrlogoFile);
  };

  return (
   <>
     <div className="wrapper-right">
      <form onSubmit={handleSubmit}>
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
          <input type="text" placeholder="Name" value={companyformData.company_name}  onChange={handleInputChange} name="company_name"/>
        </li>
        <li>
          <input type="text" placeholder="Industry" value={companyformData.company_industry} onChange={handleInputChange} name="company_industry" />
        </li>
        <li>
          <input type="text" placeholder="Phone" value={companyformData.company_phone} onChange={handleInputChange} name="company_phone" />
        </li>
        <li>
          <input type="text" placeholder="E-mail" value={companyformData.company_email} name="company_email" onChange={handleInputChange}/>
        </li>
        <li>
          <input type="text" placeholder="Address" value={companyformData.company_address} onChange={handleInputChange} name="company_address" />
        </li>
        <li>
          <input type="text" placeholder="Company Profile" value={companyformData.company_profile} name="company_profile" onChange={handleInputChange} />
        </li>
        <li>
          <input type="text" placeholder="Approver name" value={companyformData.company_approver_name} onChange={handleInputChange} name="company_approver_name"/>
        </li>
        <li>
          <input type="text" placeholder="Approver email" value={companyformData.company_approver_email} onChange={handleInputChange} name="company_approver_email" />
        </li>
        <li>
          <input type="text" placeholder="Replay email" value={companyformData.company_approver_reply_email}  onChange={handleInputChange} name="company_approver_reply_email"/>
        </li>
        
      </ul>
      

      <ul className="company-profile-list">
        <li>
          <div className="file-input-container">
            <label htmlFor="file-input-signature">Signature</label>
            <input
              type="file"
              id="file-input-signature"
              className="file-input"
              onChange={handleFilesignature}
            />
            <label htmlFor="file-input-signature" className="file-input-label">
              Choose File
            </label>
          </div>
          {signature && (
            <div>
              <p>Selected file: {signature.name}</p>
            </div>
          )}
        </li>
        <li>
          <div className="file-input-container">
            <label htmlFor="file-input-logo">Company Logo</label>
            <input
              type="file"
              id="file-input-logo"
              className="file-input"
              onChange={handleFilelogo}
            />
            <label htmlFor="file-input-logo" className="file-input-label">
              Choose File
            </label>
          </div>
          {logo && (
            <div>
              <p>Selected file: {logo.name}</p>
            </div>
          )}
        </li>
        <li>
          <div className="file-input-container">
            <label htmlFor="file-input-hrlogo">HR Logo</label>
            <input
              type="file"
              id="file-input-hrlogo"
              className="file-input"
              onChange={handleFileHrlogo}
            />
            <label htmlFor="file-input-hrlogo" className="file-input-label">
              Choose File
            </label>
          </div>
          {hrLogo && (
            <div>
              <p>Selected file: {hrLogo.name}</p>
            </div>
          )}
        </li>
      </ul>
      </div>
   </form>
   </div>
   
   </>
  )
}

export default Company_Profile;