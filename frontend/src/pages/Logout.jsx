import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Proses logout - menghapus data autentikasi dari localStorage/sessionStorage
    localStorage.removeItem('authToken'); // Contoh menghapus token autentikasi
    sessionStorage.removeItem('authToken'); // Contoh menghapus session jika ada
    // Anda juga bisa menghapus data lain yang terkait dengan sesi login

    // Memberikan sedikit delay untuk memberi tahu pengguna proses logout
    setTimeout(() => {
      navigate("/login"); // Setelah logout, arahkan pengguna ke halaman login
    }, 1000); // Delay 1 detik
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
      <p>Anda akan diarahkan ke halaman login dalam beberapa detik.</p>
    </div>
  );
};

export default Logout;
