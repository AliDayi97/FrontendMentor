import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home, OrderSummaryComponent } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/FrontendMentor" element={<Home />} />
        <Route
          path="/FrontendMentor/order-summary-component"
          element={<OrderSummaryComponent />}
        />
        <Route path="*" element={<Navigate to="/FrontendMentor" />} />
      </Routes>
    </>
  );
}

export default App;
