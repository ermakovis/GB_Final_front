import { Component, OnInit } from '@angular/core'
import { StoreItemModel } from "../models/store-item.model";
import { StoreService } from '../services/store.service'

@Component({
    selector: 'store',
    templateUrl: './store.component.html'
})
export class StoreComponent implements OnInit {
    items: StoreItemModel[] = [];
    
    constructor(private service: StoreService) {
        
    }

    ngOnInit() {
        this.service.getItems().subscribe(items => {
            this.items = items;
        })
    }
}