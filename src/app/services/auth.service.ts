
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
    private token : String = ""

    constructor(private httpClient: HttpClient){}

    getToken() : String {
        return this.token
    }

    getSubject() : BehaviorSubject<UserModel> {
        return this.user;
    }

    isAuthorized() : BehaviorSubject<boolean> {
        return this.authorized
    }

    login(username: string, password: string) {
        return this.httpClient.post<String>(this.url + '/auth', {
            username,
            password
        }, {'headers' : this.httpOptions})
            .subscribe(
                user => {
                    console.warn(user)
                    this.token = user
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