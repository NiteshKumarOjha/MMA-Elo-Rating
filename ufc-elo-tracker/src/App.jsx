// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import FighterPage from "./pages/FighterListPage";
import FighterDetailsPage from "./pages/FighterDetailsPage";
import AdminDashboard from "./components/AdminDashboard";
import MatchManagement from "./components/MatchManagement";
import FighterManagement from "./components/FighterManagement";
import LoginPage from "./pages/LoginPage";

function App() {
  const isAdminAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/database" element={<FighterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/database/:fighterId" element={<FighterDetailsPage />} />
        <Route
          path="/admin"
          element={
            isAdminAuthenticated ? <AdminDashboard /> : <Navigate to="/" />
          }
        >
          <Route
            path="matches"
            element={
              isAdminAuthenticated ? <MatchManagement /> : <Navigate to="/" />
            }
          />
          <Route
            path="fighters"
            element={
              isAdminAuthenticated ? <FighterManagement /> : <Navigate to="/" />
            }
          />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
