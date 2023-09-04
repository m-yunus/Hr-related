import { useState } from "react";
import "./paygroups.css";
import TopNav from "../../../layout/TopNav/TopNav";
import { useDataContext } from "../../../Context/Context";

const PayGroups = ({ onNext, onBack, currentStep , setPlandataValues}) => {
  const [applyDifferentMeritRules, setApplyDifferentMeritRules] = useState(false);
  const [payGroupBasis, setPayGroupBasis] = useState("");
  const {setProgressvalue}=useDataContext()
  const handleContinue = () => {
    setPlandataValues((prevdata)=>({
      ...prevdata,
      paygroups:applyDifferentMeritRules,
      paygroups_name:payGroupBasis,
    }))
    // You can pass the payGroupsData to the parent component or perform necessary actions here
    setProgressvalue(prevdata=>prevdata+1);
    onNext();
  };

  return (
    <>
       <TopNav tabActive={"plan"} activeStatus={"Split&Matrix"} firstStatusNumber={"5"} secondStatusNumber={"6"} thirdStatusNumber={"7"} firstStatus={"Split&Matrix"} secondStatus={"Paygroups"} thirdStatus ={"LumpSum&Corrections"}/>
    <div className="cyclewrapper">
    <div className="cycle">
    <div className="heading-container">
      <h4>Pay Groups</h4>
   
      <div className="cyclecontainer">
        <h5>Do you want to apply different merit rules for different employee groups?</h5>
        <div className="radiobuttons">
        <label>
          <input
            type="radio"
            value="true"
            checked={applyDifferentMeritRules }
            onChange={() => setApplyDifferentMeritRules(true)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="false"
            checked={!applyDifferentMeritRules }
            onChange={() => setApplyDifferentMeritRules(false)}
          />
          No
        </label>
        </div>
      </div>

      <div className="cyclecontainer">
        <h5>What is the basis of pay group?</h5>
        <div className="inputcontainer">
        <input
          type="text"
          placeholder="group criteria"
          value={payGroupBasis}
          onChange={(e) => setPayGroupBasis(e.target.value)}
        />
        </div>
      </div>
      </div>
      </div>
    
      <div className="button-container">
        {currentStep > 0 && <button onClick={onBack} className="back_button">Back</button>}
        <button onClick={handleContinue} className="continue_button">Continue</button>
      </div>
      </div>
      </>
  );
};

export default PayGroups;
