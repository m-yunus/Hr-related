import { useState } from "react";
import "./Prorations.css";

const Proration = ({ onNext, onBack, currentStep,setPlandataValues }) => {
  const [prorateIncrement, setProrateIncrement] = useState("");
  const [prorateIncrementUnit, setProrateIncrementUnit] = useState("");
  const [prorateOffCycle, setProrateOffCycle] = useState("");
  const [prorateOffCycleUnit, setProrateOffCycleUnit] = useState("");

  const handleContinue = () => {
 
    setPlandataValues((prevdata)=>({
      ...prevdata,
      prorate:prorateIncrement,
      prorate_unit:prorateIncrementUnit,
      off_cycle_prorate:prorateOffCycle,
      off_cycle_prorate_unit:prorateOffCycleUnit,
    }))
    
    // You can pass the prorationData to the parent component or perform necessary actions here

    onNext();
  };

  return (
    <>
      <div className="heading-container">
        <h4>ProRate</h4>
        <div className="underline-grey"></div>
      </div>
      <div className="componentradios">
        <h5>Do you want to pro-rate increment to service?</h5>
        <label>
          <input
            type="radio"
            value="yes"
            checked={prorateIncrement === "yes"}
            onChange={(e) => setProrateIncrement(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={prorateIncrement === "no"}
            onChange={(e) => setProrateIncrement(e.target.value)}
          />
          No
        </label>
      </div>

      <div className="componentradios">
        <h5>Please select the pro-ration unit:</h5>
        <label>
          <input
            type="radio"
            value="Monthly"
            checked={prorateIncrementUnit === "Monthly"}
            onChange={(e) => setProrateIncrementUnit(e.target.value)}
          />
          Monthly
        </label>
        {/* ... Repeat for other pro-ration units */}
      </div>

      <hr />

      <div className="heading-container">
        <h4>Off Cycle Pro Rate</h4>
        <div className="underline-grey"></div>
      </div>
      <div className="componentradios">
        <h5>Do you want to pro-rate off cycle increments?</h5>
        <label>
          <input
            type="radio"
            value="yes"
            checked={prorateOffCycle === "yes"}
            onChange={(e) => setProrateOffCycle(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={prorateOffCycle === "no"}
            onChange={(e) => setProrateOffCycle(e.target.value)}
          />
          No
        </label>
      </div>

      <div className="componentradios">
        <h5>Please select the pro-ration unit:</h5>
        <label>
          <input
            type="radio"
            value="Monthly"
            checked={prorateOffCycleUnit === "Monthly"}
            onChange={(e) => setProrateOffCycleUnit(e.target.value)}
          />
          Monthly
        </label>
        {/* ... Repeat for other pro-ration units */}
      </div>

      <div className="button-container">
        {currentStep > 0 && <button onClick={onBack}>Back</button>}
        <button onClick={handleContinue}>Continue</button>
      </div>
    </>
  );
};

export default Proration;
