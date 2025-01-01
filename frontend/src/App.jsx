import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; // Halaman Login
import Register from './pages/Register'; // Halaman Register
import Dashboard from './pages/Dashboard'; // Halaman Dashboard
import SidebarStaff from './components/SidebarStaff'; // Sidebar Staff
import './App.css'; // Tambahkan CSS global jika diperlukan

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Routing */}
        <Routes>
          {/* Route ke halaman Login */}
          <Route path="/" element={<Login />} />

          {/* Route ke halaman Register */}
          <Route path="/register" element={<Register />} />

          {/* Route ke halaman Dashboard */}
          <Route
            path="/dashboard"
            element={
              <div>
                <SidebarStaff />
                <Dashboard />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
