import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../../pages/Login"
import Register from "../../pages/Register"
import Personalize from "../../pages/Personalize"
import Culture_Setting from "../../routes/Personalize/Culture_Setting"
import Salary_components from "../../routes/Personalize/Salary_components"
import Integration_with_HRIS from "../../routes/Personalize/Integration_with_HRIS"
import Company_Profile from "../../routes/Personalize/Company_Profile"

import Workflow from "../../routes/Personalize/Workflow"
import SuperVisor_page from "../../routes/Personalize/SuperVisor_page"
import HR_Review_Settings from "../../routes/Personalize/HR_Review_Settings"

import Total_Rewards_Statement from "../../routes/Personalize/Total_Rewards_Statement"
import ExclusionCriteria from "../../routes/Personalize/Exclusion_Criteria"
import Turn_Around_time from "../../routes/Personalize/TurnAroundTime/Turn_Around_time"
import Performance_based_bonus from "../../routes/Personalize/Performance_based_bonus/Performance_based_bonus"
import Terminology from "../../routes/Personalize/Terminology/Terminology"
import Addition_matrix from "../../routes/Personalize/Additional Matrix/Addition_matrix"
import User_Creation from "../../routes/Personalize/UserCreation/User_Creation"
import Userplan from "../../routes/PlanStarting/Userplanmain/Userplan"
import History_Data from "../../routes/Personalize/HistoryData/History_Data"

import PlanData from "../../routes/PlanStarting/Plandata/PlanData"




const RouteLayout = () => {
  return (
    <>
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="/personalize/*" element={<Personalize />}>
            <Route index element={<Culture_Setting />} />
            <Route path="culture-setting" element={<Culture_Setting />} />
            <Route path="Salary-Components" element={<Salary_components />} />
            <Route path="Integration-with-HRIS" element={<Integration_with_HRIS/>} />
            <Route path="Company-profile" element={<Company_Profile/>} />
            <Route path="User-Creation" element={<User_Creation/>} />
            <Route path="Workflow" element={<Workflow/>} />
            <Route path="Exclusion-Criteria" element={<ExclusionCriteria/>} />
            <Route path="SuperVisor-Page" element={<SuperVisor_page/>} />
            <Route path="HR-Review-Settings" element={<HR_Review_Settings/>} />
            <Route path="History-Data" element={<History_Data/>} />
            <Route path="Total-Rewards-Statement" element={<Total_Rewards_Statement/>} />
            <Route path="TurnAroundtime" element={<Turn_Around_time/> } />
            <Route path="Performance_based_bonus" element={<Performance_based_bonus/>} />
            <Route path="Terminology" element={<Terminology/>} />
            <Route path="Additional_Matrix" element={<Addition_matrix/>} />

          </Route>
         
         
        <Route path="/userplan" element={<Userplan/>}/>
       <Route path="/Plandata" element={<PlanData/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteLayout