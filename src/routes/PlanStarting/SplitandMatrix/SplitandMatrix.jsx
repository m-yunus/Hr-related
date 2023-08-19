


const SplitandMatrix = ({ onNext, onBack, currentStep }) => {
  return (
    <>
     <div className="cyclewrapper">
     <div className="heading-container">
        <h4>Split Recommendation</h4>
        <div className="underline-grey"></div>
      </div> 
      <div className="componentradios">
        <h5>Do you want to enable split recommendation?</h5>
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
        <h5>what is the calculation of split recommendations:</h5>
        <label>
          <input
            type="radio"
            value="Average"
            
          />
        Average
        </label>
        <label>
          <input
            type="radio"
            value="Highest"
           
          />
      Highest
        </label>
        
      </div>
       <hr />
       <div className="heading-container">
        <h4>Matrix Recommendations</h4>
        <div className="underline-grey"></div>
      </div>
      <div className="componentradios">
        <h5>Do you want to enable split recommendation?</h5>
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
        <h5>what is the calculation of split recommendations:</h5>
        <label>
          <input
            type="radio"
            value="Average"
            
          />
        Average
        </label>
        <label>
          <input
            type="radio"
            value="Highest"
           
          />
      Highest
        </label>
        
      </div>
      <div className="button-container">
        {currentStep > 0 && <button onClick={onBack}>Back</button>}
        <button onClick={onNext}>Continue</button>
      </div>
      </div>
     
    </>
   
  )
}

export default SplitandMatrix