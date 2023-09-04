import React, { useRef, useState } from "react";
import TopNav from "../../../layout/TopNav/TopNav";
import "./DataUpload.css";
import { BaseUrl } from "../../../ApiService/ApiService";
import axios from "axios";
import { useDataContext } from "../../../Context/Context";

const DataUpload = ({ onNext, onBack, currentStep }) => {
  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null); // State to hold the uploaded file
  const {setProgressvalue}=useDataContext()
  const handleContinue = () => {
    setProgressvalue(prevdata=>prevdata+1);
    onNext();

  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Logic for handling the upload functionality
      setUploadedFile(file); // Save the uploaded file to state
    }

  };
  console.log(uploadedFile);
  const handleDownload = async () => {
    try {
      const headers = {
        "x-access-token": sessionStorage.getItem("token"),
      };
      const res = await axios.get(`${BaseUrl}/api/plan/template-file`, {
        headers,
        responseType: "blob", // Specify the response type as blob
      });

      // Create a URL for the blob and initiate download
      const blobURL = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = blobURL;
      link.setAttribute("download", "template.xlsx"); // Set the desired file name
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.log("Api error", error);
    }
  };
const handleSubmit=async(event)=>{
  event.preventDefault();
  const headers = {
    "x-access-token": sessionStorage.getItem("token"),
  };
  const formData = new FormData();
 
  formData.append("company_signature", uploadedFile);

  try {
    const response = await axios.post(
      `${BaseUrl}/api/plan/template-file`,
      formData,
      { headers }
    );
    console.log("uploaded succesfully", response.data);
    // Handle success (e.g., show success message)
  
  } catch (error) {
    console.error("API error:", error);
    // Handle error (e.g., show error message)

    
  }
}

  return (
    <>
      <TopNav
        tabActive={"plan"}
        activeStatus={"Review"}
        firstStatusNumber={"11"}
        secondStatusNumber={"12"}
        thirdStatusNumber={"13"}
        firstStatus={"Review"}
        secondStatus={"DataUpload"}
        thirdStatus={"Data correction"}
      />
      <div className="cyclewrapper">
        <div className="cycle">
          <div className="contentplan">
            <h4>Data Upload</h4>
          </div>
          <div className="datacontainer">
            <h5>Download the template</h5>
            <button onClick={handleDownload}>Download</button>
          </div>
          <div className="datacontainer">
            <h5>Upload the Edited Data File</h5>
            <button onClick={() => fileInputRef.current.click()}>Upload</button>
            <input
              type="file"
              accept=".xlsx,.csv"
              onChange={handleUpload}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
                <button onClick={handleSubmit()}>Submit</button>
          </div>
        </div>
        <div className="button-container">
          {currentStep > 0 && (
            <button onClick={onBack} className="back_button">
              Back
            </button>
          )}
          <button onClick={handleContinue} className="continue_button">
            Continue
          </button>
        </div>
      </div>
  
    </>
  );
};

export default DataUpload;
