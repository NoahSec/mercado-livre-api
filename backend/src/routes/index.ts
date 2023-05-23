import express from "express";
import { ProductController } from "../controllers/controllers-reference";

const router = express.Router();
const productController = new ProductController();

router.get('/products', productController.getProducts);

router.post('/products', productController.createProduct);

export default router;