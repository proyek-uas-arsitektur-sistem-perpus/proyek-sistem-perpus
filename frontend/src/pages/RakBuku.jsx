import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RakBuku.css";

const Rak = () => {
  const navigate = useNavigate();
  const [RakList, setRakList] = useState([
    { id: 1, nama: "Rak 1" },
    { id: 2, nama: "Rak 2" },
    { id: 3, nama: "Rak 3" },
  ]);

  const [namaRak, setNamaRak] = useState("");

  const handleTambahRak = () => {
    if (namaRak.trim() === "") {
      alert("Nama kategori tidak boleh kosong!");
      return;
    }
    setRakList([
      ...RakList,
      { id: RakList.length + 1, nama: namaRak },
    ]);
    setNamaRak("");
  };

  const handleDelete = (id) => {
    const filteredList = RakList.filter((rak) => rak.id !== id);
    setRakList(filteredList);
  };

  const goBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="rak-container">
    <div className="header">
      <h2 className="page-title">
        <i className="fas fa-archive"></i> Data Rak Buku
      </h2>
      <p className="breadcrumb">
        <span onClick={goBack} className="breadcrumb-link">
          Dashboard
        </span>{" "}
        &gt; Data Rak Buku
      </p>
    </div>
    <div className="content-container">
        <div className="form-container">
          <h3 className="form-title">Tambah Rak Buku</h3>
          <div className="form-group">
            <label className="form-label">Nama Rak Buku</label>
            <input
              type="text"
              placeholder="Contoh: Rak Pemrograman"
              value={namaRak}
              onChange={(e) => setNamaRak(e.target.value)}
              className="form-control"
            />
          </div>
  <button className="btn-tambah-rak" onClick={handleTambahRak}>
    + Tambah Kategori
  </button>
</div>
        <div className="table-container">
          <div className="table-header">
            <span>Show 10 entries</span>
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Rak Buku</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {RakList.map((rak, index) => (
                <tr key={rak.id}>
                  <td>{index + 1}</td>
                  <td>{rak.nama}</td>
                  <td>
                  <div className="aksi-container">
                    <button className="btn-action edit">
                    <i className="fas fa-edit"></i></button>
                    <button
                      className="btn-action delete"
                      onClick={() => handleDelete(rak.id)}
                    ><i className="fas fa-trash-alt"></i>
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="table-footer">
            <span>Showing 1 to {RakList.length} of {RakList.length} entries</span>
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

export default Rak;
