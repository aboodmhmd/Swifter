import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./dashboard.js";
import HomePage from "./home.js";
import React from 'react';

function App() {
  return (
    <Router>
      <HomePage />
      <Topbar />
      <div className="container">
        <Sidebar />
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;