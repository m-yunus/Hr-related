import React, { useState } from 'react';
import "./performancebasedbonus.css";
import TopNav from '../../../layout/TopNav/TopNav';
import axios from 'axios';
import { BaseUrl } from '../../../ApiService/ApiService';
import { useDataContext } from '../../../Context/Context';

const Performancebasedbonus = ({ onNext, onBack, currentStep, setPerformanceBased, performanceBased }) => {
  const [formData, setFormData] = useState({
    name: "",
    eligibility_data: "",
    bonus_based_on_salary: false,
    bonus_percentage: 0,
    performance_rating: false,
    name_of_bonus_factor: "",
    bonus_table: [],
    bonus_multiplier: false,
    org_bonus_multiplier: 0,
    team_score: 0,
    manager_recommendation: false,
    manager_recommendation_percentage: 0,
    bonus_guideline_percentage: 0,
    pro_rate_bonus: false,
    pro_rate_bonus_unit: ""
  });
  const {setProgressvalue}=useDataContext()
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleContinue = async () => {
    onNext();
  
    setPerformanceBased((prevdata) => ({
      ...prevdata,
      name: formData.name,
      eligibility_data: formData.eligibility_data,
      bonus_based_on_salary: formData.bonus_based_on_salary,
      bonus_percentage: formData.bonus_percentage,
      performance_rating: formData.performance_rating,
      name_of_bonus_factor: formData.name_of_bonus_factor,
      bonus_table: formData.bonus_table,
      bonus_multiplier: formData.bonus_multiplier,
      org_bonus_multiplier: formData.org_bonus_multiplier,
      team_score: formData.team_score,
      manager_recommendation: formData.manager_recommendation,
      manager_recommendation_percentage: formData.manager_recommendation_percentage,
      bonus_guideline_percentage: formData.bonus_guideline_percentage,
      pro_rate_bonus: formData.pro_rate_bonus,
      pro_rate_bonus_unit: formData.pro_rate_bonus_unit
    }));

    try {
      const headers = {
        "x-access-token": sessionStorage.getItem("token"),
      };
      const res = await axios.post(
        `${BaseUrl}/api/plan/performance-bonus`,
        performanceBased,
        { headers }
      );
      console.log("Submitted successfully", res.data);
    } catch (error) {
      console.log("API error", error);
    }
  };

  console.log(performanceBased);

  return (
    <>
      <TopNav tabActive="plan" activeStatus="Bonus&Incentives" firstStatusNumber="9" secondStatusNumber="10" thirdStatusNumber="11" firstStatus="Bonus&Incentives" secondStatus="Bonus&IncentivesScheme" thirdStatus="Review" />
      <div className="cyclewrapper">
        <div className="cycle">
          <div className="heading-container">
            <h4>Performance Based Bonus</h4>
          </div>


          <div className="cyclecontainer">
            <h5>What do you call the bonus program?</h5>
            <div className="inputcontainer">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
          </div>

          <div className="cyclecontainer">
            <h5>What is the eligibility? (joined on or before)</h5>
            <div className="inputcontainer">
              <input
                type="date"
                value={formData.eligibility_data}
                onChange={(e) => handleInputChange('eligibility_data', e.target.value)}
              />
            </div>
          </div>

          <div className="cyclecontainer">
            <h5>Is the bonus based on salary?</h5>
            <div className="radiobuttons">
              <label>
                <input
                  type="radio"
                  value={true}
                  onChange={() => handleInputChange('bonus_based_on_salary', true)}
                  checked={formData.bonus_based_on_salary}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value={false}
                  onChange={() => handleInputChange('bonus_based_on_salary', false)}
                  checked={!formData.bonus_based_on_salary}
                />
                No
              </label>
            </div>
          </div>

          <div className="cyclecontainer">
            <h5>How much bonus as a percentage of salary:</h5>
            <div className="inputcontainer">
              <input
                type="number"
                value={formData.bonus_percentage}
                onChange={(e) => handleInputChange('bonus_percentage', e.target.value)}
              />
            </div>
          </div>

          <div className="cyclecontainer">
            <h5>Is the bonus based on Performance rating</h5>
            <div className="radiobuttons">
              <label>
                <input
                  type="radio"
                  value={true}
                  onChange={() => handleInputChange('performance_rating', true)}
                  checked={formData.performance_rating}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value={false}
                  onChange={() => handleInputChange('performance_rating', false)}
                  checked={!formData.performance_rating}
                />
                No
              </label>
            </div>
          </div>

          <div className="cyclecontainer">
            <h5>Name of the bonus factor</h5>
            <div className="inputcontainer">
              <input
                type="text"
                value={formData.name_of_bonus_factor}
                onChange={(e) => handleInputChange('name_of_bonus_factor', e.target.value)}
              />
            </div>
          </div>

          <div className="cyclecontainer">
            <h5>Do you want to use bonus multiplier</h5>
            <div className="inputcontainer">
              <input
                type="number"
                value={formData.org_bonus_multiplier}
                onChange={(e) => handleInputChange('org_bonus_multiplier', e.target.value)}
              />
              <input
                type="number"
                value={formData.team_score}
                onChange={(e) => handleInputChange('team_score',  e.target.value)}
              />
              <input
                type="number"
                value={formData.bonus_multiplier[2]}
                onChange={(e) => handleInputChange('bonus_multiplier', [formData.bonus_multiplier[0], formData.bonus_multiplier[1], e.target.value])}
              />
            </div>
          </div>

          <div className="cyclecontainer">
            <h5>Do you want to allow manager recommendation</h5>
            <div className="radiobuttons">
              <label>
                <input
                  type="radio"
                  value={true}
                  onChange={() => handleInputChange('manager_recommendation', true)}
                  checked={formData.manager_recommendation}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value={false}
                  onChange={() => handleInputChange('manager_recommendation', false)}
                  checked={!formData.manager_recommendation}
                />
                No
              </label>
            </div>
          </div>

          <div className="cyclecontainer">
            <h5>what is the manager recommendation percentage</h5>
            <div className="inputcontainer">
              <input
                type="number"
                value={formData.manager_recommendation_percentage}
                onChange={(e) => handleInputChange('manager_recommendation_percentage', e.target.value)}
              />
            </div>
          </div>

          <div className="cyclecontainer">
            <h5>what is the bonus guideline percentage</h5>
            <div className="inputcontainer">
              <input
                type="number"
                value={formData.bonus_guideline_percentage}
                onChange={(e) => handleInputChange('bonus_guideline_percentage', e.target.value)}
              />
            </div>
          </div>

          <div className="cyclecontainer">
            <h5>Do you like to prorate the bonus</h5>
            <div className="radiobuttons">
              <label>
                <input
                  type="radio"
                  value={true}
                  onChange={() => handleInputChange('pro_rate_bonus', true)}
                  checked={formData.pro_rate_bonus}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  onChange={() => handleInputChange('pro_rate_bonus', false)}
                  checked={!formData.pro_rate_bonus}
                />
                No
              </label>
            </div>
          </div>

          <div className="cyclecontainer">
            <h5>What is the preferred unit to prorate</h5>
            <div className="radiobuttons">
              <label>
                <input
                  type="radio"
                  value="Monthly"
                  onChange={(e) => handleInputChange('pro_rate_bonus_unit', e.target.value)}
                  checked={formData.pro_rate_bonus_unit === 'Monthly'}
                />
                Monthly
              </label>
              <label>
                <input
                  type="radio"
                  value="Weekly"
                  onChange={(e) => handleInputChange('pro_rate_bonus_unit', e.target.value)}
                  checked={formData.pro_rate_bonus_unit === 'Weekly'}
                />
                Weekly
              </label>
              <label>
                <input
                  type="radio"
                  value="Daily"
                  onChange={(e) => handleInputChange('pro_rate_bonus_unit', e.target.value)}
                  checked={formData.pro_rate_bonus_unit === 'Daily'}
                />
                Daily
              </label>
              <label>
                <input
                  type="radio"
                  value="Hourly"
                  onChange={(e) => handleInputChange('pro_rate_bonus_unit', e.target.value)}
                  checked={formData.pro_rate_bonus_unit === 'Hourly'}
                />
                Hourly
              </label>
            </div>
          </div>


          <div className="button-container">
            {currentStep > 0 && <button onClick={onBack} className='back_button'>Back</button>}
            <button onClick={handleContinue} className='continue_button'>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performancebasedbonus;
