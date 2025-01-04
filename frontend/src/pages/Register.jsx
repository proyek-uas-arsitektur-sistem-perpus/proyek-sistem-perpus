import { useNavigate } from "react-router-dom";
import "./Register.css";
import registerImage from "../assets/Login.jpg"; // Pastikan path gambar benar

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    alert("Pendaftaran berhasil! Silakan masuk menggunakan akun Anda.");
    navigate("/login"); // Redirect ke halaman login setelah pendaftaran
  };

  return (
    <div className="register-page">
      {/* Bagian Kiri: Gambar */}
      <div className="left-side">
        <img src={registerImage} alt="Register" className="register-image" />
      </div>

      {/* Bagian Kanan: Form Register */}
      <div className="right-side">
        <div className="register-container">
          <h1>DAFTAR AKUN</h1>
          <p>Buat akun baru Anda</p>
          <form onSubmit={handleRegister}>
            <input type="text" placeholder="Nama Lengkap" required />
            <input type="text" placeholder="NIK" required />
            <input type="text" placeholder="Nomor Telepon" required />
            <input type="email" placeholder="Alamat Email" required />
            <input type="password" placeholder="Kata Sandi" required />
            <input type="password" placeholder="Konfirmasi Kata Sandi" required />
            <button type="submit">Daftar</button>
          </form>
          <div className="signup-link">
            <p>
              Sudah punya akun? <a href="/login">Masuk</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
