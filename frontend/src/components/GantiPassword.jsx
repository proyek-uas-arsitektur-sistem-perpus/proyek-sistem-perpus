import  { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate untuk mengarahkan pengguna
import './GantiPassword.css';

const GantiPassword = () => {
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Inisialisasi navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Cek jika password baru dan konfirmasi password tidak cocok
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert('Password baru dan konfirmasi password tidak cocok.');
    } else {
      console.log('Password updated:', passwords);
      alert('Password berhasil diganti.');
      navigate("/"); // Arahkan kembali ke halaman login setelah berhasil ganti password
    }
  };

  return (
    <div className="ganti-password-container">
      <h2>Ganti Password</h2>
      <p>Masukkan password lama, password baru, dan konfirmasi password baru.</p>
      <form onSubmit={handleSubmit}>
        <div className="password-field">
          <label>Password Lama</label>
          <input
            type="password"
            name="oldPassword"
            value={passwords.oldPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="password-field">
          <label>Password Baru</label>
          <input
            type="password"
            name="newPassword"
            value={passwords.newPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="password-field">
          <label>Konfirmasi Password Baru</label>
          <input
            type="password"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-save">Ganti Password</button>
      </form>
    </div>
  );
};

export default GantiPassword;
