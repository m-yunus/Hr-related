import { useState } from "react";
import "./paygroups.css";

const PayGroups = ({ onNext, onBack, currentStep , setPlandataValues}) => {
  const [applyDifferentMeritRules, setApplyDifferentMeritRules] = useState("");
  const [payGroupBasis, setPayGroupBasis] = useState("");

  const handleContinue = () => {
    setPlandataValues((prevdata)=>({
      ...prevdata,
      paygroups:applyDifferentMeritRules,
      paygroups_name:payGroupBasis,
    }))
    // You can pass the payGroupsData to the parent component or perform necessary actions here

    onNext();
  };

  return (
    <div className="heading-container">
      <h4>Pay Groups</h4>
      <div className="underline-grey"></div>
      <div className="componentradios">
        <h5>Do you want to apply different merit rules for different employee groups?</h5>
        <label>
          <input
            type="radio"
            value="yes"
            checked={applyDifferentMeritRules === "yes"}
            onChange={() => setApplyDifferentMeritRules("yes")}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={applyDifferentMeritRules === "no"}
            onChange={() => setApplyDifferentMeritRules("no")}
          />
          No
        </label>
      </div>

      <div className="componentradios">
        <h5>What is the basis of pay group?</h5>
        <input
          type="text"
          placeholder="group criteria"
          value={payGroupBasis}
          onChange={(e) => setPayGroupBasis(e.target.value)}
        />
      </div>

      <div className="button-container">
        {currentStep > 0 && <button onClick={onBack}>Back</button>}
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default PayGroups;
