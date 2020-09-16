import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MainComponent } from './components/dashbord/main/main.component';
 import { HeaderComponent } from "./components/dashbord/main/header/header.component";
import { UsersComponent } from './components/dashbord/main/users/users/users.component';
import { AccountInfoComponent } from './components/dashbord/main/account-info/account-info.component';
import { SubscriptionComponent } from './components/dashbord/main/subscription/subscription.component';
import { BillingComponent } from './components/dashbord/main/billing/billing.component';
import { InvoicesComponent } from './components/dashbord/main/invoices/invoices.component';
import { CdprComponent } from './components/dashbord/main/cdpr/cdpr.component';
import { ListItemComponent } from './components/dashbord/main/list-item/list-item.component';
import { FlashMessagesModule } from "angular2-flash-messages";
import { FormsModule } from "@angular/forms";
 import { AuthService } from "./components/services/auth.service";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule} from "@angular/fire/firestore";
 import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { ErrorComponent } from './components/dashbord/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    MainComponent,
     HeaderComponent,
    UsersComponent,
    AccountInfoComponent,
    SubscriptionComponent,
    BillingComponent,
    InvoicesComponent,
    CdprComponent,
    ListItemComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.farebase),
    AngularFireAuthModule,
   AngularFirestoreModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [

    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
