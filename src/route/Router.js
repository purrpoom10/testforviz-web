import { Routes, Route } from "react-router-dom";
import CssTestPage from "../pages/CssTestPage";
import Homepage from "../pages/Homepage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/csstest" element={<CssTestPage />} />
    </Routes>
  );
}

export default Router;
