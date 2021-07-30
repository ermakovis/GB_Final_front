import { Component, Input } from "@angular/core";
import { CategoryItemModel } from "../../models/category-item.model";

@Component({
    selector: "category-item",
    templateUrl: "./category-item.component.html",
    styleUrls: ["./category-item.component.css"]
})
export class CategoryItemComponent{
    @Input() category !: CategoryItemModel
}