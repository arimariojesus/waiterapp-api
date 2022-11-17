import { Router } from 'express';

import { listCategories, createCategory, listProducts } from '@/app/useCases';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);
