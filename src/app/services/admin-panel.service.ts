import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { StoreService } from './store.service';

const HTTP_HEADERS = new HttpHeaders({'Content-Type': 'application/json'})

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {
  private productUrl = "/zuul/service/products"

  private itemsSubject = new BehaviorSubject<ProductModel[]>([])

  constructor(private storeService: StoreService,
    private httpClient: HttpClient) {}
  
  getItemsSubject() : BehaviorSubject<ProductModel[]> {
    this.getItems()
    return this.itemsSubject
  }

  getItem(id : number) : Observable<ProductModel> {
    return this.storeService.getItem(id);
  }

  getItems() {
    this.storeService.getAllItems().subscribe(items => {
      this.itemsSubject.next(items) 
    })
  }

  deleteItem(item: ProductModel) {
    this.httpClient.delete(this.productUrl + '/' + item.id, {'headers': HTTP_HEADERS})
      .subscribe(ok => {this.getItems()})
  }

  editItem(item: ProductModel) {
    this.httpClient.put(this.productUrl, item, {'headers': HTTP_HEADERS})
      .subscribe(ok => {this.getItems()}) 
    
  }

  createItem(item: ProductModel) {
    this.httpClient.put(this.productUrl, item, {'headers': HTTP_HEADERS})
      .subscribe(ok => {this.getItems()}) 
  }
}
