import { ChemicalsComponent } from './chemicals/chemicals.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RoomsComponent },
  { path: 'chemicals', component: ChemicalsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
