import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit} from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { OrderItemModel } from "../models/order-item.model";
import { ProductModel } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartEndpoint = "/zuul/service/basket"
    private httpOptions : any = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept' : 'application/json'})

    private subject = new BehaviorSubject<ProductModel[]>([])

    constructor(private httpClient: HttpClient) {
        this.httpClient.get<ProductModel[]>(this.cartEndpoint + '/get-basket')
            .subscribe(
                items => {
                    this.subject.next(items)
                }, err => {
                    console.error(err)
                }
            )
    }

    getSubject() : BehaviorSubject<ProductModel[]> {
        return this.subject
    }

    get() {
        this.httpClient.get<ProductModel[]>(this.cartEndpoint + '/get-basket', {
            'headers' : this.httpOptions
        }).subscribe(
            items => {
                this.subject.next(items)
            }, err => {
                console.error(err)
            }
        )
    }

    add(product : ProductModel) {
        this.httpClient.post<ProductModel[]>(this.cartEndpoint + '/add', product, {
                'headers' : this.httpOptions
            }).subscribe(
                items => {
                    this.subject.next(items)
                }, err => {
                    console.error(err)
                }
            )
    }

    remove(product : ProductModel) {
        this.httpClient.post<ProductModel[]>(this.cartEndpoint + '/del', product, {
            'headers' : this.httpOptions
        }).subscribe(
            items => {
                this.subject.next(items)
            }, err => {
                console.error(err)
            }
        )
    }

}