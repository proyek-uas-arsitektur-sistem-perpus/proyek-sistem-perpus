import React, { useState } from 'react';
import './ProfilePengguna.css';

const ProfilePengguna = () => {
  const [profile, setProfile] = useState({
    photo: '',
    fullName: 'John Doe',
    nik: '1234567890',
    phoneNumber: '081234567890',
    email: 'john.doe@example.com',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfile({
      ...profile,
      photo: file ? URL.createObjectURL(file) : '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
  };

  return (
    <div className="profile-container">
      <h2>Profile Pengguna</h2>
      <form onSubmit={handleSubmit}>
        <div className="profile-field">
          <label>Upload Photo</label>
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
          />
          {profile.photo && <img src={profile.photo} alt="Profile" className="profile-photo" />}
        </div>
        <div className="profile-field">
          <label>Nama Lengkap</label>
          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile-field">
          <label>NIK</label>
          <input
            type="text"
            name="nik"
            value={profile.nik}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile-field">
          <label>Nomor Telepon</label>
          <input
            type="tel"
            name="phoneNumber"
            value={profile.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-save">Simpan Perubahan</button>
      </form>
    </div>
  );
};

export default ProfilePengguna;
