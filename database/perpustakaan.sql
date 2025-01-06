-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 06, 2025 at 02:02 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
-- Table structure for table `anggota_perpustakaan`
--

CREATE TABLE `anggota_perpustakaan` (
  `id_anggota_perpustakaan` varchar(11) NOT NULL,
  `nama_anggota` varchar(255) DEFAULT NULL,
  `nik` varchar(20) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `no_telp` varchar(15) DEFAULT NULL,
  `jurusan` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `anggota_perpustakaan`
--

INSERT INTO `anggota_perpustakaan` (`id_anggota_perpustakaan`, `nama_anggota`, `nik`, `alamat`, `no_telp`, `jurusan`) VALUES
('A001', 'Anggota 1', '32750001', 'Jl. Raya No.1, Denpasar', '081234567890', 'Teknik Informatika'),
('A002', 'Anggota 2', '32750002', 'Jl. Merdeka No.2, Klungkung', '081234567891', 'Sistem Informasi'),
('A003', 'Anggota 3', '32750003', 'Jl. Pantai No.3, Sanur', '081234567892', 'Ilmu Komputer'),
('A004', 'Anggota 4', '32750004', 'Jl. Pahlawan No.4, Gianyar', '081234567893', 'Manajemen'),
('A005', 'Anggota 5', '32750005', 'Jl. Soekarno-Hatta No.5, Tabanan', '081234567894', 'Akuntansi'),
('A006', 'Anggota 6', '32750006', 'Jl. Merpati No.6, Denpasar', '081234567895', 'Desain Komunikasi Visual'),
('A007', 'Anggota 7', '32750007', 'Jl. Cendana No.7, Badung', '081234567896', 'Hukum'),
('A008', 'Anggota 8', '32750008', 'Jl. Gajah Mada No.8, Singaraja', '081234567897', 'Ekonomi Pembangunan'),
('A009', 'Anggota 9', '32750009', 'Jl. Raya Kuta No.9, Badung', '081234567898', 'Psikologi'),
('A010', 'Anggota 10', '32750010', 'Jl. Sudirman No.10, Denpasar', '081234567899', 'Sosiologi'),
('A011', 'Anggota 11', '32750011', 'Jl. Pemuda No.11, Karangasem', '081234567900', 'Biologi'),
('A012', 'Anggota 12', '32750012', 'Jl. Ciliwung No.12, Jembrana', '081234567901', 'Fisika'),
('A013', 'Anggota 13', '32750013', 'Jl. Mahendradata No.13, Badung', '081234567902', 'Matematika'),
('A014', 'Anggota 14', '32750014', 'Jl. Tamblingan No.14, Singaraja', '081234567903', 'Ilmu Politik'),
('A015', 'Anggota 15', '32750015', 'Jl. Dewi Sartika No.15, Denpasar', '081234567904', 'Pendidikan'),
('A016', 'Anggota 16', '32750016', 'Jl. Raya No.16, Tabanan', '081234567905', 'Ilmu Komunikasi'),
('A017', 'Anggota 17', '32750017', 'Jl. Padma No.17, Bali', '081234567906', 'Seni Rupa'),
('A018', 'Anggota 18', '32750018', 'Jl. Taman Sari No.18, Klungkung', '081234567907', 'Pendidikan Guru Sekolah Dasar'),
('A019', 'Anggota 19', '32750019', 'Jl. Dewa Ruci No.19, Denpasar', '081234567908', 'Agribisnis'),
('A020', 'Anggota 20', '32750020', 'Jl. Sidoarjo No.20, Denpasar', '081234567909', 'Teknik Sipil');

-- --------------------------------------------------------

--
-- Table structure for table `buku`
--

CREATE TABLE `buku` (
  `id_buku` int(11) NOT NULL,
  `kode_buku` varchar(255) DEFAULT NULL,
  `judul` varchar(200) NOT NULL,
  `kategori` varchar(255) NOT NULL,
  `rak` varchar(50) DEFAULT NULL,
  `penerbit` varchar(255) DEFAULT NULL,
  `tahun_terbit` year(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buku`
--

INSERT INTO `buku` (`id_buku`, `kode_buku`, `judul`, `kategori`, `rak`, `penerbit`, `tahun_terbit`) VALUES
(1, 'B001', 'Pemrograman Dasar', 'Teknik Informatika', 'Rak A1', 'Erlangga', '2020'),
(2, 'B002', 'Matematika Dasar', 'Sains', 'Rak A2', 'Andi', '2019'),
(3, 'B003', 'Fisika Lanjut', 'Sains', 'Rak A3', 'Gramedia', '2018'),
(4, 'B004', 'Teori Bahasa', 'Ilmu Komputer', 'Rak B1', 'Penerbit Universitas', '2021'),
(5, 'B005', 'Desain Grafis Modern', 'Desain', 'Rak B2', 'Penerbit Karya', '2022'),
(6, 'B006', 'Sistem Operasi', 'Teknik Informatika', 'Rak C1', 'Penerbit IT', '2020'),
(7, 'B007', 'Jaringan Komputer', 'Teknik Informatika', 'Rak C2', 'Penerbit Andi', '2021'),
(8, 'B008', 'Algoritma dan Struktur Data', 'Ilmu Komputer', 'Rak D1', 'Erlangga', '2019'),
(9, 'B009', 'Manajemen Proyek TI', 'Manajemen', 'Rak D2', 'Gramedia', '2020'),
(10, 'B010', 'Pemrograman Web', 'Teknik Informatika', 'Rak E1', 'Penerbit Komputer', '2021'),
(11, 'B011', 'Kecerdasan Buatan', 'Ilmu Komputer', 'Rak E2', 'Erlangga', '2022'),
(12, 'B012', 'Basis Data', 'Ilmu Komputer', 'Rak F1', 'Penerbit IT', '2019'),
(13, 'B013', 'Cloud Computing', 'Teknik Informatika', 'Rak F2', 'Andi', '2021'),
(14, 'B014', 'Jurnalistik Dasar', 'Komunikasi', 'Rak G1', 'Penerbit Karya', '2020'),
(15, 'B015', 'Pemasaran Digital', 'Pemasaran', 'Rak G2', 'Gramedia', '2022'),
(16, 'B016', 'E-commerce', 'Manajemen', 'Rak H1', 'Penerbit Universitas', '2021'),
(17, 'B017', 'Pengenalan AI', 'Ilmu Komputer', 'Rak H2', 'Penerbit Andi', '2020'),
(18, 'B018', 'Matematika Lanjut', 'Sains', 'Rak I1', 'Penerbit Karya', '2018'),
(19, 'B019', 'Jaringan Neural', 'Ilmu Komputer', 'Rak I2', 'Gramedia', '2021'),
(20, 'B020', 'Pembangunan Aplikasi Mobile', 'Teknik Informatika', 'Rak J1', 'Erlangga', '2022');

-- --------------------------------------------------------

--
-- Table structure for table `copy_buku`
--

CREATE TABLE `copy_buku` (
  `id_copy` int(11) NOT NULL,
  `kode_buku` varchar(255) NOT NULL,
  `status` enum('Tersedia','Dipinjam','Dikembalikan') NOT NULL DEFAULT 'Tersedia'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `copy_buku`
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
-- Table structure for table `denda`
--

CREATE TABLE `denda` (
  `id_denda` int(11) NOT NULL,
  `id_peminjaman` int(11) NOT NULL,
  `jumlah_denda` int(11) NOT NULL,
  `tanggal_denda` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `denda`
--

INSERT INTO `denda` (`id_denda`, `id_peminjaman`, `jumlah_denda`, `tanggal_denda`) VALUES
(1, 11, 5000, '2025-01-15'),
(2, 12, 0, '2025-01-20'),
(3, 13, 2000, '2025-01-18'),
(4, 14, 0, '2025-01-22'),
(5, 15, 0, '2025-01-19'),
(6, 16, 3000, '2025-01-21'),
(7, 17, 1000, '2025-01-25'),
(8, 18, 0, '2025-01-23'),
(9, 19, 0, '2025-01-28'),
(10, 20, 0, '2025-01-30');

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id_kategori` int(11) NOT NULL,
  `nama_kategori` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategori`
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
-- Table structure for table `peminjaman`
--

CREATE TABLE `peminjaman` (
  `id_peminjaman` int(11) NOT NULL,
  `id_copy` int(11) NOT NULL,
  `id_anggota_perpustakaan` varchar(255) NOT NULL,
  `tanggal_pinjam` date NOT NULL,
  `tanggal_kembali` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `peminjaman`
--

INSERT INTO `peminjaman` (`id_peminjaman`, `id_copy`, `id_anggota_perpustakaan`, `tanggal_pinjam`, `tanggal_kembali`) VALUES
(11, 1, 'A001', '2025-01-01', NULL),
(12, 3, 'A002', '2025-01-02', NULL),
(13, 6, 'A003', '2025-01-03', NULL),
(14, 7, 'A004', '2025-01-04', NULL),
(15, 2, 'A005', '2025-01-05', NULL),
(16, 8, 'A006', '2025-01-06', NULL),
(17, 11, 'A007', '2025-01-07', NULL),
(18, 12, 'A008', '2025-01-08', NULL),
(19, 15, 'A009', '2025-01-09', NULL),
(20, 16, 'A010', '2025-01-10', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pengarang`
--

CREATE TABLE `pengarang` (
  `id_pengarang` int(11) NOT NULL,
  `biografi` text DEFAULT NULL,
  `nama_pengarang` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pengarang`
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
-- Table structure for table `pengembalian`
--

CREATE TABLE `pengembalian` (
  `id_pengembalian` int(11) NOT NULL,
  `id_peminjaman` int(11) NOT NULL,
  `tanggal_pengembalian` date NOT NULL,
  `denda` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pengembalian`
--

INSERT INTO `pengembalian` (`id_pengembalian`, `id_peminjaman`, `tanggal_pengembalian`, `denda`) VALUES
(1, 11, '2025-01-15', 5000),
(2, 12, '2025-01-20', 0),
(3, 13, '2025-01-18', 2000),
(4, 14, '2025-01-22', 0),
(5, 15, '2025-01-19', 0),
(6, 16, '2025-01-21', 3000),
(7, 17, '2025-01-25', 1000),
(8, 18, '2025-01-23', 0),
(9, 19, '2025-01-28', 0),
(10, 20, '2025-01-30', 0);

-- --------------------------------------------------------

--
-- Table structure for table `staf_perpustakaan`
--

CREATE TABLE `staf_perpustakaan` (
  `id_staf` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `nama_staf` varchar(255) NOT NULL,
  `jabatan` varchar(255) DEFAULT NULL,
  `kontak` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staf_perpustakaan`
--

INSERT INTO `staf_perpustakaan` (`id_staf`, `id_user`, `nama_staf`, `jabatan`, `kontak`) VALUES
(1, 4, 'Pande', 'Kepala Perpustakaan', '081234567890'),
(2, 5, 'Tri', 'Petugas Peminjaman', '081234567891');

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `id_stock` int(11) NOT NULL,
  `kode_buku` varchar(255) NOT NULL,
  `jumlah` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stock`
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
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('admin','anggota','staf') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `username`, `password`, `role`) VALUES
(1, 'cantika', 'password123', 'anggota'),
(2, 'adi', 'password123', 'anggota'),
(3, 'alicia', 'password123', 'anggota'),
(4, 'pande', 'password123', 'staf'),
(5, 'tri', 'password123', 'staf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anggota_perpustakaan`
--
ALTER TABLE `anggota_perpustakaan`
  ADD PRIMARY KEY (`id_anggota_perpustakaan`);

--
-- Indexes for table `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`id_buku`),
  ADD UNIQUE KEY `kode_buku` (`kode_buku`);

--
-- Indexes for table `copy_buku`
--
ALTER TABLE `copy_buku`
  ADD PRIMARY KEY (`id_copy`),
  ADD KEY `kode_buku` (`kode_buku`);

--
-- Indexes for table `denda`
--
ALTER TABLE `denda`
  ADD PRIMARY KEY (`id_denda`),
  ADD KEY `id_peminjaman` (`id_peminjaman`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id_kategori`);

--
-- Indexes for table `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD PRIMARY KEY (`id_peminjaman`),
  ADD KEY `fk_id_anggota` (`id_anggota_perpustakaan`),
  ADD KEY `fk_id_copy` (`id_copy`);

--
-- Indexes for table `pengarang`
--
ALTER TABLE `pengarang`
  ADD PRIMARY KEY (`id_pengarang`);

--
-- Indexes for table `pengembalian`
--
ALTER TABLE `pengembalian`
  ADD PRIMARY KEY (`id_pengembalian`),
  ADD KEY `fk_id_peminjaman` (`id_peminjaman`);

--
-- Indexes for table `staf_perpustakaan`
--
ALTER TABLE `staf_perpustakaan`
  ADD PRIMARY KEY (`id_staf`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id_stock`),
  ADD KEY `fk_kode_buku` (`kode_buku`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buku`
--
ALTER TABLE `buku`
  MODIFY `id_buku` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `copy_buku`
--
ALTER TABLE `copy_buku`
  MODIFY `id_copy` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `denda`
--
ALTER TABLE `denda`
  MODIFY `id_denda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `peminjaman`
--
ALTER TABLE `peminjaman`
  MODIFY `id_peminjaman` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `pengarang`
--
ALTER TABLE `pengarang`
  MODIFY `id_pengarang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `pengembalian`
--
ALTER TABLE `pengembalian`
  MODIFY `id_pengembalian` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `staf_perpustakaan`
--
ALTER TABLE `staf_perpustakaan`
  MODIFY `id_staf` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `id_stock` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `copy_buku`
--
ALTER TABLE `copy_buku`
  ADD CONSTRAINT `copy_buku_ibfk_1` FOREIGN KEY (`kode_buku`) REFERENCES `buku` (`kode_buku`);

--
-- Constraints for table `denda`
--
ALTER TABLE `denda`
  ADD CONSTRAINT `denda_ibfk_1` FOREIGN KEY (`id_peminjaman`) REFERENCES `peminjaman` (`id_peminjaman`);

--
-- Constraints for table `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD CONSTRAINT `fk_id_anggota` FOREIGN KEY (`id_anggota_perpustakaan`) REFERENCES `anggota_perpustakaan` (`id_anggota_perpustakaan`),
  ADD CONSTRAINT `fk_id_copy` FOREIGN KEY (`id_copy`) REFERENCES `copy_buku` (`id_copy`);

--
-- Constraints for table `pengembalian`
--
ALTER TABLE `pengembalian`
  ADD CONSTRAINT `fk_id_peminjaman` FOREIGN KEY (`id_peminjaman`) REFERENCES `peminjaman` (`id_peminjaman`);

--
-- Constraints for table `staf_perpustakaan`
--
ALTER TABLE `staf_perpustakaan`
  ADD CONSTRAINT `staf_perpustakaan_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Constraints for table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `fk_kode_buku` FOREIGN KEY (`kode_buku`) REFERENCES `buku` (`kode_buku`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
