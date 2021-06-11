import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersDOComponent } from './components/orders-do/orders-do.component';
import { OrdersItemDOComponent } from './components/orders-item-do/orders-item-do.component';
import { OrdersItemDetailsDOComponent } from './components/orders-item-details-do/orders-item-details-do.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/do-data.service";

@NgModule({
  declarations: [
    AppComponent,
    OrdersDOComponent,
    OrdersItemDOComponent,
    OrdersItemDetailsDOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
