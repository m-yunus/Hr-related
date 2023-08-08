import  { useState } from "react";
import { FaTrash } from "react-icons/fa";

const ExclusionCriteria = () => {
  const [criteria, setCriteria] = useState("");
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState([]);
  const [exclusionList, setExclusionList] = useState([]);

  const handleAdd = () => {
    const newExclusionList = {
      criteria: criteria,
      value: value,
      merits: checked.includes("Merit"),
      Bonus: checked.includes("Bonus"),
    };
    setExclusionList([...exclusionList, newExclusionList]);
    setCriteria("");
    setValue("");
    setChecked([]);
  };

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
const handleDelete = (index) => {
  const updatedExclusions = exclusionList.filter((exclusion, i) => i !== index);
  setExclusionList(updatedExclusions);
};


  return (
    <>
    <div className="wrapper-right">
      <form action="">
      <div className="dash-right-top">
      
      <div className="pathname">
        <h3>
          <span style={{ color: "skyblue" }}>Personalize</span>{" "}
          <span>/ Exclusion Criteria</span>
        </h3>
      </div>
      <input type="submit" className="update-button" value="Update"/>
    
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
                name="Merit"
                value="Merit"
                checked={checked.includes("Merit")}
                onChange={handleCheck}
              />
              <span className="checkbox-label">Merit</span>
            </div>
            <div className="checkbox-exclusion">
              <input
                type="checkbox"
                name="Bonus"
                value="Bonus"
                checked={checked.includes("Bonus")}
                onChange={handleCheck}
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
      <ul className="exclusion-list" >
  {exclusionList.map((exclusion, index) => (
    <li key={index} >
      <div style={{textAlign:"justify"}}>
        <span>Criteria: {exclusion.criteria}</span>
        <span>Value: {exclusion.value}</span>
        <span className={exclusion.merits ? "merit-Bonus" : "bg-white"}>{exclusion.merits ? "Merit" : ""}</span>
        <span className={exclusion.Bonus ? "merit-Bonus" : "bg-white"}>{exclusion.Bonus ? "Bonus" : ""}</span>
      </div>
      <button className="delete-button" style={{ marginLeft: "1rem" }} onClick={() => handleDelete(index)}>
        <FaTrash  />
      </button>
    </li>
  ))}
</ul>
</div>
</form>
</div>
    </>
  );
};

export default ExclusionCriteria;
