const { default: mongoose } = require('mongoose');

// Define the Mongoose schema and model for 'sales'
const salesSchema = new mongoose.Schema({
  product: {
    type: String,
  },
  quantity: { type: Number },
  price: {
    type: Number,
  },
  date: Date,
});

const Sales = mongoose.model('Sales', salesSchema);
module.exports = Sales;
