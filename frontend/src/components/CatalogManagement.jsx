class CatalogManagement {
  constructor() {
    // Simpan data buku di sini
    this.bukuList = [
      {
        no: 1,
        sampul: "https://via.placeholder.com/50",
        bukuId: "BK001",
        isbn: "978-602-8758-07-9",
        judul: "Matematika Diskrit",
        kategori: "Buku",
        rak: "Rak 3",
        penerbit: "INFORMATIKA Bandung",
        tahun: 2010,
        stok: 10,
        dipinjam: 1,
        lampiran: "https://example.com/lampiran.pdf", // Lampiran PDF
      },
    ];
  }

  // Mendapatkan semua data buku
  getAllBooks() {
    return this.bukuList;
  }

  // Menambahkan buku baru
  addBook(newBuku) {
    this.bukuList.push(newBuku);
  }

  // Memperbarui buku
  updateBook(updatedBuku) {
    const index = this.bukuList.findIndex(buku => buku.bukuId === updatedBuku.bukuId);
    if (index !== -1) {
      this.bukuList[index] = updatedBuku;
    }
  }
}

// Ekspor instance dari kelas ini
export default new CatalogManagement();
