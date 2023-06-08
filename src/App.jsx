import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

import Personalize from "./pages/Personalize";
import Culture_Setting from "./routes/Culture_Setting";
import Salary_components from "./routes/Salary_components";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
