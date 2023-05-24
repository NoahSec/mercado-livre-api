import express from "express";
import ProductRoutes from "./core/product/product.routes";

const router = express.Router();

router.use('/products', ProductRoutes);

export default router;