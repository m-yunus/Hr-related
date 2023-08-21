import { useState } from "react";


const SplitandMatrix = ({ onNext, onBack, currentStep ,setPlandataValues}) => {
  const [enableSplitRecommendation, setEnableSplitRecommendation] = useState("");
  const [splitRecommendationCalculation, setSplitRecommendationCalculation] = useState("");
  const [enableMatrixRecommendation, setEnableMatrixRecommendation] = useState("");
  const [matrixRecommendationCalculation, setMatrixRecommendationCalculation] = useState("");

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
    <div className="cyclewrapper">
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
            checked={enableSplitRecommendation === "yes"}
            onChange={() => setEnableSplitRecommendation("yes")}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={enableSplitRecommendation === "no"}
            onChange={() => setEnableSplitRecommendation("no")}
          />
          No
        </label>
      </div>

      <div className="componentradios">
        <h5>What is the calculation of split recommendations:</h5>
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

      <hr />

      <div className="heading-container">
        <h4>Matrix Recommendations</h4>
        <div className="underline-grey"></div>
      </div>
      <div className="componentradios">
        <h5>Do you want to enable matrix recommendation?</h5>
        <label>
          <input
            type="radio"
            value="yes"
            checked={enableMatrixRecommendation === "yes"}
            onChange={() => setEnableMatrixRecommendation("yes")}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={enableMatrixRecommendation === "no"}
            onChange={() => setEnableMatrixRecommendation("no")}
          />
          No
        </label>
      </div>

      <div className="componentradios">
        <h5>What is the calculation of matrix recommendations:</h5>
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

      <div className="button-container">
        {currentStep > 0 && <button onClick={onBack}>Back</button>}
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default SplitandMatrix;