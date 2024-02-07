import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function updateProduct(req: Request, res: Response) {
    const id: string = req.params.id;
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

    await Product.findByIdAndUpdate(id, {
        id,
        name,
        description,
        amount,
        price,
        pastPrice,
        category,
        brand,
        store,
    });

    res.json('success');
}
