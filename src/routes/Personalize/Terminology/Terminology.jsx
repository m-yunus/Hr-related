import  { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../../ApiService/ApiService";
import "./Terminology.css";

const Terminology = () => {
  const [terminologyValues, setTerminologyValues] = useState({
    my_team: "",
    salary: "",
    compa_ratio: "",
    percentage: "",
    range_penetration: "",
    recommendation: "",
    new_salary: "",
    median_salary: "",
    medium_salary: "",
    guideline:""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/api/personalize/terminology`,
        terminologyValues,
        { headers }
      );
      console.log("form submitted successfully", response.data);
    } catch (error) {
      console.log("Api error", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTerminologyValues((prevValues) => ({
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
      <label htmlFor="my_team">Type your term</label>
      <input type="text" name="my_team" value={terminologyValues.my_team} onChange={handleInputChange} />
    </li>
    <li>Salary</li>
    <li>
      <label htmlFor="salary">Type your term</label>
      <input type="text" name="salary" value={terminologyValues.salary} onChange={handleInputChange}/>
    </li>
    <li>Comp-ratio</li>
    <li>
      <label htmlFor="compa_ratio">Type your term</label>
      <input type="text" name="compa_ratio" value={terminologyValues.compa_ratio} onChange={handleInputChange}/>
    </li>
    <li>Range penitriation</li>
    <li>
      <label htmlFor="range_penetration">Type your term</label>
      <input type="text" name="range_penetration" value={terminologyValues.range_penetration} onChange={handleInputChange} />
    </li>
    <li>Guideline</li>
    <li>
      <label htmlFor="guideline">Type your term</label>
      <input type="text" name="guideline" value={terminologyValues.guideline} onChange={handleInputChange} />
    </li>
    <li>Recommendation</li>
    <li>
      <label htmlFor="recommendation">Type your term</label>
      <input type="text" name="recommendation" value={terminologyValues.recommendation} onChange={handleInputChange} />
    </li>
    <li>new salary</li>
    <li>
      <label htmlFor="new_salary">Type your term</label>
      <input type="text" name="new_salary" value={terminologyValues.new_salary} onChange={handleInputChange} />
    </li>
    <li>median salary</li>
    <li>
      <label htmlFor="median_salary">Type your term</label>
      <input type="text" name="median_salary" value={terminologyValues.median_salary} onChange={handleInputChange} />
    </li>
    <li>medium salary</li>
    <li>
      <label htmlFor="medium_salary">Type your term</label>
      <input type="text" name="medium_salary" value={terminologyValues.medium_salary} onChange={handleInputChange} />
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
  