import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  Home,
  OrderSummaryComponent,
  InteractiveCommentsSection,
} from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/order-summary-component"
          element={<OrderSummaryComponent />}
        />
        <Route
          path="/interactive-comments-section"
          element={<InteractiveCommentsSection />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
