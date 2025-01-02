import 'react'; // Pastikan React diimpor dengan benar
import './ProfilePengguna.css'; // Impor file CSS
import profileImage from '../assets/Profile.jpg'; // Gunakan jalur relatif ke file gambar

const ProfilePengguna = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile Pengguna</h2>
      </div>

      <div className="profile-info">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <p><span>Nama:</span> John Doe</p>
        <p><span>Email:</span> johndoe@example.com</p>
        <p><span>Role:</span> Admin</p>
        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default ProfilePengguna;
