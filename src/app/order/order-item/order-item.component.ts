import { Component, Input, OnInit } from '@angular/core';
import { OrderItemModel } from 'src/app/models/order-item.model';
import { OrderModel } from 'src/app/models/order.model';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() item!: OrderModel
  orderItems!: OrderItemModel[]
   
  constructor() { }

  ngOnInit(): void {
    const id = this.item.order_id
    this.orderItems = this.item.orderItems
  }

}
