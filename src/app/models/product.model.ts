import { CategoryItemModel } from "./category-item.model";

export interface ProductModel {
    id: number
    category: CategoryItemModel
    title: string
    cost: number
    quantity: number
    shortDescription: string
    fullDescription: string
    photoUrl: string
}