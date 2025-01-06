const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const catalogRoutes = require('./routes/catalogRoutes'); // Import catalogRoutes

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rute untuk pengguna
app.use('/api/user', userRoutes);

// Rute untuk katalog buku
app.use('/api/catalog', catalogRoutes); // Tambahkan rute katalog

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
