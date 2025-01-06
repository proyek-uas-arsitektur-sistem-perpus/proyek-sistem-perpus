import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    const nama = event.target[0].value; // Nama Lengkap
    const username = event.target[1].value; // NIK
    const no_telepon = event.target[2].value; // Nomor Telepon
    const email = event.target[3].value; // Alamat Email
    const password = event.target[4].value; // Kata Sandi
    const confirmPassword = event.target[5].value; // Konfirmasi Kata Sandi

    if (password !== confirmPassword) {
      alert("Kata sandi dan konfirmasi kata sandi tidak cocok");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama, username, no_telepon, email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Registrasi berhasil!");
        navigate("/login");
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Terjadi kesalahan.");
    }
  };

  return (
    <div className="register-page">
      <div className="right-side">
        <div className="register-container">
          <h1>DAFTAR AKUN</h1>
          <p>Buat akun baru Anda</p>
          <form onSubmit={handleRegister}>
            <input type="text" placeholder="Nama Lengkap" required />
            <input type="text" placeholder="NIK / Username" required />
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
