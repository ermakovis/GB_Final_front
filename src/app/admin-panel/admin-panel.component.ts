import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductModel } from "../models/product.model";
import { StoreService } from "../services";

@Component({
    templateUrl: './admin-panel.component.html'
})
export class AdminPanelComponent implements OnInit{
    items !: ProductModel[]

    constructor(private router: Router,
        private storeService: StoreService) {} 

    ngOnInit() {
        this.storeService.getItems().subscribe(items => this.items = items)
    }

    handleCreateClick() {
        this.router.navigate(['/store']);
    }
}