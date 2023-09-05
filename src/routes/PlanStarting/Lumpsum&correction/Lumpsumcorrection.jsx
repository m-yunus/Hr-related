import  { useState } from "react";
import "./lumpsum.css"
import TopNav from "../../../layout/TopNav/TopNav";
import { useDataContext } from "../../../Context/Context";

const Lumpsumcorrection = ({ onNext, onBack, currentStep ,setPlandataValues }) => {
  const [belowRangePreference, setBelowRangePreference] = useState("IgnoreRangeMax");
  const [aboveRangePreference, setAboveRangePreference] = useState("IncrementAndCorrection");
  const {setProgressvalue}=useDataContext()
  const handleContinue = () => {
    setPlandataValues((prevdata)=>({
      ...prevdata,
      pay_range_min:belowRangePreference,
      pay_range_max:aboveRangePreference,
    }))

    // You can pass the lumpsumCorrectionData to the parent component or perform necessary actions here

    onNext();
  };

  return (
    <>
       <TopNav tabActive={"plan"} activeStatus={"Paygroups"} firstStatusNumber={"6"} secondStatusNumber={"7"} thirdStatusNumber={"8"} firstStatus={"Paygroups"} secondStatus={"LumpSum&Corrections"} thirdStatus ={"Promotions"}/>
    <div className="cyclewrapper">
    <div className="cycle">
    <div className="heading-container">
      <h4>Lump Sum</h4>
    
      <div className="cyclecontainer">
        <h5>What among the following do you prefer when employee salary is below the range min?</h5>
        <div className="radiobuttons">
        <label>
          <input
            type="radio"
            value="IgnoreRangeMax"
            checked={belowRangePreference === "IgnoreRangeMax"}
            onChange={() => setBelowRangePreference("IgnoreRangeMax")}
          />
          Ignore range max, and provide increment
        </label>
        <label>
          <input
            type="radio"
            value="CapSalary"
            checked={belowRangePreference === "CapSalary"}
            onChange={() => setBelowRangePreference("CapSalary")}
          />
          Cap the salary up to range max, and remaining as lumpsum
        </label>
        <label>
          <input
            type="radio"
            value="PayIncrement"
            checked={belowRangePreference === "PayIncrement"}
            onChange={() => setBelowRangePreference("PayIncrement")}
          />
          Pay increment as lump sum
        </label>
        </div>
      </div>

      <hr />

      <div className="heading-container">
        <h4>Correction</h4>
       
      </div>
      <div className="cyclecontainer">
        <h5>What among the following do you prefer when employee salary is above the range max?</h5>
        <div className="radiobuttons">
        <label>
          <input
            type="radio"
            value="IgnoreRangeMin"
            checked={aboveRangePreference === "IgnoreRangeMin"}
            onChange={() => setAboveRangePreference("IgnoreRangeMin")}
          />
          Ignore the range min and provide increment on current salary
        </label>
        <label>
          <input
            type="radio"
            value="IncrementOnMin"
            checked={aboveRangePreference === "IncrementOnMin"}
            onChange={() => setAboveRangePreference("IncrementOnMin")}
          />
          Calculate increment on range minimum
        </label>
        <label>
          <input
            type="radio"
            value="IncrementAndCorrection"
            checked={aboveRangePreference === "IncrementAndCorrection"}
            onChange={() => setAboveRangePreference("IncrementAndCorrection")}
          />
          Calculate increment on current salary and if the new salary is not meeting range minimum provide a correction to meet range minimum
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

export default Lumpsumcorrection;
