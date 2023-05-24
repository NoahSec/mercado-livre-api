import { ObjectId } from "mongodb";

export interface IProduct{
    id: ObjectId,
    name: string,
    description?: string,
    price: number,
    imageUrl?: string,
    enabled: boolean
}

export type IProductCreateDto = Omit<IProduct, "id" | "enabled">