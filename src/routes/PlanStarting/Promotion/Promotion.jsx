import  { useState } from "react";
import "./promotion.css";

const Promotion = ({ onNext, onBack, currentStep ,setPlandataValues}) => {
  const [enablePromotionRecommendations, setEnablePromotionRecommendations] = useState("");

  const handleContinue = () => {
  
    setPlandataValues((prevdata)=>({
      ...prevdata,
      enable_recommendation:enablePromotionRecommendations,
    }))

    // You can pass the promotionData to the parent component or perform necessary actions here

    onNext();
  };

  return (
    <div className="heading-container">
      <h4>Promotions</h4>
      <div className="underline-grey"></div>
      <div className="componentradios">
        <h5>Do you want to enable promotion recommendations?</h5>
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
      <div className="button-container">
        {currentStep > 0 && <button onClick={onBack}>Back</button>}
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default Promotion;
