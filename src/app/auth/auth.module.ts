import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AuthCanDeactivateGuard } from './auth-can-deactivate.service';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [],
  providers: [
    AuthService,
    AuthGuard,
    AuthCanDeactivateGuard]
})
export class AuthModule { }
