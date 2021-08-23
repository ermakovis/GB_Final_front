import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { NotificationService } from 'src/app/notifications/notification.service';
import { CartService } from 'src/app/services/cart.service';
import { FileSaverService } from 'src/app/services/file-saver.service';

@Component({
  selector: 'store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit  {
  @Input() item !: ProductModel
  image!: any

  constructor(private notificationService: NotificationService,
      private fileService: FileSaverService,
      private cartService : CartService) {
  }

  imagePresent(): boolean {
    return this.image
  }

  ngOnInit() {
    if (!this.item) {
      // console.error('No file')
      return
    }
    if (!this.item.photoUrl) {
      return
    }

    this.fileService.downloadFile(this.item.photoUrl).subscribe(
      image => {
          this.image = `data:${image.type};base64,${image.pic}`

      },
      err => console.error(err) 
    )
  }

  buyButtonClickHandler() {
      this.cartService.add(this.item)
      this.notificationService.showSuccess(this.item.title + ' added');
  }
}
