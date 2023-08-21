import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./parityguideline.css";

const ParityGuideline = ({ onNext, onBack, currentStep,setPlandataValues }) => {
  const [preferredParityUnit, setPreferredParityUnit] = useState("");
  const [enableMeritGuidelines, setEnableMeritGuidelines] = useState("");
  const [supervisorRecommendationValidation, setSupervisorRecommendationValidation] = useState("");

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
      <div className="heading-container">
        <h4>Parity Measures</h4>
        <div className="underline-grey"></div>
      </div>
      <div className="componentradios">
        <h5>What is your preferred unit for understanding parity?</h5>
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

      <hr />

      <div className="heading-container">
        <h4>Merit Guidelines</h4>
        <div className="underline-grey"></div>
      </div>
      <div className="componentradios">
        <h5>Do you want to enable merit guidelines?</h5>
        <label>
          <input
            type="radio"
            value="yes"
            checked={enableMeritGuidelines === "yes"}
            onChange={() => setEnableMeritGuidelines("yes")}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={enableMeritGuidelines === "no"}
            onChange={() => setEnableMeritGuidelines("no")}
          />
          No
        </label>
      </div>

      <div className="componentradios">
        <h5>Validation for supervisor Recommendation</h5>
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

      <div className="button-container">
        {currentStep > 0 && <button onClick={onBack}>Back</button>}
        <button onClick={handleContinue}>Continue</button>
      </div>
    </>
  );
};

export default ParityGuideline;
