import { Request, Response } from 'express';

import { Product } from '@/app/models/Product';

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();

    res.json(products).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
