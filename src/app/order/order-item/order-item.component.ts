import { Component, Input, OnInit } from '@angular/core';
import { OrderItemModel } from 'src/app/models/order-item.model';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() item!: OrderItemModel
  orderString!: string
  
  constructor() { }

  ngOnInit(): void {
    this.orderString = JSON.stringify(this.item)
  }

}
