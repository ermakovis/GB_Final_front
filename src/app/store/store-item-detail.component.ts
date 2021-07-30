import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StoreItemModel } from "../models/store-item.model";
import { StoreService } from "../services/store.service";

@Component({
    templateUrl: "./store-item-detail.component.html",
    styleUrls: ["./store-item-detail.component.css"]
})
export class StoreItemDetailComponent{
    item !: StoreItemModel;

    constructor(private storeService: StoreService,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.item = this.storeService.getItem(
            Number(this.route.snapshot.params['id'])
        )
    }
}