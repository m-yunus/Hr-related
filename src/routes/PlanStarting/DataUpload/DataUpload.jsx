import TopNav from "../../../layout/TopNav/TopNav"
import "./DataUpload.css"

const DataUpload = ({ onNext, onBack, currentStep }) => {
    const handleContinue=()=>{
        onNext()
    }
  return (
    <>
    <TopNav tabActive={"plan"} activeStatus={"Bonus&Incentives"} firstStatusNumber={"9"} secondStatusNumber={"10"} thirdStatusNumber={"11"} firstStatus={"Bonus&Incentives"} secondStatus={"Bonus&IncentivesScheme"} thirdStatus ={"Review"}/>
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
        <button>Upload</button>
        </div>
         </div>
         <div className="button-container">
       {currentStep > 0 && <button onClick={onBack} className="back_button">Back</button>}
       <button onClick={handleContinue} className="continue_button">Continue</button>
     </div>
         </div>
   </>
  )
}

export default DataUpload