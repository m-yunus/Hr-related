import { useState } from 'react';

const Performancebasedbonus = ({ onNext, onBack, currentStep,setPerformanceBased }) => {
  const [formData, setFormData] = useState({
    bonusProgram: '',
    eligibilityDate: '',
    bonusBasedOnSalary: '',
    bonusPercentage: '',
    bonusBasedOnPerformance: '',
    bonusFactorName: '',
    useBonusMultiplier: ['', '', ''],
    managerRecommendation: '',
    managerRecommendationPercentage:"",
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

    setPerformanceBased((prevdata)=>({
      ...prevdata,
      name:formData.bonusProgram,
  eligibility_data:formData.eligibilityDate,
  bonus_based_on_salary:formData.bonusBasedOnSalary,
  bonus_percentage:formData.bonusPercentage,
  performance_rating:formData.bonusBasedOnPerformance,
  name_of_bonus_factor:formData.bonusFactorName,
  bonus_table:"",
  bonus_multiplier:formData.useBonusMultiplier,
  org_bonus_multiplier:"",
  team_score:"",
  manager_recommendation:formData.managerRecommendation,
  manager_recommendation_percentage:formData.managerRecommendationPercentage,
  bonus_guideline_percentage:formData.bonusGuidelinePercentage,
  pro_rate_bonus:formData.prorateBonus,
  pro_rate_bonus_unit:formData.preferredProrateUnit
    }))
    

  };

  return (
    <>
      <div className="cyclewrapper">
        <div className="heading-container">
          <h4>Performance Based Bonus</h4>
          <div className="underline-grey"></div>
        </div>

        <div className="componentradios">
          <h5>What do you call the bonus program?</h5>
          <input
            type="text"
            value={formData.bonusProgram}
            onChange={(e) => handleInputChange('bonusProgram', e.target.value)}
          />
        </div>

        <div className="componentradios">
          <h5>What is the eligibility? (joined on or before)</h5>
          <input
            type="date"
            value={formData.eligibilityDate}
            onChange={(e) => handleInputChange('eligibilityDate', e.target.value)}
          />
        </div>

        <hr />

        <div className="componentradios">
          <h5>Is the bonus based on salary?</h5>
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

        <div className="componentradios">
          <h5>How much bonus as a percentage of salary:</h5>
          <input
            type="text"
            value={formData.bonusPercentage}
            onChange={(e) => handleInputChange('bonusPercentage', e.target.value)}
          />
        </div>
      
        <div className="componentradios">
          <h5>Is the bonus based on Performance rating</h5>
          <label>
            <input
              type="radio"
              value="yes"
              onChange={(e) => handleInputChange('bonusBasedOnPerformance', e.target.value)}
              checked={formData.bonusBasedOnPerformance === 'yes'}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              onChange={(e) => handleInputChange('bonusBasedOnPerformance', e.target.value)}
              checked={formData.bonusBasedOnPerformance === 'no'}
            />
            No
          </label>
        </div>

        <div className="componentradios">
          <h5>Name of the bonus factor</h5>
          <input
            type="text"
            value={formData.bonusFactorName}
            onChange={(e) => handleInputChange('bonusFactorName', e.target.value)}
          />
        </div>

        <div className="componentradios">
          <h5>Do you want to use bonus multiplier</h5>
          <input
            type="text"
            value={formData.useBonusMultiplier[0]}
            onChange={(e) => handleInputChange('useBonusMultiplier', [e.target.value, ...formData.useBonusMultiplier.slice(1)])}
          />
          <input
            type="text"
            value={formData.useBonusMultiplier[1]}
            onChange={(e) => handleInputChange('useBonusMultiplier', [formData.useBonusMultiplier[0], e.target.value, ...formData.useBonusMultiplier.slice(2)])}
          />
          <input
            type="text"
            value={formData.useBonusMultiplier[2]}
            onChange={(e) => handleInputChange('useBonusMultiplier', [formData.useBonusMultiplier[0], formData.useBonusMultiplier[1], e.target.value])}
          />
        </div>
        <div className="componentradios">
          <h5>Do you want to allow manager recommendation</h5>
          <label>
            <input
              type="radio"
              value="yes"
              onChange={(e) => handleInputChange('managerRecommendation', e.target.value)}
              checked={formData.managerRecommendation === 'yes'}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              onChange={(e) => handleInputChange('managerRecommendation', e.target.value)}
              checked={formData.managerRecommendation === 'no'}
            />
            No
          </label>
        </div>
        <div className="componentradios">
          <h5>what is the manager recommendation percentage</h5>
          <input
            type="text"
            value={formData.managerRecommendationPercentage}
            onChange={(e) => handleInputChange('managerRecommendationPercentage', e.target.value)}
          />
        </div>
        

        <div className="componentradios">
          <h5>what is the bonus guideline percentage</h5>
          <input
            type="text"
            value={formData.bonusGuidelinePercentage}
            onChange={(e) => handleInputChange('bonusGuidelinePercentage', e.target.value)}
          />
        </div>

        <div className="componentradios">
          <h5>Do you like to prorate the bonus</h5>
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

        <div className="componentradios">
          <h5>What is the preferred unit to prorate</h5>
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

        <div className="button-container">
          {currentStep > 0 && <button onClick={onBack}>Back</button>}
          <button onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </>
  );
};

export default Performancebasedbonus;