import  { useState } from 'react';
import Navbar from '../../../../layout/Navbar';
import BonusIncentives from '../../BonusIncentives/BonusIncentives';
import Component_Currency from '../../Component&Currency/Component_Currency';
import Lumpsumcorrection from '../../Lumpsum&correction/Lumpsumcorrection';
import ParityGuideline from '../../ParityandGuideline/ParityGuideline';
import Promotion from '../../Promotion/Promotion';
import Proration from '../../Prorations/Proration';
import SplitandMatrix from '../../SplitandMatrix/splitandMatrix';
import CycleEligibility from '../../Userplan/PlanData/cycleEligibility/CycleEligibility';
import PayGroups from '../../paygroups/PayGroups';

const Plandata = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    console.log(currentStep);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);

  };
  console.log(currentStep);
  const getComponentByStep = (step) => {
    switch (step) {
      case 0:
        return (
          <CycleEligibility onNext={handleNext} onBack={handleBack} currentStep={currentStep} />
        );
      case 1:
        return (
          <Component_Currency onNext={handleNext} onBack={handleBack} currentStep={currentStep} />
        );
      case 2:
        return (
          <Proration onNext={handleNext} onBack={handleBack} currentStep={currentStep} />
        );
      case 3:
        return (
          <ParityGuideline onNext={handleNext} onBack={handleBack} currentStep={currentStep} />
        );
      case 4:
        return (
          <SplitandMatrix onNext={handleNext} onBack={handleBack} currentStep={currentStep} />
        );
      case 5:
        return (
          <PayGroups onNext={handleNext} onBack={handleBack} currentStep={currentStep} />
        );
      case 6:
        return (
          <Lumpsumcorrection onNext={handleNext} onBack={handleBack} currentStep={currentStep} />
        );
      case 7:
        return (
          <Promotion onNext={handleNext} onBack={handleBack} currentStep={currentStep} />
        );
      case 8:
        return (
          <BonusIncentives onNext={handleNext} onBack={handleBack} currentStep={currentStep} />
        );
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

export default Plandata;
