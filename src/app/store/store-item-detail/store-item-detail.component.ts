import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductModel } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";
import { FileSaverService } from "src/app/services/file-saver.service";
import { StoreService } from "src/app/services/store.service";


@Component({
    templateUrl: "./store-item-detail.component.html"
})
export class StoreItemDetailComponent{
    id !: number;
    item !: ProductModel;
    image!: any

    constructor(private storeService: StoreService,
        private cartService : CartService,
        private route: ActivatedRoute,
        private fileService: FileSaverService) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.storeService.getItem(this.id).subscribe(item => {
          this.item = item
          if (!this.item.photoUrl) {
            return
          }
          this.fileService.downloadFile(this.item.photoUrl).subscribe(
            image => {
                this.image = `data:${image.type};base64,${image.pic}`
      
            },
            err => console.error(err) 
          )
        })
    }

    add() {
        this.cartService.add(this.item)
    }
}