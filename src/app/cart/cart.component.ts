import { Component, OnInit } from "@angular/core";
import { OrderItemModel } from "../models/order-item.model";
import { CartService } from "../services";

@Component({
    templateUrl : './cart.component.html'
})
export class CartComponent implements OnInit {
    private cartItems : OrderItemModel[] = []

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.cartItems = this.cartService.get()
    }

}