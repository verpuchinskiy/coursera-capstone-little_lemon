import { render, renderHook, screen, act } from '@testing-library/react';
import { useReducer } from 'react';
import App from './App';
import BookingForm from './components/BookingForm';
import BookingPage from './components/pages/Booking';
import { initializeTimes, updateTimes } from './components/pages/Booking';
//import { act } from 'react-dom/test-utils';

test('renders the Booking Form heading', () => {
  render(
  <BookingForm />);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});

test("Validate updateTimes and initializeTimes functions", () => {
  render(<BookingPage />);

  const initialState = initializeTimes();
  expect(initialState).toStrictEqual({
    date: "",
    times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  });
})
