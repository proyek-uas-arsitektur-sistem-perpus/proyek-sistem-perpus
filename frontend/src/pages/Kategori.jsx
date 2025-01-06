import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Kategori.css";

const Kategori = () => {
  const navigate = useNavigate();
  const [kategoriList, setKategoriList] = useState([
    { id: 1, nama: "Buku Sakti" },
    { id: 2, nama: "Tambah Kategori" },
    { id: 3, nama: "Buku" },
    { id: 4, nama: "Jurnal" },
    { id: 5, nama: "Laporan TA" },
    { id: 6, nama: "Laporan LKP" },
  ]);

  const [namaKategori, setNamaKategori] = useState("");

  const handleTambahKategori = () => {
    if (namaKategori.trim() === "") {
      alert("Nama kategori tidak boleh kosong!");
      return;
    }
    setKategoriList([
      ...kategoriList,
      { id: kategoriList.length + 1, nama: namaKategori },
    ]);
    setNamaKategori("");
  };

  const handleDelete = (id) => {
    const filteredList = kategoriList.filter((kategori) => kategori.id !== id);
    setKategoriList(filteredList);
  };

  const goBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="kategori-container">
      <div className="header">
        <h2 className="page-title">
          <i className="fas fa-book"></i> Data Kategori
        </h2>
        <p className="breadcrumb">
          <span onClick={goBack} className="breadcrumb-link">
            Dashboard
          </span>{" "}
          &gt; Data Kategori
        </p>
      </div>
      <div className="content-container">
      <div className="form-container">
  <h3 className="form-title">Tambah Kategori</h3>
  <div className="form-group">
    <label className="form-label">Nama Kategori</label>
    <input
      type="text"
      placeholder="Contoh: Pemrograman Web"
      value={namaKategori}
      onChange={(e) => setNamaKategori(e.target.value)}
      className="form-control"
    />
  </div>
  <button className="btn-tambah-kategori" onClick={handleTambahKategori}>
    + Tambah Kategori
  </button>
</div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Kategori</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {kategoriList.map((kategori, index) => (
                <tr key={kategori.id}>
                  <td>{index + 1}</td>
                  <td>{kategori.nama}</td>
                  <td>
                  <div className="aksi-container">
                    <button className="btn-action edit">
                    <i className="fas fa-edit"></i></button>
                    <button
                      className="btn-action delete"
                      onClick={() => handleDelete(kategori.id)}
                    ><i className="fas fa-trash-alt"></i>
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="table-footer">
            <span>Showing 1 to {kategoriList.length} of {kategoriList.length} entries</span>
            <div className="pagination">
              <button className="page-btn">Previous</button>
              <button className="page-btn active">1</button>
              <button className="page-btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kategori;
