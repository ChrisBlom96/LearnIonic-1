import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from '../dashboard/dashboard.page';


import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,

  },

  {
    path: '',
    component: DashboardPage,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {

}
