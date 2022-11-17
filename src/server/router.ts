import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import {
  listCategories,
  createCategory,
  listProducts,
  createProduct,
  listProductsByCategory,
  listOrders,
  createOrder,
  changeOrderStatus,
} from '@/app/useCases';

export const router = Router();

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, path.resolve(__dirname, '..', '..', 'uploads'));
  },
  filename(req, file, callback) {
    const originalname: string = file.originalname;
    const filename = `${Date.now()}-${originalname}`;
    callback(null, filename);
  },
});

const upload = multer({ storage });

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image'), createProduct);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
