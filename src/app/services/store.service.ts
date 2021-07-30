import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of} from "rxjs";
import { catchError } from 'rxjs/operators'; 
import { StoreItemModel } from "../models/store-item.model";

@Injectable()
export class StoreService {
    constructor(private httpClient: HttpClient) {}

    getItems() : Observable<StoreItemModel[]> {
        return this.httpClient.get<StoreItemModel[]>('/zuul/service/products/get-products')
                .pipe(catchError(this.handleError<StoreItemModel[]>('getEvents', [])))
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any) : Observable<T> => {
            console.error(error)
            return of(result as T)
        }
    }

    getItem(id:number) : StoreItemModel {
        return {
            id: 1,
            title: "qwe",
            cost: 100
        }
    }
}