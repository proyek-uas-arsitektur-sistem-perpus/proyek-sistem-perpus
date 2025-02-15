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
import ProfileAnggota from "./pages/ProfileAnggota"; // Halaman Profile Anggota
import EditProfilePengguna from "./pages/EditProfilePengguna"; // Halaman Edit Profile
import EditProfileAnggota from "./pages/EditProfileAnggota"; 
import DataBuku from "./pages/Databuku";
import CariBuku from "./pages/CariBuku";
import TambahBuku from "./pages/Tambahbuku";
import DataBukuEdit from "./pages/DataBukuEdit";
import DetailBuku from "./pages/DetailBuku";
import Kategori from "./pages/Kategori";
import DataPengguna from "./pages/DataPengguna";
import TambahDataPengguna from "./pages/TambahDataPengguna";
import EditDataPengguna from "./pages/EditDataPengguna";
import HapusDataPengguna from "./pages/HapusDataPengguna"; 
import StockMasuk from "./pages/StockMasuk";
import StockKeluar from "./pages/StockKeluar";
import LaporanStock from "./pages/LaporanStock";
import PeminjamanStaff from "./pages/PeminjamanStaff";
import PengembalianStaff from "./pages/PengembalianStaff";
import DendaStaff from "./pages/DendaStaff";
import TambahPeminjamanStaff from "./pages/TambahPeminjamanStaff";
import DetailPeminjamanStaff from "./pages/DetailPinjamanStaff";
import TransaksiPengguna from "./pages/TransaksiPengguna";
import DendaPengguna from "./pages/DendaPengguna";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Rute Login dan Register */}
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

          {/* Halaman Ubah Password */}
          <Route path="/login/change-password" element={<GantiPassword />} />
          <Route path="/lupa-password" element={<GantiPassword />} />

          {/* Search Filter untuk Staff */}
          <Route
            path="/search"
            element={
              <div>
                <SidebarStaff />
                <SearchFilter />
              </div>
            }
          />

          {/* Logout */}
          <Route path="/logout" element={<Logout />} />

          {/* Profil Pengguna */}
          <Route path="/profile" element={<ProfilePengguna />} /> {/* Route untuk Profil */}
          <Route path="/profile/edit" element={<EditProfilePengguna />} /> {/* Route untuk Edit Profil */}
          <Route path="/profile-anggota/edit" element={<EditProfileAnggota />} />

          {/* Profil Anggota */}
          <Route path="/profile-anggota" element={<ProfileAnggota />} /> {/* Route untuk Profil Anggota */}

          {/* Data Pengguna */}
          <Route path="/data-pengguna" element={<DataPengguna />} />
          <Route path="/data-pengguna/tambah" element={<TambahDataPengguna />} />
          <Route path="/data-pengguna/edit/:id" element={<EditDataPengguna />} />
          <Route path="/data-pengguna/hapus/:id" element={<HapusDataPengguna />} /> 

          {/* Halaman Buku */}
          <Route path="/data-buku" element={<DataBuku />} />
          <Route path="/tambah-buku" element={<TambahBuku />} />
          <Route path="/data-buku-edit" element={<DataBukuEdit />} />
          <Route path="/detail-buku" element={<DetailBuku />} />
          <Route path="/cari-buku" element={<CariBuku />} />

       

          {/* Tambahkan route untuk halaman Kategori */}
          <Route path="/kategori" element={<Kategori />} />

          <Route path="/transaksi-pengguna" element={<TransaksiPengguna />} />
          <Route path="/denda-pengguna" element={<DendaPengguna />} />

          {/* Tambahkan route untuk halaman Peminjaman */}
          <Route path="/peminjaman-staff" element={<PeminjamanStaff />} />

          {/* Tambahkan route untuk halaman Pengembalian */}
          <Route path="/pengembalian-staff" element={<PengembalianStaff />} />

          {/* Tambahkan route untuk halaman Denda */}
          <Route path="/denda-staff" element={<DendaStaff />} />
          
          {/* Tambahkan route untuk halaman Kategori */}
          <Route path="/kategori" element={<Kategori />} />

          {/* Tambahkan route untuk halaman Tambah Peminjaman */}
          <Route path="/peminjaman-staff/tambah" element={<TambahPeminjamanStaff />} />

          {/* Tambahkan route untuk halaman DetailPeminjam */}
          <Route path="/peminjaman-staff/detail/:id" element={<DetailPeminjamanStaff />} />

          {/* Rute tambahan untuk TambahDataPengguna dan EditDataPengguna */}
          <Route path="/data-pengguna/tambah" element={<TambahDataPengguna />} />
          <Route path="/data-pengguna/edit/:id" element={<EditDataPengguna />} />

          {/* Rute untuk fitur stock opname */}
          <Route path="/stock-masuk" element={<StockMasuk />} />
          <Route path="/stock-keluar" element={<StockKeluar />} />
          <Route path="/laporan-stock" element={<LaporanStock />} />

          {/* Redirect jika route tidak ditemukan */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;