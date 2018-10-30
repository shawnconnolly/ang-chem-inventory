import { AuthCanDeactivateGuard } from './auth/auth-can-deactivate.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { RoomsService } from './rooms/rooms.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ChemicalsComponent } from './chemicals/chemicals.component';
import { HeaderComponent } from './header/header.component';
import { DialogService } from './dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    ChemicalsComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RoomsService, AuthService, AuthGuard, AuthCanDeactivateGuard, DialogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
