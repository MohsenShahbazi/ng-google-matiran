import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginGuard} from "./guards/Login/login.guard";
import {AuthGuardGuard} from "./guards/AuthGuard/auth-guard.guard";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {PagenotfoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuardGuard] },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuardGuard] },
  { path: "register", component: RegisterComponent, canActivate: [LoginGuard] },
  { path: "**", redirectTo: '/login', pathMatch: 'full' },
  { path: 'pageNotFound', component: PagenotfoundComponent },
  {
    path: 'page',
    loadChildren: () => import('./page/page.module')
      .then(m => m.PageModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
