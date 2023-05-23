import { Request, Response } from 'express';
import { DBJob } from "../jobs/jobs-reference";
import { IProduct } from '../models/product.model';

export default class ProductController {
    public async getProducts(req: Request, res: Response): Promise<void> {
        let collection: string = process.env.DB_PRODUCT_COLLECTION || "";
        let products = await DBJob.getAll(collection);

        res.json(products);
    }

    public async createProduct(req: Request<IProduct>, res: Response): Promise<void> {
        let newProduct: IProduct = { name: req.body.name, price: req.body.price, description: req.body.description, image: req.body.image };
        let collection: string = process.env.DB_PRODUCT_COLLECTION || "";

        await DBJob.insert(newProduct, collection);

        res.json(newProduct);
    }
}