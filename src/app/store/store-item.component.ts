import { Component, Input } from "@angular/core";
import { NotificationService } from "../notifications/notification.service";
import { CartService } from "../services";
import { ProductModel } from "../models/product.model";


@Component({
    selector: 'store-item',
    templateUrl: './store-item.component.html',
    styles: [`
        .card {
            width: 12rem;
            height: 20rem;
        }
    `]
})
export class StoreItemComponent {
    @Input() item !: ProductModel


    constructor(private notificationService: NotificationService,
        private cartService : CartService) {
    }

    buyButtonClickHandler() {
        this.cartService.add(this.item)
        this.notificationService.showSuccess(this.item.title + ' added');
    }
}

