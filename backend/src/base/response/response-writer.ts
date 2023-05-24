import { IErrors } from "../errors/errors.interface";
import { statusCode } from "../statusCode/statusCode";

export interface ResponseWriter<T>{
    statusCode: statusCode,
    success?: T,
    errors: IErrors[]
}