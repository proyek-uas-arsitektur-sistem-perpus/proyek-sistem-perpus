import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import GantiPassword from "./pages/GantiPassword";
import SidebarStaff from "./components/SidebarStaff";
import SearchFilter from "./components/SearchFilter";
import ProfilePengguna from "./pages/ProfilePengguna";
import DataBuku from "./pages/Databuku";
import TambahBuku from "./pages/Tambahbuku";
import DataPengguna from "./pages/DataPengguna"; // Import halaman Data Pengguna
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <div>
                <SidebarStaff />
                <Dashboard />
              </div>
            }
          />
          <Route path="/login/change-password" element={<GantiPassword />} />
          <Route path="/lupa-password" element={<GantiPassword />} />
          <Route
            path="/search"
            element={
              <div>
                <SidebarStaff />
                <SearchFilter />
              </div>
            }
          />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<ProfilePengguna />} />
          <Route path="/data-pengguna" element={<DataPengguna />} /> {/* Route untuk Data Pengguna */}
          <Route path="*" element={<Login />} />
          <Route path="/data-buku" element={<DataBuku />} />
          <Route path="/tambah-buku" element={<TambahBuku />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
