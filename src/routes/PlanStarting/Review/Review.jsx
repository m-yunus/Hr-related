import { FaDownload } from "react-icons/fa"
import TopNav from "../../../layout/TopNav/TopNav"
import { AiFillMessage } from "react-icons/ai"
import "./Review.css"
import { useDataContext } from "../../../Context/Context"

const Review = ({ onNext, onBack, currentStep ,setPlandataValues}) => {
  const {setProgressvalue}=useDataContext()
  const handleContinue = () => {
    // Move to the next step
    setProgressvalue(prevdata=>prevdata+1);
    onNext();
  }
  return (
    <>
     <TopNav tabActive={"plan"} activeStatus={"Bonus&IncentivesSchemes"} firstStatusNumber={"10"} secondStatusNumber={"11"} thirdStatusNumber={"12"} firstStatus={"Bonus&IncentivesSchemes"} secondStatus={"Review"} thirdStatus ={"Dataupload"}/>
     <div className="cyclewrapper">
        <div className="cycle">
          <div className="headerplan">
          <h4>Merit Compensation 2021-22</h4>
       
          <div className="iconsheader">
            <FaDownload style={{color:"grey"}}/>
            <AiFillMessage style={{color:"grey"}}/>
          </div>
          </div>
          <hr />
        <div className="contentplan">
          <h4>Currency</h4>
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

export default Review