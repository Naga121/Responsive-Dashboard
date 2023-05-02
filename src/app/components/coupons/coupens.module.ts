import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoupensRoutingModule } from './coupens-routing.module';
import { CouponsComponent } from './coupons.component';
import { CoupenListComponent } from './coupen-list/coupen-list.component'

@NgModule({
  declarations: [
    CouponsComponent,
    CoupenListComponent
  ],
  imports: [
    CommonModule,
    CoupensRoutingModule
  ]
})
export class CoupensModule { }
