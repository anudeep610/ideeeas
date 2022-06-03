import "./App.css";
import {Route, Routes } from "react-router-dom";
import Home from "./components/home";
import EventPage from "./components/EventPage";
import ContactUs from "./components/contactUs";
import AOS from "aos";

AOS.init();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:eventNum" element={<EventPage />} />
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
