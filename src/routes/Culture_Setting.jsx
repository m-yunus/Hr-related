// import { useLocation } from "react-router-dom";

const Culture_Setting = () => {
  // const location = useLocation();

  return (
    <>
      <div className="wrapper-right">
      <form action="">
     
        <div className="dash-right-top">
      
          <div className="pathname">
            <h3>
              <span style={{ color: "skyblue" }}>Personalize</span>{" "}
              <span>/ Culture Settings</span>
            </h3>
          </div>
          <input type="submit" className="update-button" value="Update"/>
        
        </div>
        <div className="content-container">
          <div className="heading-container">
            <h4>Culture Setting</h4>
            <div className="underline-grey"></div>
          </div>

          <ul className="Culture-inputbox-list">
            <li>
              <label htmlFor="country">Select country</label>
              <input type="text"  name="country" />
            </li>
            <li>
            <label htmlFor="number">Select Number</label>
              <input type="number"  name="number" />
            </li>
            <li>
            <label htmlFor="currency">Select Currency</label>
              <input type="text" name="currency" />
            </li>
            <li>
              <label htmlFor="percentage">Select Percentage</label>
              <input type="text" name="percentage" />
            </li>
            <li>
              <label htmlFor="Date">Select date</label>
              <input type="text" name="Date" />
            </li>
            <li>
              <label htmlFor="Timezone">Select Timezone</label>
              <input type="text" name="Timezone" />
            </li>
          </ul>
          <div className="heading-container" style={{ paddingTop: "1rem" }}>
            <h4>Rounding Rule</h4>
            <div className="underline-grey"></div>
          </div>

          <ul className="Culture-inputbox-list">
            <li>
            <label   htmlFor="rounding-percentage">Select Percerntage</label>
              <input type="text"  name="rounding-percentage" />
            </li>
            <li>
            <label   htmlFor="rounding-percentage">Select Number</label>
              <input type="number" name="rounding number" />
            </li>
            <li>
              <label htmlFor="rounding-curency">Select Currency</label>
              <input type="text" name="rounding-currency" />
            </li>
          </ul>
        </div>
      </form>
      </div>
    </>
  );
};

export default Culture_Setting;
