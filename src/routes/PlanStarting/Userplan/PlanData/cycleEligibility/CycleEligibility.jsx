import { useState } from "react";
import "./cycleEligibility.css";
import TopNav from "../../../../../layout/TopNav/TopNav";
import { useDataContext } from "../../../../../Context/Context";

const CycleEligibility = ({ onNext, onBack, currentStep, setPlandataValues }) => {
const {setProgressvalue}=useDataContext()


  const [cycleFrequency, setCycleFrequency] = useState("yearly");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eligibilityOption, setEligibilityOption] = useState("joinedUntil");
  const [eligibilityDate, setEligibilityDate] = useState("");

  const calculateHalfYearlyMinMaxDates = (selectedDate) => {
    const startDate = new Date(selectedDate);
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 6);
    return { startDate, endDate };
  };

  const handleCycleFrequencyChange = (newFrequency) => {
    setCycleFrequency(newFrequency);

    if (newFrequency === "yearly") {
      const currentYear = new Date().getFullYear();
      setStartDate(`${currentYear}-01-01`);
      setEndDate(`${currentYear}-12-31`);
    } else if (newFrequency === "halfYearly") {
      const today = new Date();
      const { startDate, endDate } = calculateHalfYearlyMinMaxDates(today);
      setStartDate(startDate.toISOString().split("T")[0]);
      setEndDate(endDate.toISOString().split("T")[0]);
    }
    else if(newFrequency==="projectbased"){
      setStartDate("");
      setEndDate("");
    }
  };

  const handleContinue = () => {
    onNext();
    setPlandataValues((prevdata) => ({
      ...prevdata,
      cycle_type: cycleFrequency,
      cycle_from: startDate,
      cycle_to: endDate,
      eligibility_type: eligibilityOption,
      eligibility_date: eligibilityDate,
    }));
setProgressvalue(prevdata=>prevdata+1);
  };

  return (
    <>
      <TopNav
        tabActive={"plan"}
        activeStatus={"Home"}
        firstStatusNumber={"0"}
        secondStatusNumber={"1"}
        thirdStatusNumber={"2"}
        firstStatus={"Home"}
        secondStatus={"Cycle&Eligibility"}
        thirdStatus={"Component&Currency"}
      />
      <div className="cyclewrapper">
        <div className="cycle">
          <div className="cyclecontainer">
            <div className="labels">
              <h5>What is merit cycle</h5>
            </div>
            <div className="radiobuttons">
              <label>
                <input
                  type="radio"
                  value="yearly"
                  name="merit"
                  checked={cycleFrequency === "yearly"}
                  onChange={() => handleCycleFrequencyChange("yearly")}
                />
                Yearly
              </label>
              <label>
                <input
                  type="radio"
                  name="merit"
                  value="halfYearly"
                  checked={cycleFrequency === "halfYearly"}
                  onChange={() => handleCycleFrequencyChange("halfYearly")}
                />
                Half-Yearly
              </label>
              <label>
                <input
                  type="radio"
                  name="merit"
                  value="projectbased"
                  checked={cycleFrequency === "projectbased"}
                  onChange={() => handleCycleFrequencyChange("projectbased")}
                />
               Project Based
              </label>
            </div>
          </div>

          <div className="cyclecontainer">
            <h5>What is the Period ?</h5>
            <div className="input-wrapper">

          
            <div className="inputcontainer">
              <label>Start Date:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="inputcontainer">
              <label>End Date:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          </div>
          <hr />

          <div className="heading-container">
            <h4>Eligibility</h4>
          </div>
          <div className="cyclecontainer">
            <h5>How do you want to define eligibility?</h5>
            <div className="radiobuttons">
              <label>
                <input
                  type="radio"
                  value="joinedUntil"
                  checked={eligibilityOption === "joinedUntil"}
                  onChange={(e) => setEligibilityOption(e.target.value)}
                />
                Joined Until
              </label>
              <label>
                <input
                  type="radio"
                  value="MinServiceduringMeritCycle"
                  checked={eligibilityOption === "MinServiceduringMeritCycle"}
                  onChange={(e) => setEligibilityOption(e.target.value)}
                />
                Min Service During the Merit Cycle
              </label>
              <div className="inputcontainer">
                <label>Start Date:</label>
                <input
                  type="date"
                  value={eligibilityDate}
                  onChange={(e) => setEligibilityDate(e.target.value)}
                />
              </div>
            </div>
         
              
         
          </div>
        </div>
      </div>
      <div className="button-container">
        {currentStep > 0 && <button onClick={onBack} className="back_button">Back</button>}
        <button onClick={handleContinue} className="continue_button">Continue</button>
      </div>
    </>
  );
};

export default CycleEligibility;
