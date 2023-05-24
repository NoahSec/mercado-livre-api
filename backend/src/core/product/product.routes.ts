import { Router } from "express";
import ProductController from "./product.controller";
import ProductService from "./product.service";

const ProductRoutes = Router();
const productController = new ProductController(
    new ProductService()
);

ProductRoutes.get('/', productController.listAll.bind(productController));
ProductRoutes.post('/', productController.create.bind(productController));

export default ProductRoutes;