import { Link } from "react-router-dom"


const ParityGuideline = () => {
  return (
    <>    <div className="heading-container">
        <h4>Parity Measures</h4>
        <div className="underline-grey"></div>
      </div> 
      <div className="componentradios">
        <h5>what is your preffered unit for understandng parity?</h5>
        <label>
          <input
            type="radio"
            value="Compa-ratio"
            
          />
          Compa-ratio
        </label>
        <label>
          <input
            type="radio"
            value="Range-penetreation"
           
          />
        Range-penetreation
        </label>
        <label>
          <input
            type="radio"
            value="RAG"
           
          />
      RAG
        </label>
        <label>
          <input
            type="radio"
            value="Quartiles"
           
          />
        Quartiles
        </label>
        <label>
          <input
            type="radio"
            value="Percentiles"
           
          />
       Percentiles
        </label>
        <label>
          <input
            type="radio"
            value="Compa-zone"
           
          />
       Compa-zone
        </label>
      </div>

      
     
       <hr />
       <div className="heading-container">
        <h4>Merit Guidelines</h4>
        <div className="underline-grey"></div>
      </div>
      <div className="componentradios">
        <h5>Do you want to enable merit guidelines?</h5>
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
        <h5>Validation for supervisor Recommendation</h5>
        <label>
          <input
            type="radio"
            value="yes"
            
          />
          Recomendation is allowed within guidelines only
        </label>
        <label>
          <input
            type="radio"
            value="no"
           
          />
         Recomendation is allowed above the guidelines with a justification
        </label>
        
      </div>
    
      <div className="buttoncontainer">
      <Link to="/Cycleligibilityplan">
        <button>Back</button>
      </Link>
      <Link to="/">
        <button>Continue</button>
      </Link>
      </div>
      </>

  )
}

export default ParityGuideline