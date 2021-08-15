import { Component, OnInit } from "@angular/core";
import { BasketItemModel } from "../models/basket-item.model";
import { ProductModel } from "../models/product.model";
import { CartService } from "../services";

@Component({
    templateUrl : './cart.component.html'
})
export class CartComponent implements OnInit {
    cartItems : BasketItemModel[] = []

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.cartService.getSubject().subscribe(
            items => {
                console.log(items)
                this.cartItems = items
            }, err => {
                console.error(err)
            }
        )
    }

    createOrder() {
        console.log("CART - createOrder called")
        this.cartService.createOrder()
    }
}