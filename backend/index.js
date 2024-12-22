const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());  // Middleware untuk parsing JSON request body

// Import routes
const userRoutes = require('./routes/userRoutes');

// Routes untuk pengguna
app.use('/user', userRoutes);

// Route default GET
app.get('/', (req, res) => {
  res.send('Welcome to the Perpustakaan Backend');
});

// Route POST untuk tes
app.post('/', (req, res) => {
  res.send('POST request received');
});

// Mulai server pada port 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
