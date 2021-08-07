import { Routes } from "@angular/router";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { Error404Component } from "./errors/404.component";
import { CartComponent } from "./cart/cart.component";
import {
    StoreItemDetailComponent,
    StoreRouteActivator,
    StoreComponent
} from './store/index'


export const appRoutes: Routes = [
    { path: '', redirectTo: '/store', pathMatch: 'full'},
    { path: 'cart', component: CartComponent},
    { path: 'store', component: StoreComponent},
    { path: 'store/:id', component: StoreItemDetailComponent,
        canActivate: [StoreRouteActivator] },
    { path: 'admin-panel', component: AdminPanelComponent,
        canDeactivate: [StoreRouteActivator]},
    { path: 'profile', 
        loadChildren: () => import('./profile/profile.module')
                        .then(m => m.ProfileModule)
    },
    { path: '404', component: Error404Component}
]