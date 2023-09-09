const express = require('express');
const {
  createSales,
  totalRevenue,
  quantityByProduct,
  topProducts,
  averagePrice,
  revenueByMonth,
  highestQuantitySold,
  departmentSalaryExpense,
} = require('./SalesControllers');
const router = express.Router();

router.post('/create', createSales);
router.get('/total-revenue', totalRevenue);
router.get('/quantity-by-product', quantityByProduct);
router.get('/top-products', topProducts);
router.get('/average-price', averagePrice);
router.get('/revenue-by-month', revenueByMonth);
router.get('/highest-quantity-sold', highestQuantitySold);
router.get('/department-salary-expense', departmentSalaryExpense);
exports.SalesRouter = router;
