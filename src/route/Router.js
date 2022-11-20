import { Routes, Route } from "react-router-dom";
import BookingPage from "../pages/BookingPage";
import CssTestPage from "../pages/CssTestPage";
import BookingListPage from "../pages/BookingListPage";
import Homepage from "../pages/Homepage";
import JsTestPage from "../pages/JsTestPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/csstest" element={<CssTestPage />} />
      <Route path="/jstest" element={<JsTestPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/roomevent/:roomId" element={<BookingListPage />} />
    </Routes>
  );
}

export default Router;
