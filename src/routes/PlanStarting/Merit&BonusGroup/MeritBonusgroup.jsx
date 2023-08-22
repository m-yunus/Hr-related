import TopNav from "../../../layout/TopNav/TopNav"
import "./Merit&Bonusgroup.css"

const MeritBonusgroup = ({ onNext, onBack, currentStep,setPerformanceBased }) => {
  const handleContinue=()=>
  {
    onNext()
  }
  return (
    <>
    <TopNav tabActive={"plan"} activeStatus={"Bonus&Incentives"} firstStatusNumber={"9"} secondStatusNumber={"10"} thirdStatusNumber={"11"} firstStatus={"Bonus&Incentives"} secondStatus={"Bonus&IncentivesScheme"} thirdStatus ={"Review"}/>
    <div className="cyclewrapper">
       <div className="cycle">
      
     
       <div className="datacontainer">
        <h5>Merit Group</h5>
        <button>Create +</button>
        </div>
        <div className="datacontainer">
        <h5>Bonus Group</h5>
        <button>Create +</button>
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

export default MeritBonusgroup