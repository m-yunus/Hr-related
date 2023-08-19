import { Link } from "react-router-dom"


const SplitandMatrix = () => {
  return (
    <>
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

export default SplitandMatrix