import { Component, OnInit } from '@angular/core';
import { OrderItemModel } from '../models/order-item.model';
import { OrderModel } from '../models/order.model';
import { OrderService } from '../services/order.service';

@Component({
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  items!: OrderModel[]

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getItems
    this.orderService.order.subscribe(
      items => {
        console.warn(items)
        this.items = items
      }
    )
    
  }

}
