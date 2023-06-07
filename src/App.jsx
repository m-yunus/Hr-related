import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

import Personalize from "./pages/Personalize";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Personalize" element={<Personalize/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
