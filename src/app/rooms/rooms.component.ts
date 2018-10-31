import { RoomsService } from './rooms.service';
import { Chemical } from './../chemicals/chemical.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Room } from './room.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomsValidationService } from './rooms-validation.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  roomForm: FormGroup;
  rooms: Room[];
  chemical: Chemical;
  chemicals: Chemical[];
  selectedRoom: number;
  validCombo: boolean = true;

  constructor(private roomsService: RoomsService,
    private router: Router,
    private roomsValidationService: RoomsValidationService) { }

  ngOnInit() {
    this.selectedRoom = -1;
    this.rooms = this.roomsService.getRooms();
    this.roomForm = new FormGroup({
      name: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required)
    });

  }

  validateNameAndLocation() {
    this.validCombo = this.roomsValidationService.validateNameAndLocation(this.rooms,
      this.roomForm.value.name,
      this.roomForm.value.location);
  }

  onAdd() {
    this.roomsService.addRoom(new Room(this.roomForm.value.name, this.roomForm.value.location, new Array<Chemical>()));
    this.rooms = this.roomsService.getRooms();
    this.resetForm();
  }

  onSelect(index) {
    this.roomsService.selectRoom(index);
    this.roomForm.patchValue({
      name: this.rooms[index].name,
      location: this.rooms[index].location
    });
    this.selectedRoom = index;
  }

  onRemove() {
    this.roomsService.removeRoom();
    this.rooms = this.roomsService.getRooms();
    this.roomsService.selectRoom(-1);
    this.resetForm();
  }

  onEdit() {
    this.roomsService.editRoom(new Room(this.roomForm.value.name, this.roomForm.value.location, null));
    this.rooms = this.roomsService.getRooms();
    this.resetForm();
  }

  resetForm() {
    this.roomForm.patchValue({
      name: '',
      location: ''
    });

    this.selectedRoom = -1;
  }
  onViewChemicals() {
    this.router.navigate(['chemicals'])
  }
}
