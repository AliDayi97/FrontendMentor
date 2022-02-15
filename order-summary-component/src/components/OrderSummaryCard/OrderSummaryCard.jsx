import React from "react";
import musicIcon from "./../../assets/images/icon-music.svg";
import hero from "./../../assets/images/illustration-hero.svg";

export default function OrderSummaryCard() {
  return (
    <div className="shadow-md rounded-2xl h-auto sm:w-96  w-80 bg-white">
      <img src={hero} alt="hero" className="rounded-t-2xl" />
      <div className="sm:px-12 px-6">
        <h1 className="text-xl font-bold text-center pt-8 pb-6">
          Order Summary
        </h1>
        <div className="opacity-50 text-center mb-4">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </div>

        <div className="bg-neutral-very-pale-blue flex px-6 py-2 rounded-2xl mb-6">
          <img src={musicIcon} alt="music" className="mr-5" />
          <div className="flex-1">
            <h1 className="font-bold">Annual Plan</h1>
            <p className="opacity-50">$59.99/year</p>
          </div>
          <a href="#" className="underline self-center">
            Change
          </a>
        </div>

        <div className="flex flex-col">
          <button className="bg-primary-bright-blue text-white py-2 px-4 rounded-xl mb-4">
            Proceed to Payment
          </button>
          <button className="mb-10">Cancel Order</button>
        </div>
      </div>
    </div>
  );
}
