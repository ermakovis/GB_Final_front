import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { NotificationService } from 'src/app/notifications/notification.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent  {
  @Input() item !: ProductModel


  constructor(private notificationService: NotificationService,
      private cartService : CartService) {
  }

  buyButtonClickHandler() {
      this.cartService.add(this.item)
      this.notificationService.showSuccess(this.item.title + ' added');
  }
}
