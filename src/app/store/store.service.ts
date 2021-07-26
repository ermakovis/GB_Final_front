import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class StoreService {
    getItems() {
        let subject = new Subject();
        setTimeout(() => {
            subject.next(ITEMS);
            subject.complete;
        }, 100)
        return subject;
    }

    getItem(id:number) {
        return ITEMS.find(item => item.id === id);
    }
}

const ITEMS = [
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