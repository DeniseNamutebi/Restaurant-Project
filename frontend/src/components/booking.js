import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  let navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    let isError = false;
    if (name === "") {
      isError = true;
      setError("A name is required");
    } else if (email === "") {
      isError = true;

      setError("A email is required");
    } else if (date === null) {
      isError = true;

      setError("A date is required");
    } else {
      setError("");
      return navigate("/confirm/booking");
    }
  };

  return (
    <div className="container">
      <div className="flex flex-cols">
        <div>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Date and time of booking
            <input
              type="datetime-local"
              defaultValue={date}
              step={1800}
              onChange={(e) => {
                console.log("date", e);
                setDate(e.target.defaultValue);
              }}
              minDate={new Date()}
            />
          </label>
        </div>
      </div>
      <span className="text-red-500">{error}</span>

      <button type="button" onClick={handleSubmit} className="btn">
        Make Reservation
      </button>
    </div>
  );
};

export default Booking;
