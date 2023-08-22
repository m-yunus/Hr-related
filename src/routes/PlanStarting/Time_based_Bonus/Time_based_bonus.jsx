import  { useState } from 'react';
import "./Timebase.css"
const TimeBasedBonus = ({ onNext, onBack, currentStep,setTimeBased }) => {
  const [formData, setFormData] = useState({
    bonusProgram: '',
    eligibilityDate: '',
    bonusBasedOnSalary: '',
    bonusPercentage: '',
    allowManagerRecommendation: '',
    managerRecommendation: '',
    bonusGuidelinePercentage: '',
    prorateBonus: '',
    preferredProrateUnit: '',
  });



  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleContinue = () => {
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
    


  };

  return (
    <>
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
              value="yes"
              onChange={(e) => handleInputChange('bonusBasedOnSalary', e.target.value)}
              checked={formData.bonusBasedOnSalary === 'yes'}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              onChange={(e) => handleInputChange('bonusBasedOnSalary', e.target.value)}
              checked={formData.bonusBasedOnSalary === 'no'}
            />
            No
          </label>
          </div>
      
        </div>

        <div className="cyclecontainer">
          <h5>How much bonus as a percentage of salary:</h5>
          <div className="inputcontainer">
          <input
            type="text"
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
              value="yes"
              onChange={(e) => handleInputChange('allowManagerRecommendation', e.target.value)}
              checked={formData.allowManagerRecommendation === 'yes'}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              onChange={(e) => handleInputChange('allowManagerRecommendation', e.target.value)}
              checked={formData.allowManagerRecommendation === 'no'}
            />
            No
          </label>
          </div>
        </div>

        <div className="cyclecontainer">
          <h5>What is the manager recommendation percentage?</h5>
          <div className="inputcontainer">
          <input
            type="text"
            value={formData.managerRecommendation}
            onChange={(e) => handleInputChange('managerRecommendation', e.target.value)}
          />
          </div>
        </div>

        <div className="cyclecontainer">
          <h5>What is the bonus guideline percentage?</h5>
          <div className="inputcontainer">
          <input
            type="text"
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
              value="yes"
              onChange={(e) => handleInputChange('prorateBonus', e.target.value)}
              checked={formData.prorateBonus === 'yes'}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              onChange={(e) => handleInputChange('prorateBonus', e.target.value)}
              checked={formData.prorateBonus === 'no'}
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