import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of} from "rxjs";
import { catchError } from 'rxjs/operators'; 
import { ProductModel } from "../models/product.model";
@Injectable()
export class StoreService {
    private serviceUrl = '/zuul/service/products'

    constructor(private httpClient: HttpClient) {}

    getItems() : Observable<ProductModel[]> {
        return this.httpClient.get<ProductModel[]>(this.serviceUrl + '/get-products')
                .pipe(catchError(this.handleError<ProductModel[]>('getEvents', [])))
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any) : Observable<T> => {
            console.error(error)
            return of(result as T)
        }
    }

    getItem(id:number) : Observable<ProductModel> {
        return this.httpClient.get<ProductModel>(this.serviceUrl + '/' + id);
    }
}