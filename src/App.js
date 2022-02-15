import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home, OrderSummaryComponent } from "./pages";
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
