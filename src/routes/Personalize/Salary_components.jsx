import axios from "axios";
import {  useState } from "react";
import { BaseUrl } from "../../ApiService/ApiService";

const Salary_components = () => {

  const [salaryComponent, setSalaryComponent] = useState(false);
  const [meritAppliedOn, setMeritAppliedOn] = useState({
    value: "All_Components",
    component: "",
  });
 
const handleSubmit=async(e)=>{
e.preventDefault();
const headers = {
  "x-access-token": sessionStorage.getItem("token"),
};
const salryformData={
  salary_component: salaryComponent,
  merit_applied_on: meritAppliedOn,
}
try {
  await axios.post(`${BaseUrl}/api/personalize/salary-component`,salryformData,{headers})
  console.log('Form data submitted successfully:',salryformData);
} catch (error) {
  console.error('Error submitting form data:', error);
}
}
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
              <h4>Salary Component</h4>
              <div className="underline-grey"></div>
            </div>

            <ul className="Salary-inputbox-list salary-list">
              <li>
                <div className="radio-input-container">
                  <label>
                    <span>Do You Want Salary Components?</span>
                  </label>
                  <div className="radio-button-group">
                  <input
                    type="radio"
                    name="salaryComponents"
                    value="true"
                    checked={salaryComponent}
                    onChange={() => setSalaryComponent(true)}
                  />{" "}
                  Yes
                  <input
                    type="radio"
                    name="salaryComponents"
                    value="false"
                    checked={!salaryComponent}
                    onChange={() => setSalaryComponent(false)}
                  />{" "}
                  No
                  </div>
                </div>
              </li>
              <li>
                <div className="radio-input-container">
                  <label>
                    <span>Merit Should Be Applied on? </span>
                  </label>
                  <div
                    className="radio-button-group"
                    style={{ paddingLeft: "43px" }}
                  >
                    <input
                    type="radio"
                    name="merit"
                    value="All component"
                    checked={meritAppliedOn.value === "All_Components"}
                    onChange={() =>
                      setMeritAppliedOn({ ...meritAppliedOn, value: "All_Components" })
                    }
                  />{" "}
                  All Components
                  <input
                    type="radio"
                    name="merit"
                    value="selectedcomponent"
                    checked={meritAppliedOn.value === "selectedComponents"}
                    onChange={() =>
                      setMeritAppliedOn({ ...meritAppliedOn, value: "selectedComponents" })
                    }
                  />{" "}
                  selectedcomponent
                  </div>
                </div>
              </li>

              <li className="component-box">
              <label htmlFor="componentname">Component name</label>
              <input
                type="text"
                value={meritAppliedOn.component}
                onChange={(e) =>
                  setMeritAppliedOn({
                    ...meritAppliedOn,
                    component: e.target.value,
                  })
                }
              />
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};

export default Salary_components;
