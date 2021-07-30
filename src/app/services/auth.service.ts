
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private httpOptions: any = new HttpHeaders({'Content-Type': 'application/json'})
    private authEndpoint = '/zuul/service/auth'
    private registrationEndpoint = '/zuul/service/registration'

    constructor(private httpClient: HttpClient){}

    //Any
    login(username: string, password: string): Observable<any> {
        return this.httpClient.post(this.authEndpoint, {
            username,
            password
        }, this.httpOptions);
    }

    register(username: string, password: string, email: string) {
        return this.httpClient.post(this.registrationEndpoint, {
            username,
            password,
            email
        }, this.httpOptions)
    }
}