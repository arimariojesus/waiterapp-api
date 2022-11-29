import { Request, Response } from 'express';

import { Order } from '@/app/models/Order';
import { io } from '@/server';

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const orderCreated = await Order.create({
      table,
      products,
    });
    const orderDetails = await orderCreated.populate('products.product');

    io.emit('orders@new', orderDetails);

    res.status(201).json(orderCreated);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
