import { ResponseWriter } from "../../base/response/response-writer";
import { statusCode } from "../../base/statusCode/statusCode";
import { IProduct, IProductCreateDto } from "./product.interface";
import productModel from "./product.model";
import Validator from "../../utils/validator";

export default class ProductService{
    async listActive(){
        return await productModel.find({
            enabled: true
        })
    }

    async create(props: IProductCreateDto): Promise<ResponseWriter<IProduct>>{
        const response: ResponseWriter<IProduct> = {
            statusCode: statusCode.success,
            errors: []
        }
        const validateName = Validator.isString("name", props.name, 1);
        const validateDescription = Validator.isString("description", props.description, 1);
        const validatePrice = Validator.isNumber("price", props.price);

        if(validateName.errors.length){
            response.errors.push(validateName);
        }

        if(validateDescription.errors.length){
            response.errors.push(validateDescription);
        }

        if(validatePrice.errors.length){
            response.errors.push(validatePrice);
        }

        if(response.errors.length){
            response.statusCode = statusCode.badRequest;
            return response;
        }

        const data = <IProduct> await productModel.create(props);
        response.success = data;
        return response;
    }

    async updateById(id: string, props: IProductCreateDto): Promise<ResponseWriter<IProduct>>{
        const response: ResponseWriter<IProduct> = {
            statusCode: statusCode.success,
            errors: []
        }
        const validateName = Validator.isString("name", props.name, 1);
        const validateDescription = Validator.isString("description", props.description, 1);
        const validatePrice = Validator.isNumber("price", props.price);

        if(validateName.errors.length){
            response.errors.push(validateName);
        }

        if(validateDescription.errors.length){
            response.errors.push(validateDescription);
        }

        if(validatePrice.errors.length){
            response.errors.push(validatePrice);
        }

        if(response.errors.length){
            response.statusCode = statusCode.badRequest;
            return response;
        }

        const data = <IProduct> await productModel.create(props);
        response.success = data;
        return response;
    }
}