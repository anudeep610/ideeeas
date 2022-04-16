import "./App.css";
import {Route, Routes } from "react-router-dom";
import Home from "./components/home";
import EventPage from "./components/EventPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/eventsPage" element={<EventPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
