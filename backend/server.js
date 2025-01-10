const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const catalogRoutes = require('./routes/catalogRoutes');
const borrowingRoutes = require('./routes/borrowingRoutes');
const stockRoutes = require ('./routes/stockRoutes');
const searchRoutes = require("./routes/searchRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rute untuk pengguna
app.use('/api/user', userRoutes);

// Gunakan rute untuk pengguna
app.use('/api', userRoutes);

// Rute untuk peminjaman
app.use('/api/borrowing', borrowingRoutes);
// Rute untuk katalog buku
app.use('/api/catalog', catalogRoutes); // Tambahkan rute katalog
app.use("/api/search", searchRoutes);

// Rute untuk ke stock
app.use('/api/stock', stockRoutes);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});