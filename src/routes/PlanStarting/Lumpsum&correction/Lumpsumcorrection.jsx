import  { useState } from "react";


const Lumpsumcorrection = ({ onNext, onBack, currentStep ,setPlandataValues }) => {
  const [belowRangePreference, setBelowRangePreference] = useState("");
  const [aboveRangePreference, setAboveRangePreference] = useState("");

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
    <div className="heading-container">
      <h4>Lump Sum</h4>
      <div className="underline-grey"></div>
      <div className="componentradios">
        <h5>What among the following do you prefer when employee salary is below the range min?</h5>
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

      <hr />

      <div className="heading-container">
        <h4>Correction</h4>
        <div className="underline-grey"></div>
      </div>
      <div className="componentradios">
        <h5>What among the following do you prefer when employee salary is above the range max?</h5>
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

      <div className="button-container">
        {currentStep > 0 && <button onClick={onBack}>Back</button>}
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default Lumpsumcorrection;
