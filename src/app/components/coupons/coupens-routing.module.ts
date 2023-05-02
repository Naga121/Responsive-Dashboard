import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponsComponent } from './coupons.component';
import { CoupenListComponent } from './coupen-list/coupen-list.component';

const routes: Routes = [
  { path: 'create', component: CouponsComponent },
  { path: 'list', component: CoupenListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoupensRoutingModule { }
