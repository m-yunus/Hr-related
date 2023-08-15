// import { useLocation } from "react-router-dom";
import "./Terminology.css"
const Terminology = () => {
    // const location = useLocation();
  
    return (
      <>
        <div className="wrapper-right">
        <form action="">
       
          <div className="dash-right-top">
        
            <div className="pathname">
              <h3>
                <span style={{ color: "skyblue" }}>Personalize</span>{" "}
                <span>/ Terminology</span>
              </h3>
            </div>
            <input type="submit" className="update-button" value="Update"/>
          
          </div>
          <div className="content-container">
            <div className="heading-container">
              <h4>Terminologies</h4>
              <div className="underline-grey"></div>
            </div>
  <div className="Culture-inputbox-container">
  <ul className="Culture-inputbox-list">
    <li>My team</li>
    <li>
      <label htmlFor="country">Select country</label>
      <input type="text" name="country" />
    </li>
    <li>Salary</li>
    <li>
      <label htmlFor="number">Select Number</label>
      <input type="number" name="number" />
    </li>
    <li>Comp-ratio</li>
    <li>
      <label htmlFor="currency">Select Currency</label>
      <input type="text" name="currency" />
    </li>
    <li>Range penitriation</li>
    <li>
      <label htmlFor="percentage">Select Percentage</label>
      <input type="text" name="percentage" />
    </li>
    <li>Guideline</li>
    <li>
      <label htmlFor="Date">Select date</label>
      <input type="text" name="Date" />
    </li>
    <li>Recommendation</li>
    <li>
      <label htmlFor="Timezone">Select Timezone</label>
      <input type="text" name="Timezone" />
    </li>
    <li>new salary</li>
    <li>
      <label htmlFor="Timezone">Select Timezone</label>
      <input type="text" name="Timezone" />
    </li>
    <li>median salary</li>
    <li>
      <label htmlFor="Timezone">Select Timezone</label>
      <input type="text" name="Timezone" />
    </li>
    <li>medium salary</li>
    <li>
      <label htmlFor="Timezone">Select Timezone</label>
      <input type="text" name="Timezone" />
    </li>
  </ul>
</div>

          
          </div>
        </form>
        </div>
      </>
    );
  };
  
  export default Terminology;
  