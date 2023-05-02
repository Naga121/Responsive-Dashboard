import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Overlay, ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ErrorInterceptor } from './guard/error.interceptor';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './layout/header/header.component';
import { TapWidgetsComponent } from './components/tap-widgets/tap-widgets.component';
import { SalesByMonthComponent } from './components/sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from './components/sales-by-category/sales-by-category.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { LastFewTransactComponent } from './components/last-few-transact/last-few-transact.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { SublevelMenuComponent } from './layout/side-nav/sublevel-menu.component';
import { DashboardComponent } from './layout/header/dashboard/dashboard.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    TapWidgetsComponent,
    SalesByMonthComponent,
    SalesByCategoryComponent,
    SideNavComponent,
    LastFewTransactComponent,
    SettingsComponent,
    FooterComponent,
    BodyComponent,
    SublevelMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    CdkMenuModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService,{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
