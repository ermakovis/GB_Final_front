import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductModel } from "../models/product.model";
import { CartService, StoreService } from "../services";

@Component({
    templateUrl: "./store-item-detail.component.html"
})
export class StoreItemDetailComponent{
    id !: string;
    item !: ProductModel;

    constructor(private storeService: StoreService,
        private cartService : CartService,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
    }

    add() {
        this.cartService.add(this.item)
    }
}