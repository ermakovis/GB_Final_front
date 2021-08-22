import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of} from "rxjs";
import { catchError } from 'rxjs/operators'; 
import { CategoryItemModel } from "../models/category-item.model";
import { ProductModel } from "../models/product.model";

const CATEGORIES_URL = '/zuul/service/category'
const PRODUCTS_URL = '/zuul/service/products'

@Injectable()
export class StoreService {
    constructor(private httpClient: HttpClient) {}

    getItems() : Observable<ProductModel[]> {
        return this.httpClient.get<ProductModel[]>(PRODUCTS_URL + '/get-products');
    }

    getItem(id:number) : Observable<ProductModel> {
        return this.httpClient.get<ProductModel>(PRODUCTS_URL + '/' + id);
    }

    getCategories() : Observable<CategoryItemModel[]> {
        return this.httpClient.get<CategoryItemModel[]>(CATEGORIES_URL + '/get-all')
    }
}