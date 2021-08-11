import { Component, OnInit } from "@angular/core";
import { ProductModel } from "../models/product.model";
import { CartService } from "../services";

@Component({
    templateUrl : './cart.component.html'
})
export class CartComponent implements OnInit {
    cartItems : ProductModel[] = []

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.cartService.getSubject().subscribe(
            items => {
                this.cartItems = items
            }, err => {
                console.error(err)
            }
        )
    }

    createOrder() {
        this.cartService.createOrder()
    }
}