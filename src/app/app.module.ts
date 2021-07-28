import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderPanelComponent } from './header/header-panel.component';

import { NotificationService } from './notifications/notification.service';
import { NotificationContainerComponent } from './notifications/notification-container.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { Error404Component } from './errors/404.component';
import { StoreRouteActivator } from './store/store-route-activator';

import {
  StoreItemComponent,
  StoreComponent,
  StoreItemDetailComponent,
  StoreService,
  CategoryComponent,
  CategoryItemComponent,
  CategoryItemService
} from './store/index'
import { AuthService } from './profile/auth.service';
import { FooterPanelComponent } from './footer/footer-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderPanelComponent,
    FooterPanelComponent,
    AdminPanelComponent,
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
    StoreRouteActivator,
    StoreService,
    NotificationService,
    AuthService,
    CategoryItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
