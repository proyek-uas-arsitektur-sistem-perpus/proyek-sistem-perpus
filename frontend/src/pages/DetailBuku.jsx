import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CatalogManagement from "../components/CatalogManagement";

const DetailBuku = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bukuId } = location.state;

  const [buku, setBuku] = useState(null);

  useEffect(() => {
    const bukuDetail = CatalogManagement.getAllBooks().find((b) => b.bukuId === bukuId);
    setBuku(bukuDetail);
  }, [bukuId]);

  return (
    <div className="detail-container">
      {buku && (
        <>
          <h2>Detail Buku</h2>
          <table>
            <tbody>
              <tr>
                <td><strong>Judul Buku:</strong></td>
                <td>{buku.judul}</td>
              </tr>
              <tr>
                <td><strong>ISBN:</strong></td>
                <td>{buku.isbn}</td>
              </tr>
              <tr>
                <td><strong>Kategori:</strong></td>
                <td>{buku.kategori}</td>
              </tr>
              <tr>
                <td><strong>Rak:</strong></td>
                <td>{buku.rak}</td>
              </tr>
              <tr>
                <td><strong>Penerbit:</strong></td>
                <td>{buku.penerbit}</td>
              </tr>
              <tr>
                <td><strong>Tahun:</strong></td>
                <td>{buku.tahun}</td>
              </tr>
              <tr>
                <td><strong>Stok:</strong></td>
                <td>{buku.stok}</td>
              </tr>
              <tr>
                <td><strong>Sampul:</strong></td>
                <td>
  {buku.sampul && (
    <img
      src={buku.sampul instanceof File ? URL.createObjectURL(buku.sampul) : buku.sampul}
      alt="Sampul Buku"
      width="100"
      height="150"
    />
  )}
</td>
              </tr>
              <tr>
                <td><strong>Lampiran:</strong></td>
                <td>
  {buku.lampiran && (
    <a href={buku.lampiran instanceof File ? URL.createObjectURL(buku.lampiran) : buku.lampiran} target="_blank" rel="noopener noreferrer">
      Lihat Lampiran PDF
    </a>
  )}
</td>

              </tr>
            </tbody>
          </table>
        </>
      )}
      <button onClick={() => navigate("/data-buku")}>Kembali</button>
    </div>
  );
};

export default DetailBuku;
