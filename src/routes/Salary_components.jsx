const Salary_components = () => {
  return (
    <>
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
                value="yes"
                defaultChecked
              />{" "}
              Yes
              <input type="radio" name="salaryComponents" value="no" /> No
            </div>
          </div>
        </li>
        <li>
          <div className="radio-input-container">
            <label>
              <span>Merit Should Be Applied on? </span>
            </label>
            <div className="radio-button-group" style={{ paddingLeft: "43px" }}>
              <input
                type="radio"
                name="salaryComponents"
                value="yes"
                defaultChecked
              />{" "}
              Yes
              <input type="radio" name="salaryComponents" value="no" /> No
            </div>
          </div>
        </li>

        <li>
          <input type="text" placeholder="Component name" />
        </li>
      </ul>
    </>
  );
};

export default Salary_components;
