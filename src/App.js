import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results.jsx";
import requests from "./requests";
// import VideoCard from "./VideoCard";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption = {setSelectedOption} />
      <Results selectedOption = {selectedOption}/>
    </div>
  );
}

export default App;
