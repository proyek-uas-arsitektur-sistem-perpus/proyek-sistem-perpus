import "react";
import { useNavigate } from "react-router-dom";
import "./DetailBuku.css";

const DetailBuku = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/data-buku"); // Navigasi ke halaman data buku
  };

  return (
    <div className="detail-buku-container">
      <div className="header">
        <h2 className="page-title"><i className="fas fa-book"></i> Data Buku Detail</h2>
        <p className="breadcrumb">
          <span onClick={goBack} className="breadcrumb-link">Data Buku</span> &gt; Data Buku Detail
        </p>
      </div>
      <div className="book-details">
        <div className="row">
          <div className="label">Buku ID</div>
          <div className="value">
            <div className="barcode">
              <img src="https://via.placeholder.com/100" alt="Barcode" />
              <p className="book-id">BK0059</p>
              <button className="btn-barcode">Cetak Barcode</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="label">ISBN</div>
          <div className="value">656454</div>
        </div>
        <div className="row">
          <div className="label">Sampul Buku</div>
          <div className="value">
            <img src="https://via.placeholder.com/150" alt="Sampul Buku" />
          </div>
        </div>
        <div className="row">
          <div className="label">Judul Buku</div>
          <div className="value">Sejarah Sumatera Utara, Penerbit Erlangga</div>
        </div>
        <div className="row">
          <div className="label">Kategori</div>
          <div className="value">Buku</div>
        </div>
        <div className="row">
          <div className="label">Penerbit</div>
          <div className="value">ASASASASAS</div>
        </div>
        <div className="row">
          <div className="label">Pengarang</div>
          <div className="value">RECAS</div>
        </div>
        <div className="row">
          <div className="label">Tahun Terbit</div>
          <div className="value">2019</div>
        </div>
        <div className="row">
          <div className="label">Jumlah Buku</div>
          <div className="value">33</div>
        </div>
      </div>
    </div>
  );
};

export default DetailBuku;
