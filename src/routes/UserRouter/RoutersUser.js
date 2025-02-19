import express from 'express';
import authRouter from "./auth.js";
import categoriesRouter from "./categories.js"
import userRouter from "./user.js";
import productRouter from './Products.js';
import cartRouter from './Cart.js';
const router = express.Router();

// Import các routes từ các tệp riêng lẻ
router.use('/auth', authRouter);
router.use('/categories', categoriesRouter);
router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/carts', cartRouter);
export default router;
