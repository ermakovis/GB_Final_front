import { AddressModel } from "./address.model";
import { JwtResponseModel } from "./jwt-response.model";
import { UserModel } from "./user.model";

export interface UserDtoModel {
    jwtResponse?: JwtResponseModel,
    user?: UserModel,
    addresses: AddressModel[]
}