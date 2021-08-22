import { Component, OnInit } from '@angular/core';
import { OrderItemModel } from '../models/order-item.model';
import { OrderService } from '../services/order.service';

@Component({
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  items!: OrderItemModel[]

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.order.subscribe(
      items => this.items = items
    )
  }

}
