import React from "react";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
  <div>
    <NavBar/>
    <MainPage isLogged={false}/>
  </div>)

};

export default App;