import React, { useRef } from "react";
import TopNav from "../../../layout/TopNav/TopNav";
import "./DataUpload.css";

const DataUpload = ({ onNext, onBack, currentStep }) => {
  const fileInputRef = useRef(null);

  const handleContinue = () => {
    onNext();
  };

  const handleUploadButtonClick = () => {
    // Trigger the hidden file input when the button is clicked
    fileInputRef.current.click();
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Logic for handling the upload functionality
      // For example: sendFileToServer(file);
    }
  };

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
            <button>Download</button>
          </div>
          <div className="datacontainer">
            <h5>Upload the Edited Data File</h5>
            <button onClick={handleUploadButtonClick}>Upload</button>
            <input
              type="file"
              accept=".xlsx,.csv"
              onChange={handleUpload}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
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
