import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const DataBukuEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bukuId } = location.state; // Mengambil bukuId yang diteruskan dari DataBuku

  const [formData, setFormData] = useState({
    kategori: "",
    judul: "",
    penerbit: "",
    tahun: "",
    stok: 10,
  });

  // Mendapatkan data buku berdasarkan ID
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/catalog/books/${bukuId}`)
      .then((response) => {
        const buku = response.data;
        setFormData({
          kategori: buku.kategori,
          judul: buku.judul,
          penerbit: buku.penerbit,
          tahun: buku.tahun_terbit,
          stok: buku.stok,
        });
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, [bukuId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Data yang akan dikirim ke backend
    const updatedBuku = {
      kategori: formData.kategori,
      judul: formData.judul,
      penerbit: formData.penerbit,
      tahun_terbit: formData.tahun,
      stok: formData.stok,
    };

    console.log("Data yang akan dikirim ke backend:", updatedBuku);

    // Mengirim data ke backend untuk diperbarui
    axios
    .put(`http://localhost:5000/api/catalog/books/${bukuId}`, updatedBuku)
    .then((response) => {
        console.log("Respons dari backend:", response.data);
        alert("Data buku berhasil diperbarui!");
        navigate("/data-buku");
    })
    .catch((error) => {
        console.error("Error updating book data:", error.response || error.message);
        alert("Terjadi kesalahan saat memperbarui data buku.");
    });
};

  return (
    <div className="form-container">
      <h2>Edit Buku</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Judul Buku</label>
          <input
            type="text"
            name="judul"
            value={formData.judul}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Kategori</label>
          <input
            type="text"
            name="kategori"
            value={formData.kategori}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Penerbit</label>
          <input
            type="text"
            name="penerbit"
            value={formData.penerbit}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Tahun</label>
          <input
            type="number"
            name="tahun"
            value={formData.tahun}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Stok</label>
          <input
            type="number"
            name="stok"
            value={formData.stok}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Simpan Perubahan</button>
      </form>
    </div>
  );
};

export default DataBukuEdit;
