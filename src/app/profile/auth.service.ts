import { Injectable } from "@angular/core";
import { UserModel } from "./user.model";

@Injectable()
export class AuthService {
    currentUser ?: UserModel

    loginUser(login: string, password: string) {
        this.currentUser = {
            id : 1,
            login: 'login',
            firstName: 'Poopa',
            lastName: 'Loopa'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}