import { Request, Response } from 'express';
import { IProductCreateDto } from './product.interface';
import ProductService from './product.service';

export default class ProductController {
    private readonly productService: ProductService;

    constructor(productService: ProductService){
        this.productService = productService;
    }

    async listAll(req: Request, res: Response): Promise<void> {
        const listItems = await this.productService.listActive();

        res.json(listItems);
    }

    async create(req: Request<IProductCreateDto>, res: Response): Promise<void> {
        const data = await this.productService.create(req.body);

        res.status(data.statusCode).send(data);
    }

    async update(req: Request<IProductCreateDto>, res: Response): Promise<void> {
        const data = await this.productService.create(req.body);

        res.status(data.statusCode).send(data);
    }
}