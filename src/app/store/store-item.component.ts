import { Component, Input } from "@angular/core";
import { NotificationService } from "../notifications/notification.service";
import { StoreItemModel } from "./shared";

@Component({
    selector: 'store-item',
    templateUrl: './store-item.component.html',
    styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent {
    constructor(private notificationService: NotificationService) {
    }
    @Input() item !: StoreItemModel

    buyButtonClickHandler() {
        this.notificationService.showSuccess('test');
    }
}

