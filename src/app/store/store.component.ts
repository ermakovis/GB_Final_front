import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { StoreService } from '../services/store.service';


@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  items: ProductModel[] = []

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getItems().subscribe(
      items => this.items = items
    )
  }

}
