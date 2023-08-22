import axios from "axios";
import { useState } from "react"; // Added React import
import "./Performance_based.css";
import { BaseUrl } from "../../../ApiService/ApiService";
import Error from "../../../components/Error/Error";
import SuccessModal from "../../../components/Loginsuccess/SuccessModal";

const Performance_based_bonus = () => {
  const [bonusValues, setBonusValues] = useState({
    multiple_performance: 0,
    bonus_recommendation: false,
    salary_mid: false,
    step_increment: false,
    calculate_arrear: false,
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIserror] = useState(false);
  const [errorStatus, seterrorStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };
    console.log(bonusValues);
    try {
      const response = await axios.post(
        `${BaseUrl}/api/personalize/performance`,
        bonusValues,
        { headers }
      );
      console.log("Form data submitted successfully:", response.data);
      if (response.status === 200) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form data:", error);

      if (error.response.status === 401) {
        seterrorStatus(error.response.data.message);
        setIserror(true);
        setTimeout(() => {
          setIserror(false);
        }, 3000);
      }
    }
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setBonusValues((prevValues) => ({
      ...prevValues,
      [name]: value === "true",
    }));
  };

  return (
    <>
      <div className="wrapper-right">
        <form onSubmit={handleSubmit}>
          <div className="dash-right-top">
            <div className="pathname">
              <h3>
                <span style={{ color: "skyblue" }}>Personalize</span>{" "}
                <span>/ Performance Based Bonus</span>
              </h3>
            </div>
            <input type="submit" className="update-button" value="Update" />
          </div>
          <div className="content-container">
            <div className="heading-container">
              <h4>Total Cash</h4>
              <div className="underline-grey"></div>
            </div>

            <ul className="Performance_based_list">
              <li>
                <h5>Multipliers for Performance based bonus</h5>
              </li>
              <li>
                <input
                  type="number"
                  name="multiple_performance"
                  placeholder="formula"
                  value={bonusValues.multiple_performance}
                  onChange={(event) =>
                    setBonusValues({
                      ...bonusValues,
                      multiple_performance: event.target.value,
                    })
                  }
                />
              </li>
              <li>
                <div className="radio-Performance">
                  <h4>Bonus recommendation for the next cycle (Th.)</h4>
                  <div className="radio-button-performance">
                    <input
                      type="radio"
                      name="bonus_recommendation"
                      value="true"
                      checked={bonusValues.bonus_recommendation}
                      onChange={handleRadioChange}
                    />{" "}
                    Allow
                    <input
                      type="radio"
                      name="bonus_recommendation"
                      value="false"
                      checked={!bonusValues.bonus_recommendation}
                      onChange={handleRadioChange}
                    />
                    Do not Allow
                  </div>
                </div>
              </li>
            </ul>

            <div className="heading-container">
              <h4>salary-mid</h4>
              <div className="underline-grey"></div>
            </div>
            <ul className="Salary-inputbox-list salary-list">
              <li>
                <div className="radio-input-container">
                  <div className="radio-button-group">
                    <input
                      type="radio"
                      name="salary_mid"
                      value="true"
                      checked={bonusValues.salary_mid}
                      onChange={handleRadioChange}
                    />{" "}
                    Auto
                    <input
                      type="radio"
                      name="salary_mid"
                      value="false"
                      checked={!bonusValues.salary_mid}
                      onChange={handleRadioChange}
                    />{" "}
                    Manual
                  </div>
                </div>
              </li>
            </ul>

            <div className="heading-container">
              <h4>Calculate arrears (First time increases)</h4>
              <div className="underline-grey"></div>
            </div>
            <ul className="Salary-inputbox-list salary-list">
              <li>
                <div className="radio-input-container">
                  <div className="radio-button-group">
                    <input
                      type="radio"
                      name="calculate_arrear"
                      value="true"
                      checked={bonusValues.calculate_arrear}
                      onChange={handleRadioChange}
                    />{" "}
                    Yes
                    <input
                      type="radio"
                      name="calculate_arrear"
                      value="false"
                      checked={!bonusValues.calculate_arrear}
                      onChange={handleRadioChange}
                    />{" "}
                    No
                  </div>
                </div>
              </li>
            </ul>

            <div className="heading-container">
              <h4>Step Increment</h4>
              <div className="underline-grey"></div>
            </div>
            <ul className="Salary-inputbox-list salary-list">
              <li>
                <div className="radio-input-container">
                  <div className="radio-button-group">
                    <input
                      type="radio"
                      name="step_increment"
                      value="true"
                      checked={bonusValues.step_increment}
                      onChange={handleRadioChange}
                    />{" "}
                    All
                    <input
                      type="radio"
                      name="step_increment"
                      value="false"
                      checked={!bonusValues.step_increment}
                      onChange={handleRadioChange}
                    />{" "}
                    Group Wise
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </form>
      </div>
      {isSuccess && <SuccessModal status="Success" />}
      {isError && <Error status={errorStatus} />}
    </>
  );
};

export default Performance_based_bonus;
