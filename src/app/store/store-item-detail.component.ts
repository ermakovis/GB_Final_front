import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StoreItemModel } from "./shared";
import { StoreService } from "./shared/store.service";

@Component({
    templateUrl: "./store-item-detail.component.html"
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