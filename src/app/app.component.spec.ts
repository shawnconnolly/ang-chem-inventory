import { RoomsModule } from './rooms/rooms.module';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, By } from '@angular/platform-browser';
import { ChemicalsComponent } from './chemicals/chemicals.component';
import { HeaderComponent } from './header/header.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AuthModule,
        RoomsModule
      ],
      declarations: [
        AppComponent,
        ChemicalsComponent,
        HeaderComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));
  it('app header and router outlet exists', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appHeaderElement = fixture.debugElement.query(By.css('app-header'));
    const routerOutletElement = fixture.debugElement.query(By.css('router-outlet'));
    const component = fixture.componentInstance;
    expect(appHeaderElement).toBeTruthy();
    expect(routerOutletElement).toBeTruthy();
  })

});
