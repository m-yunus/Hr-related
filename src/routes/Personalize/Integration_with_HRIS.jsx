import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../../ApiService/ApiService";
import SuccessModal from "../../components/Loginsuccess/SuccessModal";
import Error from "../../components/Error/Error";

const Integration_with_HRIS = () => {
  const [selectedFile, setSelectedFile] = useState({});
  const [integrationWithHr, setIntegrationwithHr] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIserror] = useState(false);
  const [errorStatus, seterrorStatus] = useState("");
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };
    const formData = new FormData();
    formData.append("integration_with_hr", integrationWithHr);
    formData.append("integration_image", selectedFile);
    console.log(formData);
    console.log("in", integrationWithHr);
    console.log("out", selectedFile);
    try {
      const res = await axios.post(
        `${BaseUrl}/api/personalize/integration-with-hr`,
        formData,
        { headers }
      );
      console.log("Integration data submitted successfully:", res);
      if (res.status === 200) {
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
  return (
    <>
      <div className="wrapper-right">
        <form onSubmit={handleSubmit}>
          <div className="dash-right-top">
            <div className="pathname">
              <h3>{location.pathname}</h3>
            </div>
            <input type="submit" className="update-button" value="Update" />
          </div>
          <div className="content-container">
            <div className="heading-container">
              <h4>Integration With HRIS</h4>
              <div className="underline-grey"></div>
            </div>
            <table className="salary-table">
              <tbody>
                <tr>
                  <td>
                    <h5>Do You Want Integration with HRIS?</h5>
                  </td>
                  <td>
                    <div className="radio-button-group">
                      <input
                        type="radio"
                        name="IntegrationHRIS"
                        value="true"
                        checked={integrationWithHr}
                        onChange={() => setIntegrationwithHr(true)}
                      />{" "}
                      Yes
                      <input
                        type="radio"
                        name="IntegrationHRIS"
                        value="false"
                        checked={!integrationWithHr}
                        onChange={() => setIntegrationwithHr(false)}
                      />{" "}
                      No
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Get Data From</h5>
                  </td>
                  <td>
                    <input type="text" placeholder="location" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Store letters</h5>
                  </td>
                  <td>
                    <input type="text" placeholder="location" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>store Payroll extract </h5>
                  </td>
                  <td>
                    <input type="text" placeholder="location" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="heading-container">
              <h4>User Photos</h4>
              <div className="underline-grey"></div>
            </div>
            <table className="salary-table">
              <tbody>
                <tr>
                  <td>
                    <h5>User Photos </h5>
                  </td>
                  <td>
                    <div className="file-input-container">
                      <input
                        type="file"
                        id="file-input"
                        className="file-input"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="file-input" className="file-input-label">
                        Choose File
                      </label>
                    </div>

                    {selectedFile && (
                      <div>
                        <p>Selected file: {selectedFile.name}</p>
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
      {isSuccess && <SuccessModal status="Success" />}
      {isError && <Error status={errorStatus} />}
    </>
  );
};

export default Integration_with_HRIS;
