import { useNavigate } from "react-router-dom";
import "./Register.css";
import registerImage from "../assets/Login.jpg"; // Pastikan path gambar benar

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    alert("Pendaftaran berhasil! Silakan masuk menggunakan akun Anda.");
    
    // Setelah pendaftaran selesai, arahkan ke halaman login
    navigate("/"); // Mengarah ke halaman login
  };

  return (
    <div className="login-page">
      <div className="left-side">
        <img src={registerImage} alt="Register" className="login-image" />
      </div>
      <div className="right-side">
        <div className="form-container">
          <h1>DAFTAR AKUN</h1>
          <p>Buat akun baru Anda</p>
          <form onSubmit={handleRegister}>
            <input type="text" placeholder="Nama Lengkap" required />
            <input type="nik" placeholder="NIK" required />
            <input type="nomerTelepon" placeholder="Nomer Telepon" required />
            <input type="email" placeholder="Alamat Email" required />
            <input type="password" placeholder="Kata Sandi" required />
            <input type="password" placeholder="Konfirmasi Kata Sandi" required />
            <button type="submit">Daftar</button>
          </form>
          <div className="signup-link">
            <p>
              Sudah punya akun?{" "}
              <span
                onClick={() => navigate("/")}
                style={{
                  color: "#5c6bc0",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Masuk
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
