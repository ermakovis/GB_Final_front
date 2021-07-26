import { Component, Input } from "@angular/core";
import { NotificationService } from "../notifications/notification.service";

@Component({
    selector: 'store-item',
    templateUrl: './store-item.component.html'
})
export class StoreItemComponent {
    constructor(private notificationService: NotificationService) {
    }
    @Input() item:any

    buyButtonClickHandler() {
        this.notificationService.showSuccess('test');
    }
}

