import { Schema, model } from "mongoose";
import { DefaultOptionCollection } from "../../base/database/default-option-collection";

const productSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        default: null
    },
    imageUrl: {
        type: String,
        default: null
    },
    enabled: {
        type: Boolean,
        default: true
    }
}, {
    ...DefaultOptionCollection
})

export default model("Product", productSchema, "products");