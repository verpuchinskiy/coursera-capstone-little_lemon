import { useReducer } from "react";
import BookingForm from "../BookingForm";

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = function(formData) {
    return true;
};

export const updateTimes = (state, action) => {
  if (action.type === "changeDate") {
    return {date: action.payload, times: fetchAPI(new Date(action.payload)) };
  } else {
    return state;
  }
};

export const initializeTimes = () => {
  //   const initialState = {
  //     date: "",
  //     times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  //   };
  const initialState = {
    date: "",
    times: fetchAPI(new Date()),
  };
  return initialState;
};

const BookingPage = () => {

  const [state, dispatch] = useReducer(updateTimes, {}, initializeTimes);

  return <BookingForm times={state} showAvailableTimes={dispatch} onSubmitForm={submitAPI} />;
};

export default BookingPage;
