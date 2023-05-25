import { ResponseWriter } from "../../base/response/response-writer";
import { statusCode } from "../../base/statusCode/statusCode";
import { IProduct, IProductCreateDto } from "./product.interface";
import { ObjectId } from "mongodb";
import { MessageErrors } from "../../base/errors/messages.errors";
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
        const validateId = Validator.isId("id", id);

        if(validateName.errors.length){
            response.errors.push(validateName);
        }

        if(validateDescription.errors.length){
            response.errors.push(validateDescription);
        }

        if(validatePrice.errors.length){
            response.errors.push(validatePrice);
        }

        if(!validateId.errors.length){
            const checkExistsId = await productModel.count({
                _id: new ObjectId(id)
            });

            if(!checkExistsId){
                response.errors.push({
                    field: "id",
                    errors: [MessageErrors.needId]
                })
            }
        } else {
            response.errors.push(validateId);
        }

        if(response.errors.length){
            response.statusCode = statusCode.badRequest;
            return response;
        }

        const data = <IProduct> <unknown>await productModel.updateOne({
            _id: new ObjectId(id)
        }, {
            ...props
        });
        response.success = data;
        return response;
    }

    async deleteById(id: string){
        const response: ResponseWriter<IProduct> = {
            statusCode: statusCode.success,
            errors: []
        }

        const validateId = Validator.isId("id", id);

        if(validateId.errors.length){
            response.errors.push(validateId);
        };

        if(!validateId.errors.length){
            const checkExists = await productModel
            .count({
                _id: new ObjectId(id)
            });

            if(!checkExists){
                response.errors.push({
                    field: "id",
                    errors: [MessageErrors.notFound]
                })
            }
        }

        if(response.errors.length){
            response.statusCode = statusCode.badRequest;
            return response;
        }

        await productModel.updateOne({
            _id: new ObjectId(id)
        }, {
            enabled: false
        });

        return response;
    }
}