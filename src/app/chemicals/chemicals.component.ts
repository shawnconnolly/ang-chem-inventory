import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../data-storage.service';
import { Observable } from 'rxjs';
import { DialogService } from './../dialog.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomsService } from '../rooms/rooms.service';
import { Room } from '../rooms/room.model';
import { Chemical } from './chemical.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-chemicals',
  templateUrl: './chemicals.component.html',
  styleUrls: ['./chemicals.component.scss']
})
export class ChemicalsComponent implements OnInit {
  selectedRoom: Room;
  chemicalsForm: FormGroup;
  chemicals: Chemical[];
  selectedChemical: number;
  constructor(private roomService: RoomsService,
    public dialogService: DialogService,
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.selectedRoom = this.roomService.getRoom();
    this.chemicals = this.roomService.getChemicals();
    this.selectedChemical = -1;
    if (this.authService.isAuthenticated) {
      this.dataStorageService.fetchRooms();
    }
    this.chemicalsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      tradeName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      unitOfMeasure: new FormControl('', Validators.required),
      cabinet: new FormControl('', Validators.required)
    });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.chemicalsForm.value.name !== '' ||
      this.chemicalsForm.value.tradeName !== '' ||
      this.chemicalsForm.value.description !== '' ||
      this.chemicalsForm.value.quantity !== '' ||
      this.chemicalsForm.value.unitOfMeasure !== '' ||
      this.chemicalsForm.value.cabinet !== '') {
      return this.dialogService.confirm('Discard changes for Chemical?');
    }
    return true;
  }

  onDataSave() {
    this.dataStorageService.storeRooms().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onDataFetch() {
    this.dataStorageService.fetchRooms().subscribe(
      (response: Response) => {
        console.log(response.json());
        this.roomService.setRooms(response.json());
      }
    );
  }

  onAdd() {
    this.roomService.addChemical(
      new Chemical(
        this.chemicalsForm.value.name,
        this.chemicalsForm.value.tradeName,
        this.chemicalsForm.value.description,
        this.chemicalsForm.value.quantity,
        this.chemicalsForm.value.unitOfMeasure,
        this.chemicalsForm.value.cabinet));
    this.resetForm();
  }
  onRemove() {
    this.roomService.removeChemical(this.selectedChemical);
    this.resetForm();
  }
  onEdit() {
    this.roomService.editChemical(new Chemical(
      this.chemicalsForm.value.name,
      this.chemicalsForm.value.tradeName,
      this.chemicalsForm.value.description,
      this.chemicalsForm.value.quantity,
      this.chemicalsForm.value.unitOfMeasure,
      this.chemicalsForm.value.cabinet), this.selectedChemical);
    this.resetForm();
  }
  onSelect(index) {
    this.chemicalsForm.patchValue({
      name: this.selectedRoom.chemicals[index].name,
      tradeName: this.selectedRoom.chemicals[index].tradeName,
      description: this.selectedRoom.chemicals[index].description,
      quantity: this.selectedRoom.chemicals[index].quantity,
      unitOfMeasure: this.selectedRoom.chemicals[index].quantityUoM,
      cabinet: this.selectedRoom.chemicals[index].cabinet
    });

    this.selectedChemical = index;
  }
  resetForm() {
    this.selectedRoom = this.roomService.getRoom();
    this.chemicals = this.roomService.getChemicals();
    this.chemicalsForm.patchValue({
      name: '',
      tradeName: '',
      description: '',
      quantity: '',
      unitOfMeasure: '',
      cabinet: ''
    });

    this.selectedChemical = -1;
  }
}
