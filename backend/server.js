const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const catalogRoutes = require('./routes/catalogRoutes');
const searchRoutes = require('./routes/searchRoutes');
const borrowingRoutes = require('./routes/borrowingRoutes');
const stockRoutes = require('./routes/stockRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/catalog', catalogRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/borrowing', borrowingRoutes);
app.use('/api/stock', stockRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
