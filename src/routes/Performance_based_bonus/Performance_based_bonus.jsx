import "./Performance_based.css";

const Performance_based_bonus = () => {
  return (
    <>
      <div className="wrapper-right">
        <form action="">
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
                <input type="text" placeholder="formula" />
              </li>
              <li>
                <div className="radio-Performance">
                  <h4>Bonus recofrom Suprfor the next cycle (Th.)</h4>
                  <div
                    className="radio-button-performance"
                    style={{ paddingLeft: "43px" }}
                  >
                    <input
                      type="radio"
                      name="Attachments"
                      value="yes"
                      defaultChecked
                    />{" "}
                    Allow
                    <input type="radio" name="Attachments" value="no" />
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
                      name="HROverride"
                      value="yes"
                      defaultChecked
                    />{" "}
                    Auto
                    <input type="radio" name="HROverride" value="no" /> manual
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
                      name="HROverride"
                      value="yes"
                      defaultChecked
                    />{" "}
                    Yes
                    <input type="radio" name="HROverride" value="no" />
                    No
                  </div>
                </div>
              </li>
            </ul>
            <div className="heading-container">
              <h4>Step Increment </h4>
              <div className="underline-grey"></div>
            </div>
            <ul className="Salary-inputbox-list salary-list">
              <li>
                <div className="radio-input-container">
                  <div className="radio-button-group">
                    <input
                      type="radio"
                      name="HROverride"
                      value="yes"
                      defaultChecked
                    />{" "}
                    All
                    <input type="radio" name="HROverride" value="no" />
                    Group Wise
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

export default Performance_based_bonus;
