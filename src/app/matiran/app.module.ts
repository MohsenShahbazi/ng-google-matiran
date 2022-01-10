import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {ToastrModule} from "ngx-toastr";
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuardGuard} from "./guards/AuthGuard/auth-guard.guard";
import {HttpConfigInterceptor} from "../structure/interceptor/httpconfig.interceptor";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {NgChartsModule} from "ng2-charts";
import {NgxEchartsModule} from "ngx-echarts";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    DashboardComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    NgChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      extend: true
    }),
    ToastrModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [
    AuthGuardGuard,
    {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
