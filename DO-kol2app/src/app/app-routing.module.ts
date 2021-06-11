import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersDOComponent} from "./components/orders-do/orders-do.component";

const routes: Routes = [
  {
    path:'',
    component: OrdersDOComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
