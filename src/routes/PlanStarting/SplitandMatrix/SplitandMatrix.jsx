import { useState } from "react";
import TopNav from "../../../layout/TopNav/TopNav";


const SplitandMatrix = ({ onNext, onBack, currentStep ,setPlandataValues}) => {
  const [enableSplitRecommendation, setEnableSplitRecommendation] = useState(false);
  const [splitRecommendationCalculation, setSplitRecommendationCalculation] = useState("Average");
  const [enableMatrixRecommendation, setEnableMatrixRecommendation] = useState(false);
  const [matrixRecommendationCalculation, setMatrixRecommendationCalculation] = useState("Highest");

  const handleContinue = () => {
    setPlandataValues((prevdata)=>({
      ...prevdata,
      split_recommendation:enableSplitRecommendation,
      calculation_split_recommendation:splitRecommendationCalculation,
      matrix_recommendation:enableMatrixRecommendation,
      calculation_matrix_recommendation:matrixRecommendationCalculation,
    }))
    // You can pass the splitAndMatrixData to the parent component or perform necessary actions here

    onNext();
  };

  return (
    <>
       <TopNav tabActive={"plan"} activeStatus={"parity&Guideline"} firstStatusNumber={"4"} secondStatusNumber={"5"} thirdStatusNumber={"6"} firstStatus={"Parity&Guideline"} secondStatus={"Split&matrix"} thirdStatus ={"Paygroups"}/>
    <div className="cyclewrapper">
      <div className="heading-container">
        <h4>Split Recommendation</h4>
     
      </div>
      <div className="cyclecontainer">
        <h5>Do you want to enable split recommendation?</h5>

        <div className="radiobuttons">
        <label>
          <input
            type="radio"
          
            value="true"
            checked={enableSplitRecommendation }
            onChange={() => setEnableSplitRecommendation(true)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
          
            value="false"
            checked={!enableSplitRecommendation}
            onChange={() => setEnableSplitRecommendation(false)}
          />
          No
        </label>
        </div>
      </div>

      <div className="cyclecontainer">
        <h5>What is the calculation of split recommendations:</h5>
       
        <div className="radiobuttons">
          <label>
          <input
            type="radio"
            value="Average"
            checked={splitRecommendationCalculation === "Average"}
            onChange={() => setSplitRecommendationCalculation("Average")}
          />
          Average
        </label>
        <label>
          <input
            type="radio"
            value="Highest"
            checked={splitRecommendationCalculation === "Highest"}
            onChange={() => setSplitRecommendationCalculation("Highest")}
          />
          Highest
        </label>
        </div>
      </div>

      <hr />

      <div className="heading-container">
        <h4>Matrix Recommendations</h4>
     
      </div>
      <div className="cyclecontainer">
        <h5>Do you want to enable matrix recommendation?</h5>
        <div className="radiobuttons">
        <label>
          <input
            type="radio"
            value="true"
            checked={enableMatrixRecommendation }
            onChange={() => setEnableMatrixRecommendation(true)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="false"
            checked={!enableMatrixRecommendation }
            onChange={() => setEnableMatrixRecommendation(false)}
          />
          No
        </label>
        </div>
      </div>

      <div className="cyclecontainer">
        <h5>What is the calculation of matrix recommendations:</h5>

        <div className="radiobuttons">
        <label>
          <input
            type="radio"
            value="Average"
            checked={matrixRecommendationCalculation === "Average"}
            onChange={() => setMatrixRecommendationCalculation("Average")}
          />
          Average
        </label>
        <label>
          <input
            type="radio"
            value="Highest"
            checked={matrixRecommendationCalculation === "Highest"}
            onChange={() => setMatrixRecommendationCalculation("Highest")}
          />
          Highest
        </label>
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

export default SplitandMatrix;
