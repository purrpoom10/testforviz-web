import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="w-screen h-screen bg-bggray flex justify-center ">
      <div className="mt-20 h-2/6 w-2/6 bg-deepblue  flex flex-col rounded-xl items-center gap-4">
        <div className="flex flex-col mt-10 gap-4">
          <Link to="/csstest">
            <p className="text-white text-xl">01 - CSS Test</p>
          </Link>
          <Link to="/jstest">
            <p className="text-white text-xl">
              02 - Venue Booking System (Javascript Test)
            </p>
          </Link>
          <Link to="/booking">
            <p className="text-white text-xl">
              03 - Venue Booking System (Front-end Test)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
