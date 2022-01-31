import React from "react";
import RestImage from "../images/9l.jpg";
import restaurantConfig from "../restaurantConfig.json";


const Contact = () => {
  return (
    <div className="h-full">
    <div className="flex flex-col md:flex-row items-center container">
      
      <div className="flex h-full items-center relative flex-col md:flex-cols mx-4 w-full">
        <div className="text-5xl mb-2">{restaurantConfig?.name}</div>

        <div className="">{restaurantConfig?.email}</div>
        <div>{restaurantConfig?.tel}</div>
        <div>{restaurantConfig?.address}</div>
        <div>{restaurantConfig?.city}</div>
        <div>{restaurantConfig?.postCode}</div>
        <a href={restaurantConfig.mapsLink}>Find us on Google Maps</a>
      </div>
      <div className="w-full p-8"><img src={RestImage} className=" m-auto" alt="Restaurant Image" /></div>
      </div>
    </div>
  );
};

export default Contact;
