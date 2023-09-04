import  { useState } from "react";
import "./promotion.css";
import TopNav from "../../../layout/TopNav/TopNav";
import { useDataContext } from "../../../Context/Context";

const Promotion = ({ onNext, onBack, currentStep ,setPlandataValues}) => {
  const [enablePromotionRecommendations, setEnablePromotionRecommendations] = useState(false);
  const {setProgressvalue}=useDataContext()
  const handleContinue = () => {
  
    setPlandataValues((prevdata)=>({
      ...prevdata,
      enable_recommendation:enablePromotionRecommendations,
    }))
    setProgressvalue(prevdata=>prevdata+1);
    // You can pass the promotionData to the parent component or perform necessary actions here

    onNext();
  };

  return (
    <>
       <TopNav tabActive={"plan"} activeStatus={"Lumpsum&Corrections"} firstStatusNumber={"7"} secondStatusNumber={"8"} thirdStatusNumber={"9"} firstStatus={"Lumpsum&Corrections"} secondStatus={"Promotions"} thirdStatus ={"Bonus&Incentives"}/>
    <div className="cyclewrapper">
    <div className="cycle">
    <div className="heading-container">
      <h4>Promotions</h4>
      
      <div className="cyclecontainer">
        <h5>Do you want to enable promotion recommendations?</h5>
        <div className="radiobuttons">
        <label>
          <input
            type="radio"
            value="true"
            checked={enablePromotionRecommendations }
            onChange={() => setEnablePromotionRecommendations(true)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="false"
            checked={!enablePromotionRecommendations }
            onChange={() => setEnablePromotionRecommendations(false)}
          />
          No
        </label>
        </div>
      </div>
      </div>
      </div>
      <div className="button-container">
        {currentStep > 0 && <button onClick={onBack} className="back_button">Back</button>}
        <button onClick={handleContinue} className="continue_button">Continue</button>
      </div>
    </div>
    </>
  );
};

export default Promotion;
