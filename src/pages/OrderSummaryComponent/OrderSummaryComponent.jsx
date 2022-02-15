import React from "react";
import { OrderSummaryCard } from "../../components";
import "./index.css";

export default function OrderSummaryComponent() {
  return (
    <div className="order-summary-component h-screen sm:bg-desktop bg-mobile bg-no-repeat bg-primary-pale-blue">
      <div className="absolute top-2/4 right-2/4 translate-x-2/4 -translate-y-2/4">
        <OrderSummaryCard />
      </div>
    </div>
  );
}
