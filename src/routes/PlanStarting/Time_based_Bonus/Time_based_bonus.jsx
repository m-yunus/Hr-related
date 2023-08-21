

const Time_based_bonus = ({ onNext, onBack, currentStep ,setPlandataValues}) => {
    const handleContinue = () => {
        setPlandataValues((prevdata)=>({
          ...prevdata,

        }))
        // You can pass the splitAndMatrixData to the parent component or perform necessary actions here
    
        onNext();
      };
  return (
   <>
    <div className="cyclewrapper">
      <div className="heading-container">
        <h4>Time Based Bonus</h4>
        <div className="underline-grey"></div>
      </div>
      <div className="componentradios">
        <h5>what do you call bonus program?</h5>
        <input type="text" />
      </div>

      <div className="componentradios">
        <h5>What is the eligibility ? (joined on or before)</h5>
      <input type="date" />
      </div>

      <hr />

      <div className="componentradios">
        <h5>Is the bonus based on salary</h5>
        <label>
          <input
            type="radio"
            value="yes"
            
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
          
          />
          No
        </label>
      </div>

      <div className="componentradios">
        <h5>How much bonus as a percentage of salary:</h5>
        <input type="text" name="" id="" />
      </div>
      <div className="componentradios">
        <h5>Do you want to allow manager-recommendation</h5>
        <label>
          <input
            type="radio"
            value="yes"
            
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
          
          />
          No
        </label>
      </div>
      <div className="componentradios">
        <h5>what is the manager recommendation percentage</h5>
       <input type="text" />
      </div>
      <div className="componentradios">
        <h5>what is the bonus guideline percentage</h5>
       <input type="text" />
      </div>
      <div className="componentradios">
        <h5>Do you like the pro-rate the bonus</h5>
        <label>
          <input
            type="radio"
            value="yes"
            
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
          
          />
          No
        </label>
      </div>
      <div className="componentradios">
        <h5>what is the preffered unit to prorate</h5>
        <label>
          <input
            type="radio"
            value=""
            
          />
       Monthly
        </label>
        <label>
          <input
            type="radio"
            value=""
          
          />
         Weekly
        </label>
        <label>
          <input
            type="radio"
            value=""
          
          />
      Daily
        </label>
        <label>
          <input
            type="radio"
            value=""
          
          />
         Hourly
        </label>
      </div>
      <div className="button-container">
        {currentStep > 0 && <button onClick={onBack}>Back</button>}
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
   </>
  )
}

export default Time_based_bonus