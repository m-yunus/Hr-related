import { useState } from "react";
import "./bonusincentives.css";
import TopNav from "../../../layout/TopNav/TopNav";

const BonusIncentives = ({ onNext, onBack, currentStep , setPlandataValues }) => {
  const [enableBonusIncentives, setEnableBonusIncentives] = useState("");
  const [useDifferentRules, setUseDifferentRules] = useState("");
  const [bonusGroupBasis, setBonusGroupBasis] = useState("");

  const handleContinue = () => {
    setPlandataValues((prevdata)=>({
      ...prevdata,
      enable_bonus_incentives:enableBonusIncentives,
      use_diff_bonus_incentives:useDifferentRules,
      basis_of_bonus:bonusGroupBasis,
    }))

    // You can pass the bonusIncentivesData to the parent component or perform necessary actions here

    onNext();
  };

  return (
    <>
       <TopNav tabActive={"plan"} activeStatus={"Promotions"} firstStatusNumber={"8"} secondStatusNumber={"9"} thirdStatusNumber={"10"} firstStatus={"Promotions"} secondStatus={"Bonus&Incentives"} thirdStatus ={"Bonus&IncentivesScheme"}/>
    <div className="cyclewrapper">
    <div className="cycle">
    <div className="heading-container">
      <h4>Bonus & Incentives</h4>
   
      <div className="cyclecontainer">
        <h5>Do you want to enable Bonus & Incentives?</h5>
        <div className="radiobuttons">
        <label>
          <input
            type="radio"
            value="yes"
            checked={enableBonusIncentives === "yes"}
            onChange={() => setEnableBonusIncentives("yes")}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={enableBonusIncentives === "no"}
            onChange={() => setEnableBonusIncentives("no")}
          />
          No
        </label>
        </div>
      </div>

      <div className="cyclecontainer">
      <div className="radiobuttons">
        <h5>Do you want to use different bonus & incentives rules for different employee groups?</h5>
        <label>
          <input
            type="radio"
            value="yes"
            checked={useDifferentRules === "yes"}
            onChange={() => setUseDifferentRules("yes")}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={useDifferentRules === "no"}
            onChange={() => setUseDifferentRules("no")}
          />
          No
        </label>
        </div>
      </div>

      <div className="cyclecontainer">
        <h5>What is the basis of bonus group?</h5>
        <div className="inputcontainer">
        <input
          type="text"
          placeholder="group criteria"
          value={bonusGroupBasis}
          onChange={(e) => setBonusGroupBasis(e.target.value)}
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

export default BonusIncentives;
