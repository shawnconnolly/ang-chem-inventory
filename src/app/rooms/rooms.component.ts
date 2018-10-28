import { RoomsService } from './rooms.service';
import { Chemical } from './../chemicals/chemical.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Room } from './room.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  constructor(private roomsService: RoomsService) { }

  ngOnInit() {
    this.selectedRoom = -1;
    this.rooms = this.roomsService.getRooms();
    this.roomForm = new FormGroup({
      name: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required)
    });

  }

  onAdd() {
    console.log(this.roomForm.value['name']);
    this.roomsService.addRoom(new Room (this.roomForm.value['name'], this.roomForm.value['location'], new Array<Chemical>()));
    this.rooms = this.roomsService.getRooms();
    this.resetForm();
  }

  onSelect(index) {
    console.log("selected: " + index);
    this.roomsService.selectRoom(index);
    this.roomForm.patchValue({
      name: this.rooms[index].name,
      location: this.rooms[index].location
    });
    this.selectedRoom = index;
  }

  onRemove() {
    console.log("removing selected: " + this.selectedRoom);
    this.roomsService.removeRoom();
    this.rooms = this.roomsService.getRooms();
    this.roomsService.selectRoom(-1);
    this.resetForm();
  }

  onEdit() {
    console.log("editing selected: " + this.selectedRoom);
    this.roomsService.editRoom(new Room(this.roomForm.value['name'], this.roomForm.value['location'], null));
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
}
