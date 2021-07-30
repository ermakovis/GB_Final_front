import { CategoryItemModel } from "./category-item.model";

export interface ProductModel {
    id: bigint
    category: CategoryItemModel
    title: string
    price: number
    shortDescription: string
    fullDescription: string
    photoUrl: string
}