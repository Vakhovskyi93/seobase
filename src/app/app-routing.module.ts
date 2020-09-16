import { NgModule } from '@angular/core';
import {RouterModule, Routes } from "@angular/router";

import { MainComponent } from "./components/dashbord/main/main.component";
import { LoginFormComponent} from "./components/login-form/login-form.component";
import { UsersComponent } from "./components/dashbord/main/users/users/users.component";
import { AccountInfoComponent } from "./components/dashbord/main/account-info/account-info.component";
import { SubscriptionComponent } from "./components/dashbord/main/subscription/subscription.component";
import { BillingComponent } from "./components/dashbord/main/billing/billing.component";
import { InvoicesComponent } from "./components/dashbord/main/invoices/invoices.component";
import { CdprComponent } from "./components/dashbord/main/cdpr/cdpr.component";
import {ErrorComponent} from "./components/dashbord/error/error.component";
import { AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  {path:'login', component: LoginFormComponent},
  {path:'', component: MainComponent,  children:[
      {path:'accountinfo', component:AccountInfoComponent, canActivate:[AuthGuard]},
      {path:'users', component:UsersComponent, canActivate:[AuthGuard]},
      {path:'subscription', component:SubscriptionComponent, canActivate:[AuthGuard]},
      {path:'billing', component:BillingComponent, canActivate:[AuthGuard]},
      {path:'invoices', component:InvoicesComponent, canActivate:[AuthGuard]},
      {path:'cdpr', component:CdprComponent, canActivate:[AuthGuard]},

    ]},
  {path:'**', component: ErrorComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
