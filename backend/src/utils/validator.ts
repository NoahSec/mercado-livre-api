import { ObjectId } from "mongodb";
import { IErrors } from "../base/errors/errors.interface";
import { MessageErrors } from "../base/errors/messages.errors";

export default class Validator{
    static isString(field: string, value: any, min?: number): IErrors{
        const errors: string[] = [];

        if(!value){
            errors.push(MessageErrors.needString);
        }

        if(Number.isInteger(value)){
            errors.push(MessageErrors.needString);
        }

        if(min && value && Number.isInteger(value) && String(value).length < min){
            errors.push(`${MessageErrors.minValueString} ${min}`);
        }

        return {
            field,
            errors
        }
    }

    static isNumber(field: string, value: any): IErrors{
        const errors: string[] = [];

        if(typeof value !== "number"){
            errors.push(MessageErrors.needNumber);
        }

        return {
            field,
            errors
        }
    }

    static isId(field: string, value: any){
        const errors: string[] = [];

        try{
            new ObjectId(value);
        } catch(err){
            errors.push(MessageErrors.needId);
        }

        return {
            field,
            errors
        }
    }
}