


import "./cycleEligibility.css";

// eslint-disable-next-line react/prop-types
const CycleEligibility = ({onNext,onBack, currentStep }) => {

const handleContinue=()=>{
  onNext();
}
  return (
   <>

     

      {/* Radio buttons for cycle frequency */}
      <div className="cyclewrapper">
      <div className="cyclecontainer">
        <h5>What is merit cycle</h5>
        <label>
          <input
            type="radio"
            value="yearly"
            
          />
          Yearly
        </label>
        <label>
          <input
            type="radio"
            value="halfYearly"
            
          />
          Half-Yearlys
        </label>
        <label>
          <input
            type="radio"
            value="projectBased"
          
          />
          Project-Based
        </label>
      </div>

      {/* Date pickers */}
      <div className="cycledate">
        <label>Start Date:</label>
        <input
          type="date"
     
        />
      </div>
      <div className="cycledate">
        <label>End Date:</label>
        <input
          type="date"
          
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
            
          />
          Joined Until
        </label>
        <label>
          <input
            type="radio"
            value="MinServiceduringMeritCycle"
           
          />
          Min Service During the Merit Cycle
        </label>
      </div>
      <div className="button-container">
        {currentStep > 0 && <button onClick={onBack}>Back</button>}
        <button onClick={handleContinue}>Continue</button>
      </div>
     
    </div>
    </>
  );
};

export default CycleEligibility;
