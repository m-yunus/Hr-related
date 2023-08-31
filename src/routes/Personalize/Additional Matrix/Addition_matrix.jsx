import { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../../ApiService/ApiService";
import SuccessModal from "../../../components/Loginsuccess/SuccessModal";
import Error from "../../../components/Error/Error";
import "./additional.css"
const Addition_matrix = () => {
  const [matrixValues, setMatrixValues] = useState({
    addition_matrix: false,
    matrix_name: "",
    factor_one: "",
    factor_two: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIserror] = useState(false);
  const [errorStatus, seterrorStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/api/personalize/addition-matrix`,
        matrixValues,
        { headers }
      );
      console.log("form submitted successfully", response.data, matrixValues);
      if (response.status === 200) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.log("Api error", error);

      if (error) {
        seterrorStatus(error.response.data.message);
        setIserror(true);
        setTimeout(() => {
          setIserror(false);
        }, 3000);
      }
    }
    console.log(matrixValues);
  };

  const handleRadioChange = (e) => {
    const newValue = e.target.value === "true";
    setMatrixValues((prevValues) => ({
      ...prevValues,
      addition_matrix: newValue,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMatrixValues((prevValues) => ({
      ...prevValues,
      [name]: value,
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
                <span>/ Additional Matrix</span>
              </h3>
            </div>
            <input type="submit" className="update-button" value="Update" />
          </div>
          <div className="content-container">
            <div className="heading-container">
              <h4>Additional Matrix</h4>
              <div className="underline-grey"></div>
            </div>

            <div className="additional-matrix-radio">
              <input
                type="radio"
                name="addition_matrix"
                value="true"
                checked={matrixValues.addition_matrix === true}
                onChange={handleRadioChange}
              />{" "}
              Yes
              <input
                type="radio"
                name="addition_matrix"
                value="false"
                checked={matrixValues.addition_matrix === false}
                onChange={handleRadioChange}
              />{" "}
              No
            </div>

            <ul className="additional-matrix_ul">
              <div className="matrix_name">
              <li>Matrix name</li>
              <li>
                <input
                  type="text"
                  name="matrix_name"
                  placeholder="matrix name"
                  value={matrixValues.matrix_name}
                  onChange={handleInputChange}
                />
              </li>
              </div>
              <div className="Factor_One">
              <li>Factor one</li>
              <li>
                <input
                  type="text"
                  name="factor_one"
                  placeholder="factor one"
                  value={matrixValues.factor_one}
                  onChange={handleInputChange}
                />
              </li>
              </div>
             
              <li>Factor Two</li>
              <li>
                <input
                  type="text"
                  name="factor_two"
                  placeholder="factor two"
                  value={matrixValues.factor_two}
                  onChange={handleInputChange}
                />
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

export default Addition_matrix;
