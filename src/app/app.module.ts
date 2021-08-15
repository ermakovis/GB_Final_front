import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderPanelComponent } from './header/header-panel.component';

import { NotificationService } from './notifications/notification.service';
import { NotificationContainerComponent } from './notifications/notification-container.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { Error404Component } from './errors/404.component';
import { StoreRouteActivator } from './store/store-route-activator';

import {
  StoreItemComponent,
  StoreComponent,
  StoreItemDetailComponent,
  CategoryComponent,
  CategoryItemComponent,
  CategoryItemService
} from './store/index'

import {
  AuthService,
  StoreService,
  CartService
} from './services/index'
import { FooterPanelComponent } from './footer/footer-panel.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderPanelComponent,
    FooterPanelComponent,
    CartComponent,
    CartItemComponent,
    StoreComponent,
    StoreItemComponent,
    StoreItemDetailComponent,
    CategoryComponent,
    CategoryItemComponent,
    NotificationContainerComponent,
    Error404Component
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    StoreRouteActivator,
    StoreService,
    NotificationService,
    AuthService,
    CategoryItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
