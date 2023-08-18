import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../../ApiService/ApiService";

const Workflow = () => {
  const [checkboxStates, setCheckboxStates] = useState({
    supervisor: true,
    manager: false,
    sub_hr: false,
    hr: true
  });

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [name]: !prevStates[name]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/api/personalize/workflow`,
        checkboxStates,
        { headers }
      );
      console.log("successfully submitted", response.data);
    } catch (error) {
      console.log("API error", error);
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
                <span>/ Workflow</span>
              </h3>
            </div>
            <input type="submit" className="update-button" value="Update" />
          </div>
          <div className="content-container">
            <div className="heading-container">
              <h4>WorkFlow</h4>
              <div className="underline-grey"></div>
            </div>

            <ul className="Salary-inputbox-list salary-list">
              <li>
                <label>
                  <span>How Many Levels Of approval required?</span>
                </label>
              </li>
              <li>
                <div className="checkbox-input-container">
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      name="supervisor"
                      checked={checkboxStates.supervisor}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-label">Supervisor</span>
                  </div>
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      name="manager"
                      checked={checkboxStates.manager}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-label">Manager</span>
                  </div>
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      name="sub_hr"
                      checked={checkboxStates.sub_hr}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-label">Sub HR</span>
                  </div>
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      name="hr"
                      checked={checkboxStates.hr}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-label">HR</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};

export default Workflow;
