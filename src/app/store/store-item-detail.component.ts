import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StoreService } from "./store.service";

@Component({
    templateUrl: "./store-item-detail.component.html"
})
export class StoreItemDetailComponent{
    item: any

    constructor(private storeService: StoreService,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.item = this.storeService.getItem(
            Number(this.route.snapshot.params['id'])
        )
    }
}