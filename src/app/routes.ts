import { Routes } from "@angular/router";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { Error404Component } from "./errors/404.component";
import { CartComponent } from "./cart/cart.component";
import {
    StoreItemDetailComponent,
    StoreRouteActivator,
    StoreComponent
} from './store/index'
import { OrderComponent } from "./order/order.component";


export const appRoutes: Routes = [
    { path: '', redirectTo: '/store', pathMatch: 'full'},
    { path: 'cart', component: CartComponent},
    { path: 'store', component: StoreComponent},
    { path: 'order', component: OrderComponent},
    { path: 'store/:id', component: StoreItemDetailComponent,
        canActivate: [StoreRouteActivator] },
    { path: 'admin-panel', 
        loadChildren: () => import('./admin-panel/admin-panel.module')
                        .then(m => m.AdminPanelModule)
    },
    { path: 'profile', 
        loadChildren: () => import('./profile/profile.module')
                        .then(m => m.ProfileModule)
    },
    { path: '404', component: Error404Component}
]