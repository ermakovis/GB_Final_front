import { Component, Injectable, OnInit } from '@angular/core'
import { ProductModel } from '../models/product.model';
import { StoreService } from '../services/store.service'

@Component({
    selector: 'store',
    templateUrl: './store.component.html'
})
export class StoreComponent implements OnInit {
    items: ProductModel[] = [];
    
    constructor(private service: StoreService) {}

    ngOnInit() {
        this.service.getItems().subscribe(items => {
            this.items = items;
        })
    }
}