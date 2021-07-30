import { AddressModel } from "./address.model";
import { UserModel } from "./user.model";

export interface OrderModel{
    id: bigint
    user: UserModel
    totalQuantity: number
    totalCost: number,
    address: AddressModel
}