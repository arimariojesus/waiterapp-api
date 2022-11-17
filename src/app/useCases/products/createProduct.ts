import { Request, Response } from 'express';

import { Product } from '@/app/models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    const productCreated = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: JSON.parse(ingredients),
      imagePath,
    });

    res.status(201).json(productCreated);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
