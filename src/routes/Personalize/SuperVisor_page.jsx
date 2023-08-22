import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../../ApiService/ApiService";
import SuccessModal from "../../components/Loginsuccess/SuccessModal";
import Error from "../../components/Error/Error";

const SuperVisor_page = () => {
  const [loadPolicy, setLoadPolicy] = useState({});
  const [learningMaterial, setLearningMaterial] = useState({});
  const [radioValues, setRadioValues] = useState({
    supervisor_attachment: false,
    supervisor_currency_button: false,
    supervisor_enable_chat: false,
    supervisor_employee_letter: false,
  });
  const [videoUrl, setVideoUrl] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIserror] = useState(false);
  const [errorStatus, seterrorStatus] = useState("");
  const handlePolicyFileChange = (event) => {
    const policyFile = event.target.files[0];
    setLoadPolicy(policyFile);
  };

  const handleLearningChange = (event) => {
    const learningFile = event.target.files[0];
    setLearningMaterial(learningFile);
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setRadioValues((prevValues) => ({
      ...prevValues,
      [name]: value === "true",
    }));
  };

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };
    const formData = new FormData();
    formData.append("load_policy", loadPolicy);
    formData.append("load_learning_material", learningMaterial);
    formData.append("supervisor_attachment", radioValues.supervisor_attachment);
    formData.append(
      "supervisor_currency_button",
      radioValues.supervisor_currency_button
    );
    formData.append(
      "supervisor_enable_chat",
      radioValues.supervisor_enable_chat
    );
    formData.append(
      "supervisor_employee_letter",
      radioValues.supervisor_employee_letter
    );
    formData.append("supervisor_video_url", videoUrl); // Append video URL to formData

    try {
      const response = await axios.post(
        `${BaseUrl}/api/personalize/supervisor`,
        formData,
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

  return (
    <>
      <div className="wrapper-right">
        <form onSubmit={handleSubmit}>
          <div className="dash-right-top">
            <div className="pathname">
              <h3>
                <span style={{ color: "skyblue" }}>Personalize</span>{" "}
                <span>/ Supervisor Page</span>
              </h3>
            </div>
            <input type="submit" className="update-button" value="Update" />
          </div>
          <div className="content-container">
            <div className="heading-container">
              <h4>Supervisor Landing Page</h4>
              <div className="underline-grey"></div>
            </div>
            <ul className="supervisor-inputbox-list">
              <li>
                <div className="file-input-container">
                  <label htmlFor="">Load Policy</label>
                  <input
                    type="file"
                    id="file-input-policy"
                    className="file-input"
                    onChange={handlePolicyFileChange}
                  />

                  <label
                    htmlFor="file-input-policy"
                    className="file-input-label"
                  >
                    Choose File
                  </label>
                </div>

                {loadPolicy && (
                  <div>
                    <p>Selected file: {loadPolicy.name}</p>
                  </div>
                )}
              </li>

              <li>
                <div className="file-input-container">
                  <label htmlFor="">Load Learning Material</label>
                  <input
                    type="file"
                    id="file-input-learning"
                    className="file-input"
                    onChange={handleLearningChange}
                  />

                  <label
                    htmlFor="file-input-learning"
                    className="file-input-label"
                  >
                    Choose File
                  </label>
                </div>

                {learningMaterial && (
                  <div>
                    <p>Selected file: {learningMaterial.name}</p>
                  </div>
                )}
              </li>
              <li>
                <input
                  type="text"
                  placeholder="paste Video Url"
                  value={videoUrl}
                  onChange={handleVideoUrlChange}
                />
              </li>
            </ul>
            <div className="heading-container" style={{ marginTop: "3rem" }}>
              <h4>Supervisor Recommendation Page</h4>
              <div className="underline-grey"></div>
            </div>
            <ul className="Salary-inputbox-list salary-list">
              <li>
                <div className="radio-input-container">
                  <label>
                    <span>Do You Want Attachment for supervisor?</span>
                  </label>
                  <div
                    className="radio-button-group"
                    style={{ marginLeft: "8rem" }}
                  >
                    <input
                      type="radio"
                      name="supervisor_attachment"
                      value="true"
                      checked={radioValues.supervisor_attachment}
                      onChange={handleRadioChange}
                    />{" "}
                    Yes
                    <input
                      type="radio"
                      name="supervisor_attachment"
                      value="false"
                      checked={!radioValues.supervisor_attachment}
                      onChange={handleRadioChange}
                    />{" "}
                    No
                  </div>
                </div>
              </li>
              <li>
                <div className="radio-input-container">
                  <label>
                    <span>
                      Do You Want currency change button For supervisor?{" "}
                    </span>
                  </label>
                  <div
                    className="radio-button-group"
                    style={{ paddingLeft: "43px" }}
                  >
                    <input
                      type="radio"
                      name="supervisor_currency_button"
                      value="true"
                      checked={radioValues.supervisor_currency_button}
                      onChange={handleRadioChange}
                    />{" "}
                    Yes
                    <input
                      type="radio"
                      name="supervisor_currency_button"
                      value="no"
                      checked={!radioValues.supervisor_currency_button}
                      onChange={handleRadioChange}
                    />{" "}
                    No
                  </div>
                </div>
              </li>
            </ul>
            <div className="heading-container" style={{ marginTop: "1rem" }}>
              <h4>Chat for Supervisors</h4>
              <div className="underline-grey"></div>
            </div>
            <ul className="Salary-inputbox-list salary-list">
              <li>
                <div className="radio-input-container">
                  <label>
                    <span>Enable Chat</span>
                  </label>
                  <div
                    className="radio-button-group"
                    style={{ marginLeft: "8rem" }}
                  >
                    <input
                      type="radio"
                      name="supervisor_enable_chat"
                      value="true"
                      checked={radioValues.supervisor_enable_chat}
                      onChange={handleRadioChange}
                    />{" "}
                    Yes
                    <input
                      type="radio"
                      name="supervisor_enable_chat"
                      value="no"
                      checked={!radioValues.supervisor_enable_chat}
                      onChange={handleRadioChange}
                    />{" "}
                    No
                  </div>
                </div>
              </li>
              <li>
                <div className="radio-input-container">
                  <label>
                    <span>
                      Do You Want Allow supervisors to access employee letters?{" "}
                    </span>
                  </label>
                  <div
                    className="radio-button-group"
                    style={{ paddingLeft: "43px" }}
                  >
                    <input
                      type="radio"
                      name="supervisor_employee_letter"
                      value="true"
                      checked={radioValues.supervisor_employee_letter}
                      onChange={handleRadioChange}
                    />{" "}
                    Yes
                    <input
                      type="radio"
                      name="supervisor_employee_letter"
                      value="no"
                      checked={!radioValues.supervisor_employee_letter}
                      onChange={handleRadioChange}
                    />{" "}
                    No
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

export default SuperVisor_page;
