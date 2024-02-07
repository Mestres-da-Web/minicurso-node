import { Router } from 'express';
import { byIdProduct } from './useCases/products/byIdProduct';
import { createProduct } from './useCases/products/createProduct';
import { deleteProduct } from './useCases/products/deleteProduct';
import { listProduct } from './useCases/products/listProduct';
import { updateProduct } from './useCases/products/updateProduct';

export const router = Router();

router.get('/product', listProduct);
router.get('/product/:id', byIdProduct);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);
