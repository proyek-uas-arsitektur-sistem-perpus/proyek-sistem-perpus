-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Jan 2025 pada 18.30
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perpustakaan`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `anggota_perpustakaan`
--

CREATE TABLE `anggota_perpustakaan` (
  `id_anggota_perpustakaan` int(11) NOT NULL,
  `nama_anggota` varchar(100) DEFAULT NULL,
  `nik` varchar(20) DEFAULT NULL,
  `no_telepon` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `anggota_perpustakaan`
--

INSERT INTO `anggota_perpustakaan` (`id_anggota_perpustakaan`, `nama_anggota`, `nik`, `no_telepon`, `email`) VALUES
(1, 'Ahmad Fajar', '32750001', '081234567890', 'ahmadfajar@example.com'),
(2, 'Bella Sari', '32750002', '081234567891', 'bellasari@example.com'),
(3, 'Candra Putra', '32750003', '081234567892', 'candra.putra@example.com'),
(4, 'Dewi Lestari', '32750004', '081234567893', 'dewilestari@example.com'),
(5, 'Eka Prasetya', '32750005', '081234567894', 'ekaprasetya@example.com'),
(6, 'Farhan Akbar', '32750006', '081234567895', 'farhanakbar@example.com'),
(7, 'Gita Permata', '32750007', '081234567896', 'gitapermata@example.com'),
(8, 'Hendra Setiawan', '32750008', '081234567897', 'hendrasetiawan@example.com'),
(9, 'Intan Suci', '32750009', '081234567898', 'intansuci@example.com'),
(10, 'Joni Kurniawan', '32750010', '081234567899', 'jonikurniawan@example.com'),
(11, 'Kartika Rahayu', '32750011', '081234567800', 'kartikarahayu@example.com'),
(12, 'Lina Marlina', '32750012', '081234567801', 'linamarlina@example.com'),
(13, 'Maya Sari', '32750013', '081234567802', 'mayasari@example.com'),
(14, 'Nina Wahyuni', '32750014', '081234567803', 'ninawahyu@example.com'),
(15, 'Oscar Pratama', '32750015', '081234567804', 'oscarpratama@example.com'),
(16, 'Putri Amalia', '32750016', '081234567805', 'putriamalia@example.com'),
(17, 'Qorya Fadhila', '32750017', '081234567806', 'qoryafadhila@example.com'),
(18, 'Rudi Santosa', '32750018', '081234567807', 'rudi.santosa@example.com'),
(19, 'Siti Aisyah', '32750019', '081234567808', 'sitiaisyah@example.com'),
(20, 'Taufik Hidayat', '32750020', '081234567809', 'taufikhidayat@example.com'),
(21, 'kadek', '2626u22', '257378538', 'kadek@gmail.com'),
(22, 'putu', '264s2652', '6393796', 'putu@gmail.com');

-- --------------------------------------------------------

--
-- Struktur dari tabel `buku`
--

CREATE TABLE `buku` (
  `id_buku` int(11) NOT NULL,
  `kode_buku` varchar(255) DEFAULT NULL,
  `judul` varchar(200) NOT NULL,
  `kategori` varchar(255) NOT NULL,
  `penerbit` varchar(255) DEFAULT NULL,
  `tahun_terbit` year(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `buku`
--

INSERT INTO `buku` (`id_buku`, `kode_buku`, `judul`, `kategori`, `penerbit`, `tahun_terbit`) VALUES
(1, 'B001', 'Pemrograman Dasar', 'Teknik Informatika', 'Erlangga', 2020),
(2, 'B002', 'Matematika Dasar', 'Sains', 'Andi', 2019),
(3, 'B003', 'Fisika Lanjut', 'Sains', 'Gramedia', 2018),
(4, 'B004', 'Teori Bahasa', 'Ilmu Komputer', 'Penerbit Universitas', 2021),
(5, 'B005', 'Desain Grafis Modern', 'Desain', 'Penerbit Karya', 2022),
(6, 'B006', 'Sistem Operasi', 'Teknik Informatika', 'Penerbit IT', 2020),
(7, 'B007', 'Jaringan Komputer', 'Teknik Informatika', 'Penerbit Andi', 2021),
(8, 'B008', 'Algoritma dan Struktur Data', 'Ilmu Komputer', 'Erlangga', 2019),
(9, 'B009', 'Manajemen Proyek TI', 'Manajemen', 'Gramedia', 2020),
(10, 'B010', 'Pemrograman Web', 'Teknik Informatika', 'Penerbit Komputer', 2021),
(11, 'B011', 'Kecerdasan Buatan', 'Ilmu Komputer', 'Erlangga', 2022),
(12, 'B012', 'Basis Data', 'Ilmu Komputer', 'Penerbit IT', 2019),
(13, 'B013', 'Cloud Computing', 'Teknik Informatika', 'Andi', 2021),
(14, 'B014', 'Jurnalistik Dasar', 'Komunikasi', 'Penerbit Karya', 2020),
(15, 'B015', 'Pemasaran Digital', 'Pemasaran', 'Gramedia', 2022),
(16, 'B016', 'E-commerce', 'Manajemen', 'Penerbit Universitas', 2021),
(17, 'B017', 'Pengenalan AI', 'Ilmu Komputer', 'Penerbit Andi', 2020),
(18, 'B018', 'Matematika Lanjut', 'Sains', 'Penerbit Karya', 2018),
(19, 'B019', 'Jaringan Neural', 'Ilmu Komputer', 'Gramedia', 2021),
(20, 'B020', 'Pembangunan Aplikasi Mobile', 'Teknik Informatika', 'Erlangga', 2022);

-- --------------------------------------------------------

--
-- Struktur dari tabel `copy_buku`
--

CREATE TABLE `copy_buku` (
  `id_copy` int(11) NOT NULL,
  `kode_buku` varchar(255) NOT NULL,
  `status` enum('Tersedia','Dipinjam','Dikembalikan') NOT NULL DEFAULT 'Tersedia'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `copy_buku`
--

INSERT INTO `copy_buku` (`id_copy`, `kode_buku`, `status`) VALUES
(1, 'B001', 'Tersedia'),
(2, 'B001', 'Tersedia'),
(3, 'B002', 'Tersedia'),
(4, 'B003', 'Dipinjam'),
(5, 'B003', 'Tersedia'),
(6, 'B004', 'Dipinjam'),
(7, 'B005', 'Tersedia'),
(8, 'B006', 'Dipinjam'),
(9, 'B007', 'Tersedia'),
(10, 'B008', 'Dipinjam'),
(11, 'B009', 'Tersedia'),
(12, 'B010', 'Dipinjam'),
(13, 'B011', 'Tersedia'),
(14, 'B012', 'Tersedia'),
(15, 'B013', 'Dipinjam'),
(16, 'B014', 'Tersedia'),
(17, 'B015', 'Tersedia'),
(18, 'B016', 'Dipinjam'),
(19, 'B017', 'Tersedia'),
(20, 'B018', 'Tersedia');

-- --------------------------------------------------------

--
-- Struktur dari tabel `denda`
--

CREATE TABLE `denda` (
  `id_denda` int(11) NOT NULL,
  `id_peminjaman` int(11) DEFAULT NULL,
  `jumlah_denda` int(11) DEFAULT NULL,
  `tanggal_denda` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `denda`
--

INSERT INTO `denda` (`id_denda`, `id_peminjaman`, `jumlah_denda`, `tanggal_denda`) VALUES
(1, 1, 5000, '2025-01-15'),
(2, 2, 0, '2025-01-20'),
(3, 3, 2000, '2025-01-18'),
(4, 4, 0, '2025-01-22'),
(5, 5, 0, '2025-01-19'),
(6, 6, 3000, '2025-01-21'),
(7, 7, 1000, '2025-01-25'),
(8, 8, 0, '2025-01-23'),
(9, 9, 0, '2025-01-28'),
(10, 10, 0, '2025-01-30');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori`
--

CREATE TABLE `kategori` (
  `id_kategori` int(11) NOT NULL,
  `nama_kategori` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `kategori`
--

INSERT INTO `kategori` (`id_kategori`, `nama_kategori`) VALUES
(1, 'Teknik Informatika'),
(2, 'Ilmu Komputer'),
(3, 'Desain'),
(4, 'Manajemen'),
(5, 'Sains'),
(6, 'Pemasaran'),
(7, 'Komunikasi'),
(8, 'Matematika'),
(9, 'Kecerdasan Buatan'),
(10, 'Cloud Computing');

-- --------------------------------------------------------

--
-- Struktur dari tabel `peminjaman`
--

CREATE TABLE `peminjaman` (
  `id_peminjaman` int(11) NOT NULL,
  `id_copy` int(11) DEFAULT NULL,
  `id_anggota_perpustakaan` int(11) DEFAULT NULL,
  `tanggal_pinjam` date DEFAULT NULL,
  `tanggal_kembali` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `peminjaman`
--

INSERT INTO `peminjaman` (`id_peminjaman`, `id_copy`, `id_anggota_perpustakaan`, `tanggal_pinjam`, `tanggal_kembali`) VALUES
(1, 1, 1, '2025-01-01', NULL),
(2, 3, 2, '2025-01-02', NULL),
(3, 6, 3, '2025-01-03', NULL),
(4, 7, 4, '2025-01-04', NULL),
(5, 2, 5, '2025-01-05', NULL),
(6, 8, 6, '2025-01-06', NULL),
(7, 11, 7, '2025-01-07', NULL),
(8, 12, 8, '2025-01-08', NULL),
(9, 15, 9, '2025-01-09', NULL),
(10, 16, 10, '2025-01-10', NULL),
(11, 17, 11, '2025-01-11', NULL),
(12, 18, 12, '2025-01-12', NULL),
(13, 19, 13, '2025-01-13', NULL),
(14, 20, 14, '2025-01-14', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengarang`
--

CREATE TABLE `pengarang` (
  `id_pengarang` int(11) NOT NULL,
  `biografi` text DEFAULT NULL,
  `nama_pengarang` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pengarang`
--

INSERT INTO `pengarang` (`id_pengarang`, `biografi`, `nama_pengarang`) VALUES
(1, 'John Doe adalah seorang ahli pemrograman dan penulis buku teknik informatika.', 'John Doe'),
(2, 'Jane Smith adalah seorang penulis di bidang manajemen dan pemasaran digital.', 'Jane Smith'),
(3, 'Michael Johnson adalah profesor di bidang ilmu komputer dan kecerdasan buatan.', 'Michael Johnson'),
(4, 'Emily Davis adalah pengarang yang berfokus pada topik matematika dan sains.', 'Emily Davis'),
(5, 'David Lee adalah seorang ahli desain grafis dan pengarang buku desain.', 'David Lee'),
(6, 'Sarah White adalah pakar jaringan komputer dan penulis berbagai buku di bidang teknologi.', 'Sarah White'),
(7, 'James Brown adalah pengarang buku tentang algoritma dan struktur data.', 'James Brown'),
(8, 'Patricia Taylor menulis buku terkait pengembangan aplikasi dan web.', 'Patricia Taylor');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengembalian`
--

CREATE TABLE `pengembalian` (
  `id_pengembalian` int(11) NOT NULL,
  `id_peminjaman` int(11) DEFAULT NULL,
  `tanggal_pengembalian` date DEFAULT NULL,
  `denda` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `staf_perpustakaan`
--

CREATE TABLE `staf_perpustakaan` (
  `id_staf` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `nama_staf` varchar(255) NOT NULL,
  `jabatan` varchar(255) DEFAULT NULL,
  `kontak` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `staf_perpustakaan`
--

INSERT INTO `staf_perpustakaan` (`id_staf`, `id_user`, `nama_staf`, `jabatan`, `kontak`) VALUES
(1, 4, 'Pande', 'Kepala Perpustakaan', '081234567890'),
(2, 5, 'Tri', 'Petugas Peminjaman', '081234567891');

-- --------------------------------------------------------

--
-- Struktur dari tabel `stock`
--

CREATE TABLE `stock` (
  `id_stock` int(11) NOT NULL,
  `kode_buku` varchar(255) NOT NULL,
  `jumlah` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `stock`
--

INSERT INTO `stock` (`id_stock`, `kode_buku`, `jumlah`) VALUES
(1, 'B001', 5),
(2, 'B002', 3),
(3, 'B003', 2),
(4, 'B004', 4),
(5, 'B005', 6),
(6, 'B006', 3),
(7, 'B007', 5),
(8, 'B008', 4),
(9, 'B009', 6),
(10, 'B010', 5),
(11, 'B011', 4),
(12, 'B012', 5),
(13, 'B013', 3),
(14, 'B014', 6),
(15, 'B015', 2),
(16, 'B016', 5),
(17, 'B017', 3),
(18, 'B018', 2),
(19, 'B019', 4),
(20, 'B020', 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('admin','anggota','staf') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `username`, `password`, `role`) VALUES
(1, 'cantika', 'password123', 'anggota'),
(2, 'adi', 'password123', 'anggota'),
(3, 'alicia', 'password123', 'anggota'),
(4, 'pande', 'password123', 'staf'),
(5, 'tri', 'password123', 'staf'),
(6, '324455', 'pande', 'anggota'),
(7, '2626u22', 'kadek', 'anggota'),
(8, '264s2652', 'putu', 'anggota');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `anggota_perpustakaan`
--
ALTER TABLE `anggota_perpustakaan`
  ADD PRIMARY KEY (`id_anggota_perpustakaan`);

--
-- Indeks untuk tabel `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`id_buku`),
  ADD UNIQUE KEY `kode_buku` (`kode_buku`);

--
-- Indeks untuk tabel `copy_buku`
--
ALTER TABLE `copy_buku`
  ADD PRIMARY KEY (`id_copy`),
  ADD KEY `kode_buku` (`kode_buku`);

--
-- Indeks untuk tabel `denda`
--
ALTER TABLE `denda`
  ADD PRIMARY KEY (`id_denda`),
  ADD KEY `id_peminjaman` (`id_peminjaman`);

--
-- Indeks untuk tabel `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id_kategori`);

--
-- Indeks untuk tabel `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD PRIMARY KEY (`id_peminjaman`),
  ADD KEY `id_anggota_perpustakaan` (`id_anggota_perpustakaan`),
  ADD KEY `fk_peminjaman_copy` (`id_copy`);

--
-- Indeks untuk tabel `pengarang`
--
ALTER TABLE `pengarang`
  ADD PRIMARY KEY (`id_pengarang`);

--
-- Indeks untuk tabel `pengembalian`
--
ALTER TABLE `pengembalian`
  ADD PRIMARY KEY (`id_pengembalian`),
  ADD KEY `fk_pengembalian_peminjaman` (`id_peminjaman`);

--
-- Indeks untuk tabel `staf_perpustakaan`
--
ALTER TABLE `staf_perpustakaan`
  ADD PRIMARY KEY (`id_staf`),
  ADD KEY `id_user` (`id_user`);

--
-- Indeks untuk tabel `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id_stock`),
  ADD KEY `fk_kode_buku` (`kode_buku`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `anggota_perpustakaan`
--
ALTER TABLE `anggota_perpustakaan`
  MODIFY `id_anggota_perpustakaan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT untuk tabel `buku`
--
ALTER TABLE `buku`
  MODIFY `id_buku` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `copy_buku`
--
ALTER TABLE `copy_buku`
  MODIFY `id_copy` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `denda`
--
ALTER TABLE `denda`
  MODIFY `id_denda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `peminjaman`
--
ALTER TABLE `peminjaman`
  MODIFY `id_peminjaman` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `pengarang`
--
ALTER TABLE `pengarang`
  MODIFY `id_pengarang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `pengembalian`
--
ALTER TABLE `pengembalian`
  MODIFY `id_pengembalian` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `staf_perpustakaan`
--
ALTER TABLE `staf_perpustakaan`
  MODIFY `id_staf` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `stock`
--
ALTER TABLE `stock`
  MODIFY `id_stock` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `copy_buku`
--
ALTER TABLE `copy_buku`
  ADD CONSTRAINT `copy_buku_ibfk_1` FOREIGN KEY (`kode_buku`) REFERENCES `buku` (`kode_buku`);

--
-- Ketidakleluasaan untuk tabel `denda`
--
ALTER TABLE `denda`
  ADD CONSTRAINT `denda_ibfk_1` FOREIGN KEY (`id_peminjaman`) REFERENCES `peminjaman` (`id_peminjaman`),
  ADD CONSTRAINT `fk_denda_peminjaman` FOREIGN KEY (`id_peminjaman`) REFERENCES `peminjaman` (`id_peminjaman`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD CONSTRAINT `fk_peminjaman_anggota` FOREIGN KEY (`id_anggota_perpustakaan`) REFERENCES `anggota_perpustakaan` (`id_anggota_perpustakaan`),
  ADD CONSTRAINT `fk_peminjaman_copy` FOREIGN KEY (`id_copy`) REFERENCES `copy_buku` (`id_copy`),
  ADD CONSTRAINT `peminjaman_ibfk_1` FOREIGN KEY (`id_anggota_perpustakaan`) REFERENCES `anggota_perpustakaan` (`id_anggota_perpustakaan`);

--
-- Ketidakleluasaan untuk tabel `pengembalian`
--
ALTER TABLE `pengembalian`
  ADD CONSTRAINT `fk_pengembalian_peminjaman` FOREIGN KEY (`id_peminjaman`) REFERENCES `peminjaman` (`id_peminjaman`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pengembalian_ibfk_1` FOREIGN KEY (`id_peminjaman`) REFERENCES `peminjaman` (`id_peminjaman`);

--
-- Ketidakleluasaan untuk tabel `staf_perpustakaan`
--
ALTER TABLE `staf_perpustakaan`
  ADD CONSTRAINT `staf_perpustakaan_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Ketidakleluasaan untuk tabel `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `fk_kode_buku` FOREIGN KEY (`kode_buku`) REFERENCES `buku` (`kode_buku`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
