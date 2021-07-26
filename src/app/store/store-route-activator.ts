import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router } from "@angular/router";
import { StoreService } from "./store.service";

@Injectable()
export class StoreRouteActivator implements CanActivate{
    constructor(private storeSerice: StoreService, private router: Router) {}
    
    //Seems incorrect TODO
    canActivate(route: ActivatedRouteSnapshot) {
        const eventExist = !!this.storeSerice.getItem(Number(route.params['id']))
        if (!eventExist) {
            this.router.navigate(['/404'])
        }
        return eventExist;
    }

    canDeactivate() {
        return true;
    }

}