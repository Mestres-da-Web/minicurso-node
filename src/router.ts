import { Router } from 'express';

export const router = Router();

router.get('/products', (req, res) => {
    res.send('get OK');
});

router.post('/products', (req, res) => {
    res.send('post OK');
});

router.put('/products/:id', (req, res) => {
    res.send('put OK');
});

router.delete('/products/:id', (req, res) => {
    res.send('delete OK');
});
