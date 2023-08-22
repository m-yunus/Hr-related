import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../../ApiService/ApiService";
import SuccessModal from "../../components/Loginsuccess/SuccessModal";
import Error from "../../components/Error/Error";

const HR_Review_Settings = () => {
  const [allowhroverride, setAllowhroverride] = useState(false);
  const [justification_mandatory, setJustification_mandatory] = useState(false);
  const [attachment_mandatory, setAttachment_mandatory] = useState(false);
  const [edit_on_approval, setedit_on_approval] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIserror] = useState(false);
  const [errorStatus, seterrorStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };
    const HrformData = {
      allow_hr_override: allowhroverride,
      justification_mandatory: justification_mandatory,
      attachment_mandatory: attachment_mandatory,
      edit_on_approval: edit_on_approval,
    };
    try {
      const response = await axios.post(
        `${BaseUrl}/api/personalize/hr-review-settings`,
        HrformData,
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
                <span>/ HR Review Settings</span>
              </h3>
            </div>
            <input type="submit" className="update-button" value="Update" />
          </div>
          <div className="content-container">
            <div className="heading-container">
              <h4>Hr Review settings</h4>
              <div className="underline-grey"></div>
            </div>
            <ul className="Salary-inputbox-list salary-list">
              <li>
                <div className="radio-input-container">
                  <label>
                    <span>Do You Want to allow HR to override all?</span>
                  </label>
                  <div className="radio-button-group">
                    <input
                      type="radio"
                      name="HROverride"
                      value="true"
                      checked={allowhroverride}
                      onChange={() => setAllowhroverride(true)}
                    />{" "}
                    Yes
                    <input
                      type="radio"
                      name="HROverride"
                      value="false"
                      checked={!allowhroverride}
                      onChange={() => setAllowhroverride(false)}
                    />{" "}
                    No
                  </div>
                </div>
              </li>
              <li>
                <div className="radio-input-container">
                  <label>
                    <span>Is justification mandatory? </span>
                  </label>
                  <div
                    className="radio-button-group"
                    style={{ paddingLeft: "43px" }}
                  >
                    <input
                      type="radio"
                      name="justification"
                      value="true"
                      checked={justification_mandatory}
                      onChange={() => setJustification_mandatory(true)}
                    />{" "}
                    Yes
                    <input
                      type="radio"
                      name="justification"
                      value="false"
                      checked={!justification_mandatory}
                      onChange={() => setJustification_mandatory(false)}
                    />{" "}
                    No
                  </div>
                </div>
              </li>
              <li>
                <div className="radio-input-container">
                  <label>
                    <span>Is Attachments mandatory? </span>
                  </label>
                  <div
                    className="radio-button-group"
                    style={{ paddingLeft: "43px" }}
                  >
                    <input
                      type="radio"
                      name="Attachments"
                      value="true"
                      checked={attachment_mandatory}
                      onChange={() => setAttachment_mandatory(true)}
                    />{" "}
                    Yes
                    <input
                      type="radio"
                      name="Attachments"
                      value="false"
                      checked={!attachment_mandatory}
                      onChange={() => setAttachment_mandatory(false)}
                    />{" "}
                    No
                  </div>
                </div>
              </li>
              <li>
                <div className="radio-input-container">
                  <label>
                    <span>Edit on approval (HR) </span>
                  </label>
                  <div
                    className="radio-button-group"
                    style={{ paddingLeft: "43px" }}
                  >
                    <input
                      type="radio"
                      name="editonapproval"
                      value="true"
                      checked={edit_on_approval}
                      onChange={() => setedit_on_approval(true)}
                    />{" "}
                    Yes
                    <input
                      type="radio"
                      name="editonapproval"
                      value="no"
                      checked={!edit_on_approval}
                      onChange={() => setedit_on_approval(false)}
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

export default HR_Review_Settings;
