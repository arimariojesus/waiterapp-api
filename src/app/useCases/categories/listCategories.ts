import { Request, Response } from 'express';

import { Category } from '@/app/models/Category';

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find();

    res.json(categories).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
