import  { useState } from 'react';
import Navbar from '../../../layout/Navbar';
import BonusIncentives from '../BonusIncentives/BonusIncentives';
import Component_Currency from '../Component&Currency/Component_Currency';
import Lumpsumcorrection from '../Lumpsum&correction/Lumpsumcorrection';
import ParityGuideline from '../ParityandGuideline/ParityGuideline';
import Promotion from '../Promotion/Promotion';
import Proration from '../Prorations/Proration';
import SplitandMatrix from '../SplitandMatrix/splitandMatrix';
import CycleEligibility from '../Userplan/PlanData/cycleEligibility/CycleEligibility';
import PayGroups from '../paygroups/PayGroups';
import Time_based_bonus from '../Time_based_Bonus/Time_based_bonus';
import Performancebasedbonus from '../PerformanceBasedBonus/Performancebasedbonus';

const PlanData = () => {
  const [currentStep, setCurrentStep] = useState(0);
const[Data,setPlandataValues]=useState({
            cycle_type:"",
            cycle_from:"",
            cycle_to:"",
            eligibility_type:"",
            eligibility_date:"",
            eligibility_percentage:"",
            salary_component:"",
            salary_component_list:{},
            global_currency:"",
            global_currency_list:"",
            prorate:"",
            prorate_unit:"",
            off_cycle_prorate:"",
            off_cycle_prorate_unit:"",
            parity:"",
            merit_guidline:"",
            supervisor_validation:"",
            split_recommendation:"",
            calculation_split_recommendation:"",
            matrix_recommendation:"",
            calculation_matrix_recommendation:"",
            paygroups:"",
            paygroups_name:"",
            enable_recommendation:"",
            pay_range_min:"",
            pay_range_max:"",
            enable_bonus_incentives:"",
            use_diff_bonus_incentives:"",
            basis_of_bonus:"",
            bonus_list:"",
            merit_group_list:"",
            bonus_group_list:"",
            budget_value:"",
            budget_unit:"",
            hold_back:"",
            hold_back_value:"",
            hold_back_unit:"",
            statutory_increment:"",
            employee_group:"",
            increment_value:"",
            increment_unit:"",
})
const handleNext = () => {
  setCurrentStep(prevStep => prevStep + 1);
  
};

const handleBack = () => {
  setCurrentStep(prevStep => prevStep - 1);
};
console.log(Data);
  console.log(currentStep);
  const getComponentByStep = (step) => {
    switch (step) {
      case 0:
        return (
          <CycleEligibility onNext={handleNext} onBack={handleBack} currentStep={currentStep} setPlandataValues={setPlandataValues} />
        );
      case 1:
        return (
          <Component_Currency onNext={handleNext} onBack={handleBack} currentStep={currentStep} setPlandataValues={setPlandataValues} />
        );
      case 2:
        return (
          <Proration onNext={handleNext} onBack={handleBack} currentStep={currentStep} setPlandataValues={setPlandataValues} />
        );
      case 3:
        return (
          <ParityGuideline onNext={handleNext} onBack={handleBack} currentStep={currentStep} setPlandataValues={setPlandataValues} />
        );
      case 4:
        return (
          <SplitandMatrix onNext={handleNext} onBack={handleBack} currentStep={currentStep} setPlandataValues={setPlandataValues}/>
        );
      case 5:
        return (
          <PayGroups onNext={handleNext} onBack={handleBack} currentStep={currentStep} setPlandataValues={setPlandataValues}/>
        );
      case 6:
        return (
          <Lumpsumcorrection onNext={handleNext} onBack={handleBack} currentStep={currentStep} setPlandataValues={setPlandataValues}/>
        );
      case 7:
        return (
          <Promotion onNext={handleNext} onBack={handleBack} currentStep={currentStep} setPlandataValues={setPlandataValues}/>
        );
      case 8:
        return (
          <BonusIncentives onNext={handleNext} onBack={handleBack} currentStep={currentStep} setPlandataValues={setPlandataValues}/>
        );
        case 9:
          return (
            <Time_based_bonus onNext={handleNext} onBack={handleBack} currentStep={currentStep} setPlandataValues={setPlandataValues}/>
          );
          case 10:
          return (
            <Performancebasedbonus onNext={handleNext} onBack={handleBack} currentStep={currentStep} />
          )
      default:
        return null;
    }
  };

  const displayedComponent = getComponentByStep(currentStep);

  return (
    <div>
      <Navbar />
      {displayedComponent}
    </div>
  );
};

export default PlanData;