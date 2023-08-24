import  { useState } from "react";
import "./promotion.css";
import TopNav from "../../../layout/TopNav/TopNav";

const Promotion = ({ onNext, onBack, currentStep ,setPlandataValues}) => {
  const [enablePromotionRecommendations, setEnablePromotionRecommendations] = useState("yes");

  const handleContinue = () => {
  
    setPlandataValues((prevdata)=>({
      ...prevdata,
      enable_recommendation:enablePromotionRecommendations,
    }))

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
            value="yes"
            checked={enablePromotionRecommendations === "yes"}
            onChange={() => setEnablePromotionRecommendations("yes")}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={enablePromotionRecommendations === "no"}
            onChange={() => setEnablePromotionRecommendations("no")}
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
