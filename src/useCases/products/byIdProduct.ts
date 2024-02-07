import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function byIdProduct(req: Request, res: Response) {
    const id: string = req.params.id;
    const product = await Product.findById(id);

    res.json(product);
}
