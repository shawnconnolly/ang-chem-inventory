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
  constructor() { }

  ngOnInit() {
    this.chemical = new Chemical('glucose', 'glucose', '', '50', 'mL', 'SE corner');
    this.chemicals = [this.chemical, this.chemical];

    this.rooms = [new Room('103','North Building', this.chemicals),
    new Room('104','North Building', this.chemicals)]

    this.roomForm = new FormGroup({
      name: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required)
    });

  }

  onAdd() {
    console.log(this.roomForm.value['name']);
    this.rooms.push(new Room (this.roomForm.value['name'], this.roomForm.value['location'], new Array<Chemical>()));
  }

}
