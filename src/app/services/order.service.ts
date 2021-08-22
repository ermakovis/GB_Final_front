import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderItemModel } from '../models/order-item.model';

const HTTP_HEADERS = new HttpHeaders({'Content-Type': 'application/json'})
const ORDER_URL = '/zuul/service/order'

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderSubject: BehaviorSubject<OrderItemModel[]> = new BehaviorSubject<OrderItemModel[]>([])
  public order: Observable<OrderItemModel[]>

  constructor(private httpClient: HttpClient) {
    this.order = this.orderSubject.asObservable()
    this.httpClient.get<OrderItemModel[]>(
        ORDER_URL,
        {headers: HTTP_HEADERS}
      ).subscribe(
        item => {
          this.orderSubject.next(item)
        },
        err => console.error(err)
      )
  }
}
