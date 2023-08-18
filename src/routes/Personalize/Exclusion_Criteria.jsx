import axios from "axios";
import  { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { BaseUrl } from "../../ApiService/ApiService";

const ExclusionCriteria = () => {
  const [checkboxStates, setCheckboxStates] = useState({
    merit: true,
    bonus: false,
  });
  const [criteria, setCriteria] = useState("");
  const [value, setValue] = useState("");
  const [exclusionList, setExclusionList] = useState([]);

  const handleAdd = () => {
    const newExclusionList = {
      criteria: criteria,
      value: value,
      merit: checkboxStates.merit,
      bonus: checkboxStates.bonus,
    };
    setExclusionList((prevList) => [...prevList, newExclusionList]);
  
  };

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [name]: !prevStates[name],
    }));
  };

  const handleDelete = (index) => {
    const updatedExclusions = exclusionList.filter((_, i) => i !== index);
    setExclusionList(updatedExclusions);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("added");
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/api/personalize/exclusion-criteria`,
        {exclusion_criteria:exclusionList},
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
       
          <div className="dash-right-top">
            <div className="pathname">
              <h3>
                <span style={{ color: "skyblue" }}>Personalize</span>{" "}
                <span>/ Exclusion Criteria</span>
              </h3>
            </div>
            <input type="submit" className="update-button" value="Update"  onClick={handleSubmit}/>
          </div>
          <div className="content-container">
            <div className="heading-container">
              <h4>Exclusion Criteria</h4>
              <div className="underline-grey"></div>
            </div>
            <ul className="Culture-inputbox-list">
              <li>
                <input
                  type="text"
                  placeholder="Select Criteria"
                  value={criteria}
                  onChange={(e) => setCriteria(e.target.value)}
                />
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Select Value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </li>
              <li>
                <div className="checkbox-input-container">
                  <div className="checkbox-exclusion">
                    <input
                      type="checkbox"
                      name="merit"
                      value="merit"
                      checked={checkboxStates.merit}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-label">Merit</span>
                  </div>
                  <div className="checkbox-exclusion">
                    <input
                      type="checkbox"
                      name="bonus"
                      value="bonus"
                      checked={checkboxStates.bonus}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-label">Bonus</span>
                  </div>
                </div>
              </li>
              <li>
                <button className="update-button" onClick={handleAdd}>
                  Add
                </button>
              </li>
            </ul>
            <div className="heading-container" style={{ marginTop: "1rem" }}>
              <h4>Exclusion list</h4>
              <div className="underline-grey"></div>
            </div>
            <ul className="exclusion-list">
              {exclusionList.map((exclusion, index) =>  (

                <li key={index}>
                  <div style={{ textAlign: "justify" }}>
                    <span>Criteria: {exclusion.criteria}</span>
                    <span>Value: {exclusion.value}</span>
                    <span className={exclusion.merit ? "merit-Bonus" : "bg-white"}>
                      {exclusion.merit ? "Merit" : ""}
                    </span>
                    <span className={exclusion.bonus ? "merit-Bonus" : "bg-white"}>
                      {exclusion.bonus ? "Bonus" : ""}
                    </span>
                  </div>
                  <button
                    className="delete-button"
                    style={{ marginLeft: "1rem" }}
                    onClick={() => handleDelete(index)}
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
          </div>
       
      </div>
    </>
  );
};

export default ExclusionCriteria;
