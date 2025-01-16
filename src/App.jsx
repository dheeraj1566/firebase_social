import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { getCurrentUser } from "./Authentication/auth";
import Home from "./components/Home";

function App() {
  const currentUser = getCurrentUser();

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        <Route
          path="/home"
          element={currentUser ? <Home /> : <Login />} 
        />
        
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
