import { useState } from "react";
import Navbar from "../../../../../layout/Navbar";
import { Link } from "react-router-dom";
import "./cycleEligibility.css";

const CycleEligibility = () => {
  const [cycleFrequency, setCycleFrequency] = useState(""); // State to store cycle frequency
  const [eligibilityType, setEligibilityType] = useState(""); // State to store eligibility type
  const [startDate, setStartDate] = useState(null); // State to store start date
  const [endDate, setEndDate] = useState(null); // State to store end date

  const handleCycleFrequencyChange = (event) => {
    setCycleFrequency(event.target.value);
  };

  const handleEligibilityTypeChange = (event) => {
    setEligibilityType(event.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
   <>

      <Navbar />

      {/* Radio buttons for cycle frequency */}
      <div className="cyclewrapper">
      <div className="cyclecontainer">
        <h5>What is merit cycle</h5>
        <label>
          <input
            type="radio"
            value="yearly"
            checked={cycleFrequency === "yearly"}
            onChange={handleCycleFrequencyChange}
          />
          Yearly
        </label>
        <label>
          <input
            type="radio"
            value="halfYearly"
            checked={cycleFrequency === "halfYearly"}
            onChange={handleCycleFrequencyChange}
          />
          Half-Yearly
        </label>
        <label>
          <input
            type="radio"
            value="projectBased"
            checked={cycleFrequency === "projectBased"}
            onChange={handleCycleFrequencyChange}
          />
          Project-Based
        </label>
      </div>

      {/* Date pickers */}
      <div className="cycledate">
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => handleStartDateChange(e.target.value)}
        />
      </div>
      <div className="cycledate">
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => handleEndDateChange(e.target.value)}
        />
      </div>

      {/* Horizontal line */}
      <hr />

      {/* Radio buttons for eligibility */}
      <div className="heading-container">
        <h4>Eligibility</h4>
        <div className="underline-grey"></div>
      </div>
      <div className="cycleradios">
        <h5>How do you want to define eligibility?</h5>
        <label>
          <input
            type="radio"
            value="joinedUntil"
            checked={eligibilityType === "joinedUntil"}
            onChange={handleEligibilityTypeChange}
          />
          Joined Until
        </label>
        <label>
          <input
            type="radio"
            value="MinServiceduringMeritCycle"
            checked={eligibilityType === "MinServiceduringMeritCycle"}
            onChange={handleEligibilityTypeChange}
          />
          Min Service During the Merit Cycle
        </label>
      </div>
      <div className="buttoncontainer">
      <Link to="/userplan">
        <button>Back</button>
      </Link>
      <Link to="/componentcurrency">
        <button>Continue</button>
      </Link>
      </div>
     
    </div>
    </>
  );
};

export default CycleEligibility;
