
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BehaviorSubject, Observable} from "rxjs";
import { map } from "rxjs/operators";
import { UserModel } from "../models/user.model";
import { UserDtoModel } from "../models/userDto.model";
import { ProfileComponent } from "../profile/profile.component";

const HTTP_HEADERS = new HttpHeaders({'Content-Type': 'application/json'})
const AUTH_URL = '/zuul/service'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userSubject: BehaviorSubject<UserDtoModel>
    private isAuthorizedSubject = new BehaviorSubject<boolean>(false)
    public isAuthorized: Observable<boolean>
    public user: Observable<UserDtoModel>

    constructor(private router: Router,
        private http: HttpClient,
        private modalService: NgbModal) {

        let userJson = localStorage.getItem('user')
        if (userJson) {
            this.userSubject = new BehaviorSubject<UserDtoModel>(JSON.parse(userJson))
            this.isAuthorizedSubject.next(true)
        } else {
            this.userSubject = new BehaviorSubject<UserDtoModel>({addressDTOList: []});

        }
        this.isAuthorized = this.isAuthorizedSubject.asObservable();
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): UserDtoModel {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<UserDtoModel>(
            `${AUTH_URL}/auth`, 
            {username, password}, 
            {'headers': HTTP_HEADERS}
            ).pipe(map(user => {
                    localStorage.setItem('user', JSON.stringify(user));
                    this.userSubject.next(user);
                    this.isAuthorizedSubject.next(true)
                    return user;
                }));
    }

    register(username: string, password: string, email: string): Observable<any> {
        let user: UserModel = {
            username: username,
            password: password,
            mail: email
        }
        return this.http.post<UserDtoModel>(AUTH_URL + '/registration', user, {'headers' : HTTP_HEADERS})
    }

    logout() {
        localStorage.removeItem('user');
        this.userSubject.next({addressDTOList: []});
        this.router.navigate(['/store']);
        this.isAuthorizedSubject.next(false)
    }

    showModalWindow() {
        this.modalService.open(ProfileComponent)
    }


}