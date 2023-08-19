


const PayGroups = ({ onNext, onBack, currentStep }) => {
  return (
    <>
    <div className="heading-container">
       <h4>Pay Groups</h4>
       <div className="underline-grey"></div>
     </div> 
     <div className="componentradios">
       <h5>Do you want to apply different merit rules for different employee groups?</h5>
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
       <h5>what is the basis of pay group ?</h5>
       <input type="text" name="" id=""  placeholder="group criteria"/>
       
     </div>
     
     <div className="button-container">
        {currentStep > 0 && <button onClick={onBack}>Back</button>}
        <button onClick={onNext}>Continue</button>
      </div>
   </>
  )
}

export default PayGroups