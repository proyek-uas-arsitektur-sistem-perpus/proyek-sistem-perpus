import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; // Halaman Login
import Register from "./pages/Register"; // Halaman Register
import Dashboard from "./pages/Dashboard"; // Halaman Dashboard
import ProfilePengguna from './components/ProfilePengguna'; // Halaman Profile Pengguna
import GantiPassword from './components/GantiPassword'; // Halaman Ganti Password
import SidebarStaff from "./components/SidebarStaff"; // Sidebar Staff
import SearchFilter from './components/SearchFilter'; // Halaman Search Filter
import "./App.css"; // Tambahkan CSS global jika diperlukan

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
                <SidebarStaff /> {/* Menampilkan Sidebar hanya di Dashboard */}
                <Dashboard />
              </div>
            }
          />

          {/* Route ke halaman Profile Pengguna */}
          <Route path="/dashboard/profile" element={<ProfilePengguna />} />

          {/* Route ke halaman Ganti Password */}
          <Route path="/login/change-password" element={<GantiPassword />} />
          
          {/* Route untuk halaman Lupa Password */}
          <Route path="/lupa-password" element={<GantiPassword />} />

          {/* Route ke halaman Search Filter */}
          <Route
            path="/search"
            element={
              <div>
                <SidebarStaff /> {/* Sidebar juga muncul di halaman Search */}
                <SearchFilter /> {/* Halaman Search Filter */}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
