import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { StoreItemModel } from "./store-item.model";

@Injectable()
export class StoreService {
    getItems() : Observable<StoreItemModel[]> {
        let subject = new Subject<StoreItemModel[]>();
        setTimeout(() => {
            subject.next(ITEMS);
            subject.complete;
        }, 100)
        return subject;
    }

    //TODO Add error handler
    getItem(id:number) {
        let item = ITEMS.find(item => item.id === id);
        if (item === undefined) {
            throw new TypeError('No such element');
        }
        return item;
    }
}

const ITEMS : StoreItemModel[] = [
    {
        id: 1,
        title: 'Белая пиксельная коробка',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cost: 150
    },
    {
        id: 2,
        title: 'Белая пиксельная коробка',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cost: 150
    },
    {
        id: 3,
        title: 'Белая пиксельная коробка',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cost: 150
    },
    {
        id: 4,
        title: 'Белая пиксельная коробка',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cost: 150
    },
    {
        id: 5,
        title: 'Белая пиксельная коробка',
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cost: 150
    }
]