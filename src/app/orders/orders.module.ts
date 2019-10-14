import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    OrdersRoutingModule
  ],
  exports: [OrdersComponent]
})
export class OrdersModule { }
