import { Router } from 'express';

import { listCategories } from '@/app/useCases/categories';

export const router = Router();

// List categories
router.get('/categories', listCategories);
