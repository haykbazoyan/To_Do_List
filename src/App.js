import React from "react";
import "./App.css";
import ToDo from "./components/ToDo/ToDo";

export default function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDo />
    </div>
  );
}
