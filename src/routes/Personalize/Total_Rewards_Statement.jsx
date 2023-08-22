import { useState } from "react";
import { BaseUrl } from "../../ApiService/ApiService";
import axios from "axios";
import SuccessModal from "../../components/Loginsuccess/SuccessModal";
import Error from "../../components/Error/Error";

const Total_Rewards_Statement = () => {
  const [totalCashArray, setTotalCashArray] = useState([]);
  const [benefitsArray, setBenefitsArray] = useState([]);
  const [additionalAnalysisArray, setAdditionalAnalysisArray] = useState([]);
  const [totalCashInput, setTotalCashInput] = useState("");
  const [benefitsInput, setBenefitsInput] = useState("");
  const [additionalAnalysisInput, setAdditionalAnalysisInput] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIserror] = useState(false);
  const [errorStatus, seterrorStatus] = useState("");
  const handletotalcash = () => {
    setTotalCashArray([...totalCashArray, totalCashInput]);
    setTotalCashInput("");
  };

  const handletotalbenefits = () => {
    setBenefitsArray([...benefitsArray, benefitsInput]);
    setBenefitsInput("");
  };

  const handleadditionalanalysis = () => {
    setAdditionalAnalysisArray([
      ...additionalAnalysisArray,
      additionalAnalysisInput,
    ]);
    setAdditionalAnalysisInput("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("added");
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/api/personalize/total-rewards`,
        {
          total_cash: totalCashArray,
          total_benefits: benefitsArray,
          additional_analysis: additionalAnalysisArray,
        },
        { headers }
      );
      console.log("successfully submitted", response.data);
      if (response.status === 200) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.log("API error", error);

      if (error.response.status === 401) {
        seterrorStatus(error.response.data.message);
        setIserror(true);
        setTimeout(() => {
          setIserror(false);
        }, 3000);
      }
    }
  };

  console.log(totalCashArray);
  console.log(benefitsArray);
  console.log(additionalAnalysisArray);
  return (
    <>
      <div className="wrapper-right">
        <div className="dash-right-top">
          <div className="pathname">
            <h3>
              <span style={{ color: "skyblue" }}>Personalize</span>{" "}
              <span>/ Total Rewards Statement</span>
            </h3>
          </div>
          <button
            type="submit"
            className="update-button"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
        <div className="content-container">
          <div className="heading-container">
            <h4>Total Cash</h4>
            <div className="underline-grey"></div>
          </div>

          <ul className="Culture-inputbox-list">
            <li>
              <input
                type="number"
                placeholder="new column"
                name="total_cash"
                value={totalCashInput}
                onChange={(e) => setTotalCashInput(e.target.value)}
              />
            </li>
            <li>
              <button
                style={{
                  background: "#2074d4",
                  padding: "10px",
                  border: "none",
                }}
                onClick={handletotalcash}
              >
                Add
              </button>
            </li>
          </ul>
          <div className="heading-container">
            <h4>Benefits</h4>
            <div className="underline-grey"></div>
          </div>

          <ul className="Culture-inputbox-list">
            <li>
              <input
                type="number"
                placeholder="new column"
                name="total_benefits"
                value={benefitsInput}
                onChange={(e) => setBenefitsInput(e.target.value)}
              />
            </li>

            <li>
              <button
                style={{
                  background: "#2074d4",
                  padding: "10px",
                  border: "none",
                }}
                onClick={handletotalbenefits}
              >
                Add
              </button>
            </li>
          </ul>
          <div className="heading-container">
            <h4>additional analysis</h4>
            <div className="underline-grey"></div>
          </div>

          <ul className="Culture-inputbox-list">
            <li>
              <input
                type="number"
                placeholder="new column"
                name="additional_analysis"
                value={additionalAnalysisInput}
                onChange={(e) => setAdditionalAnalysisInput(e.target.value)}
              />
            </li>

            <li>
              <button
                style={{
                  background: "#2074d4",
                  padding: "10px",
                  border: "none",
                }}
                onClick={handleadditionalanalysis}
              >
                Add
              </button>
            </li>
          </ul>
        </div>
      </div>
      {isSuccess && <SuccessModal status="Success" />}
      {isError && <Error status={errorStatus} />}
    </>
  );
};

export default Total_Rewards_Statement;
