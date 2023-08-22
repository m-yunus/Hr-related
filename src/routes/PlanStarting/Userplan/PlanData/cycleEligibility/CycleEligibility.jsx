import  { useState } from "react";
import "./cycleEligibility.css";

const CycleEligibility = ({ onNext, onBack, currentStep, setPlandataValues }) => {
  // State variables for selected values
  const [cycleFrequency, setCycleFrequency] = useState("yearly");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eligibilityOption, setEligibilityOption] = useState("joinedUntil");
  const [eligibilityDate, setEligibilityDate] = useState("");
  const handleContinue = () => {
   

    // Move to the next step
    onNext();
setPlandataValues((prevdata)=>({
  ...prevdata,
  cycle_type:cycleFrequency,
  cycle_from:startDate,
  cycle_to:endDate,
  eligibility_type:eligibilityOption,
  eligibility_date:eligibilityDate,
}))


  };
  console.log(cycleFrequency,startDate,endDate,eligibilityOption);
  return (
    <>
      {/* Radio buttons for cycle frequency */}
      <div className="cyclewrapper">
        <div className="cycle">
          
       
        <div className="cyclecontainer">
          <div className="labels">
          <h5>What is merit cycle</h5>
          </div>
         
          <div className="radiobuttons">
          <label>
            <input
              type="radio"
              value="yearly"
              name="merit"
              checked={cycleFrequency === "yearly"}
              onChange={(e) => setCycleFrequency(e.target.value)}
            />
            Yearly
          </label>
          <label>
            <input
              type="radio"
              name="merit"
              value="halfYearly"
              checked={cycleFrequency === "halfYearly"}
              onChange={(e) => setCycleFrequency(e.target.value)}
            />
            Half-Yearly
          </label>
          <label>
            <input
              type="radio"
              name="merit"
              value="projectBased"
              checked={cycleFrequency === "projectBased"}
              onChange={(e) => setCycleFrequency(e.target.value)}
            />
            Project-Based
          </label>
          </div>
        
        </div>

        {/* Date pickers */}
        <div className="cyclecontainer">
          <h5>What is the Period ?</h5>
          <div className="inputcontainer">
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
       
        
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
            </div>
          
        </div>

        {/* Horizontal line */}
        <hr />

        {/* Radio buttons for eligibility */}
        <div className="heading-container">
          <h4>Eligibility</h4>
        
        </div>
        <div className="cyclecontainer">
          <h5>How do you want to define eligibility?</h5>
         
          <div className="radiobuttons">
          <label>
            <input
              type="radio"
              value="joinedUntil"
              checked={eligibilityOption === "joinedUntil"}
              onChange={(e) => setEligibilityOption(e.target.value)}
            />
            Joined Until
          </label>
          <label>
            <input
              type="radio"
              value="MinServiceduringMeritCycle"
              checked={eligibilityOption === "MinServiceduringMeritCycle"}
              onChange={(e) => setEligibilityOption(e.target.value)}
            />
            Min Service During the Merit Cycle
          </label>
          <div className="inputcontainer">
          <label>Start Date:</label>
          <input
            type="date"
            value={eligibilityDate}
            onChange={(e) => setEligibilityDate(e.target.value)}
          />
        </div>
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

export default CycleEligibility;
