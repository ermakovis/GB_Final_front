import { CategoryItemModel } from "./category-item.model";

export interface ProductModel {
    id: number
    category: CategoryItemModel
    title: string
    cost: number
    shortDescription: string
    fullDescription: string
    photoUrl: string
}