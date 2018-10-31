import { Room } from './room.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsValidationService {

  constructor() { }

  validateNameAndLocation(rooms: Room[], name: string, location: string) {
    var newArray = rooms.filter((room) => {
      return room.name === name &&
        room.location === location;
    });
    if (newArray.length !== 0) {
      return false;
    } else {
      return true;
    }
  }
}
