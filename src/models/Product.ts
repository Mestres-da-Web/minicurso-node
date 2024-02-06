import { Schema, model } from 'mongoose';

export const Product = model(
    'Product',
    new Schema({
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        pastPrice: {
            type: Number,
            required: false,
        },
        category: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        store: {
            type: String,
            required: true,
        },
    }),
);
