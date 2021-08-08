
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserModel } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = '/zuul/service'
    private httpOptions: any = new HttpHeaders({'Content-Type': 'application/json'})
    private user = new BehaviorSubject<UserModel>({'id' : -1, 'login' : 'dummy'})
    private authorized = new BehaviorSubject<boolean>(false)

    constructor(private httpClient: HttpClient){}

    getSubject() : BehaviorSubject<UserModel> {
        return this.user;
    }

    isAuthorized() : BehaviorSubject<boolean> {
        return this.authorized
    }

    login(username: string, password: string) {
        return this.httpClient.post<UserModel>(this.url + '/auth', {
            username,
            password
        }, {'headers' : this.httpOptions})
            .subscribe(
                user => {
                    console.warn(user)
                    this.user.next(user)
                    this.authorized.next(true)
                }, err => console.error(err));
                
    }

    register(username: string, password: string, email: string) {
        return this.httpClient.post<UserModel>(this.url + '/registration', {
            username,
            password,
            email
        }, {'headers' : this.httpOptions})
            .subscribe(user => this.user.next(user));
    }
}