const express = require("express");
const cors = require("cors");
const catalogRoutes = require("./routes/catalogRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", catalogRoutes); // Prefix "/api" untuk semua route

// Jalankan server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
