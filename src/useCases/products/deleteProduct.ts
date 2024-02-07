import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function deleteProduct(req: Request, res: Response) {
    const id: string = req.params.id;

    await Product.findByIdAndDelete(id);

    res.json('success');
}
