import express from 'express';
import { getPrintfulProducts } from '../controllers/productController.js';

const router = express.Router();
router.get('/', getPrintfulProducts);

export default router;