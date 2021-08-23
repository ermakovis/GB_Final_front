import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { StoreService } from './store.service';

const ADMIN_ITEMS = '/zuul/service/admin'
const HTTP_HEADERS = new HttpHeaders({'Content-Type': 'application/json'})

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {
  private itemsSubject = new BehaviorSubject<ProductModel[]>([])

  constructor(private storeService: StoreService,
    private httpClient: HttpClient) {}
  
  getItemsSubject() : BehaviorSubject<ProductModel[]> {
    this.getItems()
    return this.itemsSubject
  }

  getItems() {
    this.httpClient.get<ProductModel[]>(ADMIN_ITEMS + '/get-all')
    .subscribe(ok => this.itemsSubject.next(ok))
  }

  getItem(id : number) : Observable<ProductModel> {
    return this.storeService.getItem(id);
  }

  deleteItem(item: ProductModel) {
    this.httpClient.delete(ADMIN_ITEMS + '/' + item.id, {'headers': HTTP_HEADERS})
      .subscribe(ok => {this.getItems()})
  }

  editItem(item: ProductModel) {
    this.httpClient.put(ADMIN_ITEMS, item, {'headers': HTTP_HEADERS})
      .subscribe(ok => {this.getItems()}) 
    
  }

  createItem(item: ProductModel) {
    this.httpClient.post(ADMIN_ITEMS, item, {'headers': HTTP_HEADERS})
      .subscribe(ok => {this.getItems()}) 
  }
}
