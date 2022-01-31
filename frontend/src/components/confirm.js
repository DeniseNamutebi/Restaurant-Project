import React from "react";
import { Link } from "react-router-dom";
import restaurantConfig from "../restaurantConfig.json";

const Contact = ({ type = "order" }) => {
  return (
    <div className="flex flex-row  container">
      <div className="flex items-center relative flex-col md:flex-cols mx-4 w-ful ">
        <div className="text-2xl">
          Your {type === "order" ? "order" : "reservation"} has been received
        </div>

        <div>We will be in touch shortly</div>
        <div>
          Need to change your {type} contact us at: {restaurantConfig?.email}
        </div>
        <Link to="/">
          <button>Done</button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
