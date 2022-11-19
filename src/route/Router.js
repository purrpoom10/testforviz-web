import { Routes, Route } from "react-router-dom";
import CssTestPage from "../pages/CssTestPage";
import Homepage from "../pages/Homepage";
import JsTestPage from "../pages/JsTestPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/csstest" element={<CssTestPage />} />
      <Route path="/jstest" element={<JsTestPage />} />
    </Routes>
  );
}

export default Router;
