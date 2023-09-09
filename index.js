const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { SalesRouter } = require('./src/Sales/SalesRoute');

const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sales_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api/v1/sales', SalesRouter);

// Set up Express.js server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
