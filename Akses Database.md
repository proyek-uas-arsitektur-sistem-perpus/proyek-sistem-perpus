## Setup Database

1. Pastikan MySQL sudah diinstal.
2. Buka XAMPP, aktifkan Apache, MySQL, Filezilla.
3. Buka phpMyAdmin atau MySQL, buat database baru dengan nama `perpustakaan.
4. Impor Database 'perpustakaan.sql' pada database yang telah dibuat.

## Perbedaan menjalankan node server.js dengan node index.js:

## node server.js:
1. Menjalankan backend utama Anda, di mana semua konfigurasi aplikasi sudah dilakukan.
2. Semua endpoint atau rute dari file routes akan tersedia di aplikasi.
3. Biasanya digunakan untuk production atau aplikasi yang lebih lengkap.
## node index.js:
1. Menjalankan server dengan konfigurasi yang lebih kecil (tergantung isi file index.js).
2. Tidak mengakses file routes seperti server.js, kecuali Anda menambahkan rute manual ke dalam index.js.
3. Biasanya digunakan untuk pengujian cepat atau server tambahan.
