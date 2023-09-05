import  { useState } from 'react';
import "./Timebase.css"
import TopNav from '../../../layout/TopNav/TopNav';
import axios from 'axios';
import { BaseUrl } from '../../../ApiService/ApiService';
import { useDataContext } from '../../../Context/Context';
const TimeBasedBonus = ({ onNext, onBack, currentStep,setTimeBased,timeBased }) => {
  const [formData, setFormData] = useState({
    bonusProgram: '',
    eligibilityDate: {},
    bonusBasedOnSalary: false,
    bonusPercentage: 0,
    allowManagerRecommendation: false,
    managerRecommendation: 0,
    bonusGuidelinePercentage: 0,
    prorateBonus: false,
    preferredProrateUnit: '',
  });


  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleContinue = async () => {
    // Move to the next step
   
    onNext();
    setTimeBased((prevdata)=>({
      ...prevdata,
      name:formData.bonusProgram,
      eligibility_data:formData.eligibilityDate,
      bonus_based_on:formData.bonusBasedOnSalary,
      bonus_percentage:formData.bonusPercentage,
      manager_recommendation:formData.allowManagerRecommendation,
      manager_recommendation_percentage:formData.managerRecommendation,
      bonus_guideline_percentage:formData.bonusGuidelinePercentage,
      pro_rate_bonus:formData.prorateBonus,
      pro_rate_bonus_unit:formData.preferredProrateUnit,
    }))
    
    try {
      const headers = {
        "x-access-token": sessionStorage.getItem("token"),
      };
      const res = await axios.post(
        `${BaseUrl}/api/plan/time-based-bonus`,
        timeBased,
        { headers }
      );
      console.log("submited succesfully",res.data);
    } catch (error) {
      console.log("Api error",error);
    }

  };

  return (
    <>
       <TopNav tabActive={"plan"} activeStatus={"Bonus&Incentives"} firstStatusNumber={"9"} secondStatusNumber={"10"} thirdStatusNumber={"11"} firstStatus={"Bonus&Incentives"} secondStatus={"Bonus&IncentivesScheme"} thirdStatus ={"Review"}/>
      <div className="cyclewrapper">
    
    <div className="cycle">
        <div className="heading-container">
          <h4>Time Based Bonus</h4>

        </div>

        <div className="cyclecontainer">
          <h5>What do you call the bonus program?</h5>
          <div className="inputcontainer">
          <input
            type="text"
            value={formData.bonusProgram}
            onChange={(e) => handleInputChange('bonusProgram', e.target.value)}
          />
          </div>
         
        </div>

        <div className="cyclecontainer">
          <h5>What is the eligibility? (joined on or before)</h5>
          <div className="inputcontainer">
          <input
            type="date"
            value={formData.eligibilityDate}
            onChange={(e) => handleInputChange('eligibilityDate', e.target.value)}
          />
          </div>
          
        </div>

       

        <div className="cyclecontainer">
          <h5>Is the bonus based on salary?</h5>
          <div className="inputcontainer">
          <label>
            <input
              type="radio"
              value="true"
              onChange={() => handleInputChange('bonusBasedOnSalary',true)}
              checked={formData.bonusBasedOnSalary }
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="false"
              onChange={() => handleInputChange('bonusBasedOnSalary',false)}
              checked={!formData.bonusBasedOnSalary }
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
            value={formData.bonusPercentage}
            onChange={(e) => handleInputChange('bonusPercentage', e.target.value)}
          />
          </div>
          
        </div>

        <div className="cyclecontainer">
          <h5>Do you want to allow manager-recommendation?</h5>
          <div className="radiobuttons">
          <label>
            <input
              type="radio"
              value="true"
              onChange={() => handleInputChange('allowManagerRecommendation',true)}
              checked={formData.allowManagerRecommendation}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              onChange={() => handleInputChange('allowManagerRecommendation', false)}
              checked={!formData.allowManagerRecommendation }
            />
            No
          </label>
          </div>
        </div>

        <div className="cyclecontainer">
          <h5>What is the manager recommendation percentage?</h5>
          <div className="inputcontainer">
          <input
            type="number"
            value={formData.managerRecommendation}
            onChange={(e) => handleInputChange('managerRecommendation', e.target.value)}
          />
          </div>
        </div>

        <div className="cyclecontainer">
          <h5>What is the bonus guideline percentage?</h5>
          <div className="inputcontainer">
          <input
            type="number"
            value={formData.bonusGuidelinePercentage}
            onChange={(e) => handleInputChange('bonusGuidelinePercentage', e.target.value)}
          />
          </div>
        
        </div>
      
        <div className="cyclecontainer">
          <h5>Do you like to prorate the bonus?</h5>
          <div className="radiobuttons">
          <label>
            <input
              type="radio"
              value="true"
              onChange={() => handleInputChange('prorateBonus', true)}
              checked={formData.prorateBonus }
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="false"
              onChange={() => handleInputChange('prorateBonus', false)}
              checked={!formData.prorateBonus}
            />
            No
          </label>
          </div>
        </div>

        <div className="cyclecontainer">
          <h5>What is the preferred unit to prorate?</h5>
          <div className="radiobuttons">
          <label>
            <input
              type="radio"
              value="Monthly"
              onChange={(e) => handleInputChange('preferredProrateUnit', e.target.value)}
              checked={formData.preferredProrateUnit === 'Monthly'}
            />
            Monthly
          </label>
          <label>
            <input
              type="radio"
              value="Weekly"
              onChange={(e) => handleInputChange('preferredProrateUnit', e.target.value)}
              checked={formData.preferredProrateUnit === 'Weekly'}
            />
            Weekly
          </label>
          <label>
            <input
              type="radio"
              value="Daily"
              onChange={(e) => handleInputChange('preferredProrateUnit', e.target.value)}
              checked={formData.preferredProrateUnit === 'Daily'}
            />
            Daily
          </label>
          <label>
            <input
              type="radio"
              value="Hourly"
              onChange={(e) => handleInputChange('preferredProrateUnit', e.target.value)}
              checked={formData.preferredProrateUnit === 'Hourly'}
            />
            Hourly
          </label>
          </div>
          
        </div>
</div>

        <div className="button-container">
          {currentStep > 0 && <button onClick={onBack} className='back_button'>Back</button>}
          <button onClick={handleContinue} className='continue_button'>Continue</button>
        </div>
      </div>
    </>
  );
};

export default TimeBasedBonus;