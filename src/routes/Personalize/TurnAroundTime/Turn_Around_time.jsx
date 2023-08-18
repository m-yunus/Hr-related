import axios from "axios";
import { BaseUrl } from "../../../ApiService/ApiService";
import { useState } from "react";



const Turn_Around_time = () => {
  const [tatValue, setTatValue] = useState(0); // State to manage TAT value

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };

    try {
      const data = {
        tat: tatValue, // Include the TAT value in the request data
      };

      const response = await axios.post(`${BaseUrl}/api/personalize/tat`, data, { headers });
      console.log("form submitted successfully", response.data);
    } catch (error) {
      console.log("Api error", error);
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
              <span>/ Turn Around Time</span>
            </h3>
          </div>
          <input type="submit" className="update-button" value="Update"/>
        
        </div>
        <div className="content-container">
    <div className="heading-container">
        <h4>Turn Around Time</h4>
        <div className="underline-grey"></div>
      </div>

      <ul className="Culture-inputbox-list">
        <li>
          <h5>TAT for supervisors</h5>
        </li>
        <li>
        <input
                  type="number"
                  placeholder="Turn Around Time"
                  value={tatValue} 
                  onChange={(e) => setTatValue(e.target.value)} 
                />
        </li>
       
      </ul>
      </div>
      </form>
      </div>
 </>
  )
}

export default Turn_Around_time