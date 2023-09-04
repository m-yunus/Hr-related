import { useState } from "react";
import "./Prorations.css";
import TopNav from "../../../layout/TopNav/TopNav";
import { useDataContext } from "../../../Context/Context";

const Proration = ({ onNext, onBack, currentStep,setPlandataValues }) => {
  const [prorateIncrement, setProrateIncrement] = useState(false);
  const [prorateIncrementUnit, setProrateIncrementUnit] = useState("Hourly");
  const [prorateOffCycle, setProrateOffCycle] = useState(false);
  const [prorateOffCycleUnit, setProrateOffCycleUnit] = useState("Monthly");
  const {setProgressvalue}=useDataContext();
  const handleContinue = () => {
 
    setPlandataValues((prevdata)=>({
      ...prevdata,
      prorate:prorateIncrement,
      prorate_unit:prorateIncrementUnit,
      off_cycle_prorate:prorateOffCycle,
      off_cycle_prorate_unit:prorateOffCycleUnit,
    }))
    
    // You can pass the prorationData to the parent component or perform necessary actions here
    setProgressvalue(prevdata=>prevdata+1);
    onNext();
  };

  return (
    <>
       <TopNav tabActive={"plan"} activeStatus={"Component&Currency"} firstStatusNumber={"2"} secondStatusNumber={"3"} thirdStatusNumber={"4"} firstStatus={"Component&Currency"} secondStatus={"Prorations"} thirdStatus ={"Parity&Guideline"}/>
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
            value="true"
            checked={prorateIncrement }
            onChange={() => setProrateIncrement(true)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="false"
            checked={!prorateIncrement}
            onChange={() => setProrateIncrement(false)}
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
        <label>
            <input
              type="radio"
              value="Weekly"
              checked={prorateIncrementUnit === "Weekly"}
              onChange={(e) => setProrateIncrementUnit(e.target.value)}
            />
            Weekly
          </label>
          <label>
            <input
              type="radio"
              value="Daily"
              checked={prorateIncrementUnit === "Daily"}
              onChange={(e) => setProrateIncrementUnit(e.target.value)}
            />
            Daily
          </label>
          <label>
            <input
              type="radio"
              value="Hourly"
              checked={prorateIncrementUnit === "Hourly"}
              onChange={(e) => setProrateIncrementUnit(e.target.value)}
            />
            Hourly
          </label>
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
            value="true"
            checked={prorateOffCycle }
            onChange={() => setProrateOffCycle(true)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="false"
            checked={!prorateOffCycle }
            onChange={() => setProrateOffCycle(false)}
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
        <label>
            <input
              type="radio"
              value="Weekly"
              checked={prorateOffCycleUnit === "Weekly"}
              onChange={(e) => setProrateOffCycleUnit(e.target.value)}
            />
            Weekly
          </label>
          <label>
            <input
              type="radio"
              value="Daily"
              checked={prorateOffCycleUnit === "Daily"}
              onChange={(e) => setProrateOffCycleUnit(e.target.value)}
            />
            Daily
          </label>
          <label>
            <input
              type="radio"
              value="Hourly"
              checked={prorateOffCycleUnit === "Hourly"}
              onChange={(e) => setProrateOffCycleUnit(e.target.value)}
            />
            Hourly
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

export default Proration;
