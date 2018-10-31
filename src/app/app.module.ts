import { RoomsModule } from './rooms/rooms.module';
import { AuthModule } from './auth/auth.module';
import { DataStorageService } from './data-storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChemicalsComponent } from './chemicals/chemicals.component';
import { HeaderComponent } from './header/header.component';
import { DialogService } from './dialog.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ChemicalsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AuthModule,
    RoomsModule
  ],
  providers: [
    DialogService,
    DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
