
const Promotion = ({ onNext, onBack, currentStep }) => {
  return (
    <>
     <div className="heading-container">
       <h4>Promotions</h4>
       <div className="underline-grey"></div>
     </div> 
     <div className="componentradios">
       <h5>Do you want to enable promotion recommendations?</h5>
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
     <div className="button-container">
        {currentStep > 0 && <button onClick={onBack}>Back</button>}
        <button onClick={onNext}>Continue</button>
      </div>
    </>
  )
}

export default Promotion