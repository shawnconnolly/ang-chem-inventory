import { Chemical } from './../chemicals/chemical.model';
import { Room } from './room.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  rooms: Room[];
  selectedRoom: number;

  constructor() {
    const chemical = new Chemical('glucose', 'glucose', '', '50', 'mL', 'SE corner');
    const chemicals = [chemical, chemical];

    this.rooms = [new Room('103','North Building', chemicals),
    new Room('104','North Building', chemicals)]
   }
  getRooms() {
    return this.rooms;
  }
  addRoom(room: Room) {
    this.rooms.push(room);
    this.selectedRoom = -1;
  }
  editRoom(room: Room) {
    const rooms = [...this.rooms];
    rooms[this.selectedRoom].name = room.name;
    rooms[this.selectedRoom].location = room.location;
    this.rooms = rooms;
    this.selectedRoom = -1;
  }
  selectRoom(index){
    this.selectedRoom = index;
  }
  removeRoom() {
    const rooms = [...this.rooms];
    rooms.splice(this.selectedRoom, 1);
    this.rooms = rooms;
    this.selectedRoom = -1;
  }
  getSelectedRoom() {
    return this.selectedRoom;
  }
}
