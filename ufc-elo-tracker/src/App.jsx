// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import FighterPage from "./pages/FighterListPage";
import FighterDetailsPage from "./pages/FighterDetailsPage";
import AdminDashboard from "./components/AdminDashboard";
import MatchManagement from "./components/MatchManagement";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/database" element={<FighterPage />} />
        <Route path="/database/:fighterId" element={<FighterDetailsPage />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="matches" element={<MatchManagement />} />{" "}
          {/* Ensure this is correct */}
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
