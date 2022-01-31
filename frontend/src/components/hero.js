import React from "react";
import RestImage from "../images/9u.jpg";
import restaurantConfig from "../restaurantConfig.json";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex items-center flex-col md:flex-row  container">
      <div className="flex relative flex-col md:p-16 md:flex-cols mx-4 w-1/2 space-y-6">
        <div className=" text-5xl text-navy">{restaurantConfig?.name}</div>

        <div className=" md:text-3xl mt-2 ">{restaurantConfig?.description}</div>
        <div className="mt-1 text-justify ">{restaurantConfig?.subText}</div>
        <div className="flex flex-row space-x-6">
          <Link to="/menu">
            <button className="btn">See Menu</button>
          </Link>
          <Link to="/booking">
            <button className="btn">Book Table</button>
          </Link>
        </div>
      </div>

      <div className="w-1/2 h-full flex items-center mt-8 md:mt-0">
        <img src={RestImage} className=" m-auto" alt="Restaurant Image" />
      </div>
    </div>
  );
};

export default Hero;
