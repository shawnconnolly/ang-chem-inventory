import { AuthCanDeactivateGuard } from './auth/auth-can-deactivate.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ChemicalsComponent } from './chemicals/chemicals.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RoomsComponent },
  { path: 'chemicals', component: ChemicalsComponent, canActivate: [AuthGuard], canDeactivate: [AuthCanDeactivateGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
