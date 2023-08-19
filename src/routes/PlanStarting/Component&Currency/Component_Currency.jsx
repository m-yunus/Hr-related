
import { Link } from "react-router-dom";

import "./componentcurrency.css";
import { AiFillPlusSquare } from "react-icons/ai";

const Component_Currency = () => {
  return (
    <>
      
      <div className="heading-container">
        <h4>Salary Component</h4>
        <div className="underline-grey"></div>
      </div> 
      <div className="componentradios">
        <h5>Do you want to use Salary Components?</h5>
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

      <h5>Create salary Components using the text box below</h5>
      <div className="componentinputs">
        <input type="text" placeholder="Component name" />
        <input type="text" placeholder="Display name" />
        <button><AiFillPlusSquare/></button>
      </div>
       <hr />
       <div className="heading-container">
        <h4>Global Currency</h4>
        <div className="underline-grey"></div>
      </div>
      <div className="componentradios">
        <h5>Do you want to use Global currency?</h5>
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
        <h5>Set Your currency rate against home currency</h5>
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
  );
}

export default Component_Currency;
