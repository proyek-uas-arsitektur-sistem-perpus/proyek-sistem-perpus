import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginImage from "../assets/Login.jpg";  // Pastikan path gambar benar

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Lakukan logika login di sini, seperti validasi dan pengalihan halaman
    navigate("/dashboard");  // Ganti dengan halaman setelah login
  };

  return (
    <div className="login-page">
      <div className="left-side">
        <img src={loginImage} alt="Login" className="login-image" />
      </div>
      <div className="right-side">
        <div className="form-container">
          <h1>SELAMAT DATANG</h1>
          <p>Login ke akun Anda</p>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Alamat Email"
              required
            />
            <input
              type="password"
              placeholder="Kata Sandi"
              required
            />
            <button type="submit">Masuk</button>
          </form>
          <div className="signup-link">
            <p>Belum punya akun? <a href="/register">Daftar</a></p>
            {/* Tambahkan link untuk Lupa Password */}
            <p><a href="/lupa-password">Lupa Password?</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
