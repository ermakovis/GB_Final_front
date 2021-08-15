import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BasketItemModel } from "../models/basket-item.model";
import { ProductModel } from "../models/product.model";
import { AuthService } from "./auth.service";

const HTTP_HEADERS = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept' : 'application/json'})

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartEndpoint = "/zuul/service/basket"
    private orderUrl = "/zuul/service/order"

    private subject = new BehaviorSubject<BasketItemModel[]>([])

    constructor(private httpClient: HttpClient,
        private authService: AuthService) {
        this.httpClient.get<BasketItemModel[]>(this.cartEndpoint + '/get-basket')
            .subscribe(
                items => {this.subject.next(items)}, 
                err => {console.error(err)}
            )
    }

    getSubject() : BehaviorSubject<BasketItemModel[]> {
        return this.subject
    }

    createOrder() {
        var userModel = this.authService.userValue
        if (!userModel) return

        this.httpClient.post(this.orderUrl + '/create',
            userModel.user,
            {'headers' : HTTP_HEADERS}
        ).subscribe(
            ok => {this.get()},
            err => console.error(err)
        )
    }

    get() {
        this.httpClient.get<BasketItemModel[]>(this.cartEndpoint + '/get-basket', {
            'headers' : HTTP_HEADERS
        }).subscribe(
            items => {
                this.subject.next(items)
            }, err => {
                console.error(err)
            }
        )
    }

    add(product : ProductModel) {
        this.httpClient.post<BasketItemModel[]>(this.cartEndpoint + '/add', product, {
                'headers' : HTTP_HEADERS
            }).subscribe(
                items => {
                    this.subject.next(items)
                }, err => {
                    console.error(err)
                }
            )
    }

    removeOne(product : ProductModel) {
        this.httpClient.post<BasketItemModel[]>(this.cartEndpoint + '/decriment', product, {
            'headers' : HTTP_HEADERS
        }).subscribe(
            items => {
                this.subject.next(items)
            }, err => {
                console.error(err)
            }
        )
    }


    remove(product : ProductModel) {
        this.httpClient.post<BasketItemModel[]>(this.cartEndpoint + '/del', product, {
            'headers' : HTTP_HEADERS
        }).subscribe(
            items => {
                this.subject.next(items)
            }, err => {
                console.error(err)
            }
        )
    }

}