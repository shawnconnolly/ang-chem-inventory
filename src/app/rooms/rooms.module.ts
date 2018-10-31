import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomsComponent } from './rooms.component';
import { RoomsService } from './rooms.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsValidationService } from './rooms-validation.service';

@NgModule({
  declarations: [RoomsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RoomsService, RoomsValidationService]
})
export class RoomsModule { }
