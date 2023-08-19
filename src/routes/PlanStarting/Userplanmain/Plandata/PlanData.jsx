import Navbar from "../../../../layout/Navbar"
import BonusIncentives from "../../BonusIncentives/BonusIncentives"
import Component_Currency from "../../Component&Currency/Component_Currency"
import Lumpsumcorrection from "../../Lumpsum&correction/Lumpsumcorrection"
import ParityGuideline from "../../ParityandGuideline/ParityGuideline"
import Promotion from "../../Promotion/Promotion"
import Proration from "../../Prorations/Proration"
import SplitandMatrix from "../../SplitandMatrix/splitandMatrix"
import CycleEligibility from "../../Userplan/PlanData/cycleEligibility/CycleEligibility"
import PayGroups from "../../paygroups/PayGroups"


const Plandata = () => {
  return (
    <div>
        <Navbar/>
        <CycleEligibility/>
        <Component_Currency/>
        <Proration/>
        <ParityGuideline/>
        <SplitandMatrix/>
        <PayGroups/>
        <Lumpsumcorrection/>
        <Promotion/>
        <BonusIncentives/>

    </div>
  )
}

export default Plandata