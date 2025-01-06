import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginImage from "../assets/Login.jpg"; // Pastikan path gambar benar

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    // Ambil nilai username dan password dari input form
    const username = event.target[0].value; // Mengambil nilai dari input username
    const password = event.target[1].value; // Mengambil nilai dari input password

    try {
      // Kirim data login ke backend menggunakan fetch
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), // Mengirim data username dan password ke backend
      });

      const result = await response.json();

      if (response.ok) {
        // Login berhasil
        console.log("Login berhasil:", result);

        // Redirect berdasarkan role
        if (result.user.role === "staf") {
          navigate("/dashboard"); // Redirect ke dashboard staf
        } else if (result.user.role === "anggota") {
          navigate("/dashboard-pengguna"); // Redirect ke dashboard pengguna
        } else {
          alert("Role tidak dikenali");
        }
      } else {
        // Login gagal
        alert(result.error); // Tampilkan pesan error dari backend
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div className="login-page">
      {/* Bagian Kiri: Gambar */}
      <div className="left-side">
        <img src={loginImage} alt="Login" className="login-image" />
      </div>

      {/* Bagian Kanan: Form Login */}
      <div className="right-side">
        <div className="login-container">
          <h1>SELAMAT DATANG</h1>
          <p>Login ke akun Anda</p>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="NIK / Username" required />
            <input type="password" placeholder="Kata Sandi" required />
            <button type="submit">Masuk</button>
          </form>
          <div className="signup-link">
            <p>
              Belum punya akun? <a href="/register">Daftar</a>
            </p>
            <p>
              <a href="/lupa-password">Lupa Password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
