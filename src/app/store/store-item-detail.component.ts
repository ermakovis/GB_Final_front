import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductModel } from "../models/product.model";
import { CartService, StoreService } from "../services";

@Component({
    templateUrl: "./store-item-detail.component.html"
})
export class StoreItemDetailComponent{
    item !: ProductModel;

    constructor(private storeService: StoreService,
        private cartService : CartService,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.storeService
            .getItem(Number(this.route.snapshot.params['id']))
            .subscribe(item => {
                this.item = item
            })
    }

    add() {
        this.cartService.add(this.item)
    }
}