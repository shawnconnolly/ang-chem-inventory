import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { RoomsValidationService } from './rooms-validation.service';
import { RoomsService } from './rooms.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [RoomsService, RoomsValidationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('RoomsComponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('All buttons but add are disabled by default', () => {
    spyOn(component, 'onAdd');
    spyOn(component, 'onRemove');
    spyOn(component, 'onEdit');
    spyOn(component, 'onViewChemicals');
    
    // Add
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('#add');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.onAdd).toHaveBeenCalledTimes(1);
    })

    // remove
    fixture.detectChanges();
    button = fixture.debugElement.nativeElement.querySelector('#remove');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.onRemove).toHaveBeenCalledTimes(0);
    })

    // view
    fixture.detectChanges();
    button = fixture.debugElement.nativeElement.querySelector('#view');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.onViewChemicals).toHaveBeenCalledTimes(0);
    })

  })

  it('Add should call onAdd', () => {
    spyOn(component, 'onAdd');
    let button = fixture.debugElement.nativeElement.querySelector('#add');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.onAdd).toHaveBeenCalledTimes(1);
    })
  })

  it('Select element should call onSelect', () => {
    spyOn(component, 'onSelect');
    const el = fixture.debugElement.query(By.css('li')).nativeElement.click();
    expect(component.onSelect).toHaveBeenCalledTimes(1);
  })

  it('Remove element should call onRemove', () => {
    spyOn(component, 'onRemove');
    let button = fixture.debugElement.nativeElement.querySelector('#remove');
    component.onSelect(1);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      button.click();
      expect(component.onRemove).toHaveBeenCalledTimes(1);
    })
  })

  it('Edit element should call onEdit', () => {
    spyOn(component, 'onEdit');
    let button = fixture.debugElement.nativeElement.querySelector('#edit');
    component.onSelect(1);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      button.click();
      expect(component.onEdit).toHaveBeenCalledTimes(1);
    })
  })

  it('View Chemicals element should call onViewChemicals', () => {
    spyOn(component, 'onViewChemicals');
    let button = fixture.debugElement.nativeElement.querySelector('#view');
    component.onSelect(1);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      button.click();
      expect(component.onViewChemicals).toHaveBeenCalledTimes(1);
    })
  })

  it('validateNameAndLocation should be called when typing in fields', () =>{
    spyOn(component, 'validateNameAndLocation');
    let name = fixture.debugElement.nativeElement.querySelector('#name');
    name.value = 'V';
    name.dispatchEvent(new Event('keyup'));
    let loc = fixture.debugElement.nativeElement.querySelector('#location');
    loc.value = 'V';
    loc.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.validateNameAndLocation).toHaveBeenCalledTimes(2);
    })
  })
});
