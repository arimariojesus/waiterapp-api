import { Request, Response } from 'express';

import { Category } from '@/app/models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    const categoryCreated = await Category.create({ icon, name });

    res.status(201).json(categoryCreated);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
