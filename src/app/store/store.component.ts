import { Component, OnInit } from '@angular/core'
import { StoreService } from './store.service'

@Component({
    selector: 'store',
    templateUrl: './store.component.html'
})
export class StoreComponent implements OnInit {
    items?:any
    
    constructor(private service: StoreService) {
        
    }

    ngOnInit() {
        this.service.getItems().subscribe(items => {
            this.items = items;
        })
    }
}