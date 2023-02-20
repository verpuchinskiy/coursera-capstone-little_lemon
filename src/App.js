import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import Reservations from "./components/pages/Reservations";
import Order from "./components/pages/Order";
import Login from "./components/pages/Login";
import { Routes, Route } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container">
      <Main />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="order" element={<Order />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
