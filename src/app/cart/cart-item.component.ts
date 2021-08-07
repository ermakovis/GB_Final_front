import { Component, Input, OnInit } from "@angular/core";
import { OrderItemModel } from "../models/order-item.model";
import { ProductModel } from "../models/product.model";
import { CartService } from "../services";

@Component({
    selector: 'cart-item',
    templateUrl: './cart-item.component.html',
    styles: [`
        .cart-item {
            background-color: #FFF;
            background-clip: border-box;
            border: 1px solid rgba(0, 0, 0, 0.125);
            border-radius: 0.25rem;
            overflow: hidden;
        }

        .cart-image-size {
            height:3.75rem;
            width:3.75rem;
            vertical-align: middle;
        }
    `]
})
export class CartItemComponent { 
    @Input() item !: ProductModel
    
    constructor(private cartService: CartService) {}

    onMinus() {
        this.cartService.remove(this.item)
    }

    onPlus() {
        this.cartService.add(this.item)
    }
}