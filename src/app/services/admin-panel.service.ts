import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {
  private url = "/zuul/service/products"
  private httpOptions = new HttpHeaders({'Content-Type': 'application/json'})
  private items = new BehaviorSubject<ProductModel[]>([])

  constructor(private storeService: StoreService,
    private httpClient: HttpClient) {}
  
  getItemsSubject() : BehaviorSubject<ProductModel[]> {
    this.getItems()
    return this.items
  }

  getItems() {
    this.storeService.getItems().subscribe(items => this.items.next(items))
  }

  

  editItem(item : ProductModel) {
    this.httpClient.put(this.url, item, {'headers' : this.httpOptions})
      .subscribe() 
    this.getItems()
  }

  createItem(item: ProductModel) {
    this.httpClient.put(this.url, item, {'headers' : this.httpOptions})
      .subscribe() 
    this.getItems()
  }
}
