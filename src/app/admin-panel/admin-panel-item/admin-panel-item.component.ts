import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services';

@Component({
  selector: 'admin-panel-item',
  templateUrl: './admin-panel-item.component.html',
  styleUrls: ['./admin-panel-item.component.css']
})
export class AdminPanelItemComponent {
  @Input() item!: ProductModel

  handleEdit() {

  }

  handleDelete() {

  }

  handleDuplicate() {

  }
}