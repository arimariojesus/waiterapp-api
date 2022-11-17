import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { listCategories, createCategory, listProducts } from '@/app/useCases';

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
