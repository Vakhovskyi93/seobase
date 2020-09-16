import { NgModule } from '@angular/core';
import {RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "../../components/login-form/login-form.component";
import { MainComponent } from "../../components/dashbord/main/main.component";

const routes: Routes = [
  {path:'/login', component: LoginFormComponent},
  {path:'/', component: MainComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
