import  { useState } from "react";
import "./componentcurrency.css";
import { AiFillPlusSquare } from "react-icons/ai";
import TopNav from "../../../layout/TopNav/TopNav";

const Component_Currency = ({ onNext, onBack, currentStep,setPlandataValues }) => {
  const [useSalaryComponents, setUseSalaryComponents] = useState(false);
  const [componentName, setComponentName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [useGlobalCurrency, setUseGlobalCurrency] = useState(false);

console.log(useSalaryComponents,useGlobalCurrency);
  const handleContinue = () => {
  

    // You can pass the data to the parent component or perform necessary actions here

    onNext();
    setPlandataValues((prevdata)=>({
      ...prevdata,
      salary_component:useSalaryComponents,
      salary_component_list:{
        componentName:componentName,
        displayName:displayName
      },
      global_currency:useGlobalCurrency,
      global_currency_list:"",
    }))
  };
console.log(useSalaryComponents,componentName,displayName,useGlobalCurrency);
  return (
    <>
     <TopNav tabActive={"plan"} activeStatus={"Cycle&Eligibility"} firstStatusNumber={"1"} secondStatusNumber={"2"} thirdStatusNumber={"3"} firstStatus={"Cycle&Eligibility"} secondStatus={"Component&Currency"} thirdStatus ={"Prorations"}/>
    <div className="cyclewrapper">
    <div className="cycle">
   
      <div className="heading-container">
        <h4>Salary Component</h4>
      
      </div> 
      <div className="cyclecontainer">
        <h5>Do you want to use Salary Components?</h5>
        <div className="radiobuttons">

        <label>
          <input
            type="radio"
            value="true"
            checked={useSalaryComponents }
            onChange={() => setUseSalaryComponents(true)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="false"
            checked={!useSalaryComponents }
            onChange={() => setUseSalaryComponents(false)}
          />
          No
        </label>
        </div>
      
      </div>

     
      <div className="cyclecontainer">
      <h5>Create salary Components using the text box below</h5>
      <div className="inputcontainer">
      <input
          type="text"
          placeholder="Component name"
          value={componentName}
          onChange={(e) => setComponentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Display name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      
      </div>
       
      </div>
       <hr />
       <div className="heading-container">
        <h4>Global Currency</h4>
      
      </div>
      <div className="cyclecontainer">
        <h5>Do you want to use Global currency?</h5>
         <div className="radiobuttons">
         <label>
          <input
            type="radio"
            value="true"
            checked={useGlobalCurrency}
            onChange={() => setUseGlobalCurrency(true)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="false"
            checked={!useGlobalCurrency}
            onChange={() => setUseGlobalCurrency(false)}
          />
          No
        </label>

         </div>
      
        
      </div>
      <h5>Set Your currency rate against home currency</h5>
      </div>
      </div>
      <div className="button-container">
        {currentStep > 0 && <button onClick={onBack} className="back_button">Back</button>}
        <button onClick={handleContinue} className="continue_button">Continue</button>
      </div>

    </>
  );
}

export default Component_Currency;
