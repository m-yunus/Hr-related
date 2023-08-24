import  { useState } from "react";

import "./parityguideline.css";
import TopNav from "../../../layout/TopNav/TopNav";

const ParityGuideline = ({ onNext, onBack, currentStep,setPlandataValues }) => {
  const [preferredParityUnit, setPreferredParityUnit] = useState("Compa-ratio");
  const [enableMeritGuidelines, setEnableMeritGuidelines] = useState(false);
  const [supervisorRecommendationValidation, setSupervisorRecommendationValidation] = useState("yes");

  const handleContinue = () => {
   
    setPlandataValues((prevdata)=>({
      ...prevdata,
      parity:preferredParityUnit,
      merit_guidline:enableMeritGuidelines,
      supervisor_validation:supervisorRecommendationValidation,
    }))
    // You can pass the parityGuidelineData to the parent component or perform necessary actions here

    onNext();
  };

  return (
    <>
   <TopNav tabActive={"plan"} activeStatus={"Prorations"} firstStatusNumber={"3"} secondStatusNumber={"4"} thirdStatusNumber={"5"} firstStatus={"Prorations"} secondStatus={"Parity&Guideline"} thirdStatus ={"Split&matrix"}/>
     <div className="cyclewrapper">
    <div className="cycle">
      <div className="heading-container">
        <h4>Parity Measures</h4>

      </div>
      <div className="cyclecontainer">
        <h5>What is your preferred unit for understanding parity?</h5>
        <div className="radiobuttons">
        <label>
          <input
            type="radio"
            value="Compa-ratio"
            checked={preferredParityUnit === "Compa-ratio"}
            onChange={() => setPreferredParityUnit("Compa-ratio")}
          />
          Compa-ratio
        </label>
        <label>
          <input
            type="radio"
            value="Range-penetration"
            checked={preferredParityUnit === "Range-penetration"}
            onChange={() => setPreferredParityUnit("Range-penetration")}
          />
          Range-penetration
        </label>
        <label>
          <input
            type="radio"
            value="RAG"
            checked={preferredParityUnit === "RAG"}
            onChange={() => setPreferredParityUnit("RAG")}
          />
          RAG
        </label>
        <label>
          <input
            type="radio"
            value="Quartiles"
            checked={preferredParityUnit === "Quartiles"}
            onChange={() => setPreferredParityUnit("Quartiles")}
          />
          Quartiles
        </label>
        <label>
          <input
            type="radio"
            value="Percentiles"
            checked={preferredParityUnit === "Percentiles"}
            onChange={() => setPreferredParityUnit("Percentiles")}
          />
          Percentiles
        </label>
        <label>
          <input
            type="radio"
            value="Compa-zone"
            checked={preferredParityUnit === "Compa-zone"}
            onChange={() => setPreferredParityUnit("Compa-zone")}
          />
          Compa-zone
        </label>
        </div>
      </div>

      <hr />

      <div className="heading-container">
        <h4>Merit Guidelines</h4>
      
      </div>
      <div className="cyclecontainer">
        <h5>Do you want to enable merit guidelines?</h5>
       <div className="radiobuttons">
       <label>
          <input
            type="radio"
            value="true"
            checked={enableMeritGuidelines}
            onChange={() => setEnableMeritGuidelines(true)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="false"
            checked={!enableMeritGuidelines }
            onChange={() => setEnableMeritGuidelines(false)}
          />
          No
        </label>

        
       </div>
   
      </div>

      <div className="cyclecontainer">
        <h5>Validation for supervisor Recommendation</h5>
        <div className="radiobuttons">
        <label>
          <input
            type="radio"
            value="yes"
            checked={supervisorRecommendationValidation === "yes"}
            onChange={() => setSupervisorRecommendationValidation("yes")}
          />
          Recommendation is allowed within guidelines only
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={supervisorRecommendationValidation === "no"}
            onChange={() => setSupervisorRecommendationValidation("no")}
          />
          Recommendation is allowed above the guidelines with a justification
        </label>

        </div>
       
      </div>
      </div>
      </div>
      <div className="button-container">
        {currentStep > 0 && <button onClick={onBack} className="back_button">Back</button>}
        <button onClick={handleContinue} className="continue_button">Continue</button>
      </div>
     
    </>
  );
};

export default ParityGuideline;
