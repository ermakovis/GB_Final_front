import { ProductModel } from "./product.model";

export interface OrderItemModel {
    id: bigint
    product: ProductModel
    quantity: number
    price: number
    cost: number            //price * quantity
}