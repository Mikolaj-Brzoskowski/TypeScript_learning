import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Contact from "./components/Contact";
import Journal from "./components/Journal";
import MainPage from "./components/MainPage";
import Music from "./components/Music";
import NavBar from "./components/NavBar";
import SleepSummary from "./components/SleepSummary";

const App: React.FC = () => {
  return (
  <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}></Route>
      <Route path="/home" element={<MainPage isLogged={false}/>} />
      <Route path="/journal" element={<Journal/>} />
      <Route path="/music" element={<Music/>} />
      <Route path="/summary" element={<SleepSummary/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </div>)

};

export default App;