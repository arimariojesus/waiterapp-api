import { Router } from 'express';

import { listCategories, createCategory } from '@/app/useCases/categories';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);
