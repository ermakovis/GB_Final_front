import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit} from "@angular/core";
import { OrderItemModel } from "../models/order-item.model";
import { ProductModel } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class CartService implements OnInit {
    private cartEndpoint = "/zuul/service/basket"
    private httpOptions : any = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept' : 'application/json'})

    private orderItems: OrderItemModel[] = []

    constructor(private httpClient: HttpClient) {}

    ngOnInit() {
        this.httpClient.get<ProductModel[]>(this.cartEndpoint + '/get-basket')
            .subscribe(items => this.orderItems = this.mapToOrder(items))
    }

    get() : OrderItemModel[] {
        return this.orderItems;
    }

    add(product : ProductModel) {
        this.httpClient.post<ProductModel[]>(this.cartEndpoint + '/add', product, {
                'headers' : this.httpOptions
            }).subscribe(
                items => {
                    this.orderItems = this.mapToOrder(items)
                    console.log(this.orderItems)
                },
                err => {console.error(err)}
            )
        
    }

    mapToOrder(productItems : ProductModel[]) : OrderItemModel[] {
        let ret : OrderItemModel[] = []

        productItems.forEach(e => {
            let item: OrderItemModel | undefined = ret.find(item => item.product.id === e.id)
            if (item) {
                item.quantity++
                item.cost = item.price * item.quantity
            } else {
                item = {
                    id: 0,
                    product: e,
                    quantity: 1,
                    price: e.cost,
                    cost: e.cost
                }
                ret.push(item)
            }
        })

        return ret;
    }

}