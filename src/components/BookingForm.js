import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ times, showAvailableTimes, onSubmitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guestsNumber, setGuestsNumber] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const navigate = useNavigate();

  const submitForm = () => {
    const formData = {
        date,
        time,
        guestsNumber,
        occasion
    };

    const response = onSubmitForm(formData);

    if (response === true) {
        navigate("/booking_confirmation");
    } else {
        return new Error("Something went wrong");
    }
  };

  return (
    <>
      <h1 className="booking_heading">Reserve a table</h1>
      <form
        style={{
          display: "grid",
          maxWidth: "200px",
          gap: "20px",
          width: "70vw",
          margin: "auto",
          border: "3px double #ee9972",
          padding: "3rem 4rem",
        }}
        onSubmit={submitForm}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          min="2023-02-22"
          max="2023-05-01"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            showAvailableTimes({ type: "changeDate", payload: e.target.value });
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {times.times.map((time) => {
            return <option key={time}>{time}</option>;
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guestsNumber}
          onChange={(e) => setGuestsNumber(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your Reservation" disabled={guestsNumber > 10 || guestsNumber < 1 || !date} />
      </form>
    </>
  );
};

export default BookingForm;
