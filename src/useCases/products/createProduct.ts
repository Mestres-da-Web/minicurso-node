import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
    const {
        name,
        description,
        amount,
        price,
        pastPrice,
        category,
        brand,
        store,
    } = req.body;

    const product = new Product({
        name,
        description,
        amount,
        price,
        pastPrice,
        category,
        brand,
        store,
    });

    res.json(product);
}
