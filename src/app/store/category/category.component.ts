import { Component, OnInit } from '@angular/core';
import { CategoryItemModel } from 'src/app/models/category-item.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: CategoryItemModel[] = []

  constructor(private service : StoreService) {}

  ngOnInit() {
      return this.service.getCategories().subscribe(categories => {
          this.categories = categories
      })
  }
}
