import { Link } from "react-router-dom"


const PayGroups = () => {
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

export default PayGroups