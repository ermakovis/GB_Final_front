import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { CategoryItemModel } from "./category-item.model";

@Injectable()
export class CategoryItemService {
    constructor(private httpClient: HttpClient) {}

    getCategories() : Observable<CategoryItemModel[]> {
        return this.httpClient.get<CategoryItemModel[]>("zuul/service/categoriyes/get-all")
            .pipe(catchError(this.handleError<CategoryItemModel[]>('getCategoryItem', [])))
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any) : Observable<T> => {
            console.error(error)
            return of(result as T)
        }
    }
}