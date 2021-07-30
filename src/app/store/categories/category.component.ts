import { Component, OnInit } from "@angular/core";
import { CategoryItemModel } from "../../models/category-item.model";
import { CategoryItemService } from "./category.service";

@Component({
    selector: "category-panel",
    templateUrl: "./category.component.html",
    styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
    categories: CategoryItemModel[] = []

    constructor(private service : CategoryItemService) {}

    ngOnInit() {
        return this.service.getCategories().subscribe(categories => {
            this.categories = categories
            
        })
    }
}