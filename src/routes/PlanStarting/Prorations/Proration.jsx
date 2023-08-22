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
     <div className="cyclewrapper">
    <div className="cycle">
      <div className="heading-container">
        <h4>ProRate</h4>
       
      </div>
      <div className="cyclecontainer">

        <h5>Do you want to pro-rate increment to service?</h5>
        <div className="radiobuttons">
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
      </div>

      <div className="cyclecontainer">
        <h5>Please select the pro-ration unit:</h5>
        <div className="radiobuttons">
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
      </div>
      <hr />

      <div className="heading-container">
        <h4>Off Cycle Pro Rate</h4>
        
      </div>
      <div className="cyclecontainer">
        <h5>Do you want to pro-rate off cycle increments?</h5>
        <div className="radiobuttons">
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
      </div>

      <div className="cyclecontainer">
        <h5>Please select the pro-ration unit:</h5>
        <div className="radiobuttons">
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

export default Proration;
