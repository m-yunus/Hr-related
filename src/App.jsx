import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

import Personalize from "./pages/Personalize";
import Culture_Setting from "./routes/Culture_Setting";
import Salary_components from "./routes/Salary_components";
import Integration_with_HRIS from "./routes/Integration_with_HRIS";
import Company_Profile from "./routes/Company_Profile";
import User_Creation from "./routes/User_Creation";
import Workflow from "./routes/Workflow";
import Exclusion_Criteria from "./routes/Exclusion_Criteria";
import SuperVisor_page from "./routes/SuperVisor_page";
import HR_Review_Settings from "./routes/HR_Review_Settings";
import History_Data from "./routes/History_Data";

function App() {
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
            <Route path="Exclusion-Criteria" element={<Exclusion_Criteria/>} />
            <Route path="SuperVisor-Page" element={<SuperVisor_page/>} />
            <Route path="HR-Review-Settings" element={<HR_Review_Settings/>} />
            <Route path="History-Data" element={<History_Data/>} />
            <Route path="HR-Review-Settings" element={<Company_Profile/>} />
            <Route path="HR-Review-Settings" element={<Company_Profile/>} />
            <Route path="HR-Review-Settings" element={<Company_Profile/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
