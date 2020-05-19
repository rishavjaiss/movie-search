import React, { useEffect } from "react";
import "./App.css";
import SearchMovie from "./components/SearchMovie/SearchMovie";

function App() {
  useEffect(() => {
    document.title = "Movie App";
  }, []);

  return (
    <div className="container">
      <h1 className="title">Search Movies!</h1>
      <SearchMovie />
    </div>
  );
}

export default App;
