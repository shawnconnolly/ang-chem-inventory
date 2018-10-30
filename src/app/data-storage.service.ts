import { RoomsService } from './rooms/rooms.service';
import { AuthService } from './auth/auth.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http,
    private authService: AuthService,
    private roomsService: RoomsService) { }

    storeRooms() {
      const token = this.authService.getToken();
      return this.http.put('https://chem-inventory.firebaseio.com/rooms.json?auth=' + token, this.roomsService.getRooms());
    }

    fetchRooms() {
      const token = this.authService.getToken();
      return this.http.get('https://chem-inventory.firebaseio.com/rooms.json?auth=' + token);
    }
}
