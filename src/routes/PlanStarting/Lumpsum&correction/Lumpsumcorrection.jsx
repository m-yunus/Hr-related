import { Link } from "react-router-dom"


const Lumpsumcorrection = () => {
  return (
    <>
    <div className="heading-container">
    <h4>Lump Sum</h4>
    <div className="underline-grey"></div>
  </div> 
  <div className="componentradios">
    <h5>what among the following do you prefer when employee salary is below the range min?</h5>
    <label>
      <input
        type="radio"
        value="yes"
        
      />
      Ignore range max,and provide incement
    </label>
    <label>
      <input
        type="radio"
        value="no"
       
      />
    Cap the salary up to range max,and remaining as lumpsum
    </label>
    <label>
      <input
        type="radio"
        value="no"
       
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
    <h5>What among the following  do you prefer when employee slary is above the range max  </h5>
    <label>
      <input
        type="radio"
        value="yes"
        
      />
     ignore the range min and provide increment on current salary
    </label>
    <label>
      <input
        type="radio"
        value="no"
       
      />
    calculate incement on range minimum
    </label>
    <label>
      <input
        type="radio"
        value="no"
       
      />
    calculate incement on current salary and if the new salary is not meeting range minimum provide a correction to meet range minimum
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

export default Lumpsumcorrection