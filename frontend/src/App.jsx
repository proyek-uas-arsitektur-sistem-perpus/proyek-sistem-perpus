import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Dashboardpengguna from "./pages/Dashboardpengguna";
import GantiPassword from "./pages/GantiPassword";
import SidebarStaff from "./components/SidebarStaff";
import SidebarPengguna from "./components/SidebarPengguna";
import SearchFilter from "./components/SearchFilter";
import ProfilePengguna from "./pages/ProfilePengguna"; // Halaman Profile
import EditProfilePengguna from "./pages/EditProfilePengguna"; // Halaman Edit Profile
import DataBuku from "./pages/Databuku";
import TambahBuku from "./pages/Tambahbuku";
import DataBukuEdit from "./pages/DataBukuEdit";
import DetailBuku from "./pages/DetailBuku";
import Kategori from "./pages/Kategori";
import DataPengguna from "./pages/DataPengguna";
import TambahDataPengguna from "./pages/TambahDataPengguna";
import EditDataPengguna from "./pages/EditDataPengguna";
import StockMasuk from "./pages/StockMasuk";
import StockKeluar from "./pages/StockKeluar";
import LaporanStock from "./pages/LaporanStock";
import PeminjamanStaff from "./pages/PeminjamanStaff";
import PengembalianStaff from "./pages/PengembalianStaff";
import DendaStaff from "./pages/DendaStaff";
import TambahPeminjaman from "./pages/TambahPeminjamanStaff";
import DetailPeminjaman from "./pages/DetailPinjamanStaff";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Dashboard untuk Staff */}
          <Route
            path="/dashboard"
            element={
              <div>
                <SidebarStaff />
                <Dashboard />
              </div>
            }
          />
          
          {/* Dashboard untuk Pengguna */}
          <Route
            path="/dashboard-pengguna"
            element={
              <div>
                <SidebarPengguna />
                <Dashboardpengguna />
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
          <Route path="/profile" element={<ProfilePengguna />} /> {/* Route untuk Profil */}
          <Route path="/profile/edit" element={<EditProfilePengguna />} /> {/* Route untuk Edit Profil */}
          <Route path="/data-pengguna" element={<DataPengguna />} /> {/* Route untuk Data Pengguna */}
          <Route path="*" element={<Login />} />

          {/* Tambahkan route untuk halaman DataBuku */}
          <Route path="/data-buku" element={<DataBuku />} />
          <Route path="/tambah-buku" element={<TambahBuku />} />
          <Route path="/data-buku-edit" element={<DataBukuEdit />} />
          <Route path="/detail-buku" element={<DetailBuku />} />

       

          {/* Tambahkan route untuk halaman Peminjaman */}
          <Route path="/peminjaman-staff" element={<PeminjamanStaff />} />

          {/* Tambahkan route untuk halaman Pengembalian */}
          <Route path="/pengembalian-staff" element={<PengembalianStaff />} />

          {/* Tambahkan route untuk halaman Denda */}
          <Route path="/denda-staff" element={<DendaStaff />} />
          
          {/* Tambahkan route untuk halaman Kategori */}
          <Route path="/kategori" element={<Kategori />} />

          {/* Tambahkan route untuk halaman Tambah Peminjaman */}
          <Route path="/peminjaman-staff/tambah" element={<TambahPeminjaman />} />

          {/* Tambahkan route untuk halaman DetailPeminjam */}
          <Route path="/peminjaman-staff/:id" element={<DetailPeminjaman />} />

          {/* Rute tambahan untuk TambahDataPengguna dan EditDataPengguna */}
          <Route path="/data-pengguna/tambah" element={<TambahDataPengguna />} />
          <Route path="/data-pengguna/edit/:id" element={<EditDataPengguna />} />

          {/* Rute untuk fitur stock opname */}
          <Route path="/stock-masuk" element={<StockMasuk />} />
          <Route path="/stock-keluar" element={<StockKeluar />} />
          <Route path="/laporan-stock" element={<LaporanStock />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
