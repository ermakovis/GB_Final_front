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

    updateCurrentUser(firstName: string, lastName: string) {
        if (this.currentUser === undefined) return
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}