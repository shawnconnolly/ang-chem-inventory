import { Chemical } from './../chemicals/chemical.model';
import { TestBed } from '@angular/core/testing';

import { RoomsService } from './rooms.service';
import { Room } from './room.model';

describe('RoomsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomsService = TestBed.get(RoomsService);
    expect(service).toBeTruthy();
  });

  it('Set rooms should set rooms', () => {
    const service: RoomsService = TestBed.get(RoomsService);
    const rooms : Room[] = [];
    service.setRooms(rooms);
    expect(service.rooms).toBe(rooms);
  })

  it('Add room should add room',() => {
    const service: RoomsService = TestBed.get(RoomsService);
    const room = new Room('','', []);
    service.addRoom(room);
    expect(service.rooms.length).toEqual(3);
  })

  it('Edit room should edit room',() => {
    const service: RoomsService = TestBed.get(RoomsService);
    const chemical = new Chemical('glucose', 'glucose', '', '50', 'mL', 'SE corner');
    const chemicals = [chemical, chemical];
    const room = new Room('','', chemicals);
    service.selectRoom(1);
    service.editRoom(room);
    expect(service.rooms[1]).toEqual(room);
  })

  it('Remove room should remove room',() => {
    const service: RoomsService = TestBed.get(RoomsService);
    const chemical = new Chemical('glucose', 'glucose', '', '50', 'mL', 'SE corner');
    const chemicals = [chemical, chemical];
    const room = new Room('103','North Building', chemicals);
    service.selectRoom(1);
    service.removeRoom();
    expect(service.rooms.length).toEqual(1);
    expect(service.rooms).toEqual([room]);
    service.selectRoom(0);
    service.removeRoom();
    expect(service.rooms.length).toEqual(0);
  })

  it('Add chemical should add chemical', () => {
    const service: RoomsService = TestBed.get(RoomsService);
    const chemical = new Chemical('glucose', 'glucose', '', '50', 'mL', 'SE corner');
    const chemicals = [chemical, chemical, chemical];
    service.selectRoom(0);
    service.addChemical(chemical);
    expect(service.rooms[0].chemicals).toEqual(chemicals);
  })

  it('Edit chemical should edit chemical', () => {
    const service: RoomsService = TestBed.get(RoomsService);
    const chemical = new Chemical('glucose', 'glucose', '', '50', 'mL', 'SE corner');
    const chemical1 = new Chemical('glucose1', 'glucose1', 'test', '501', 'mL1', 'SE corner1');
    const chemicals = [chemical, chemical1];
    service.selectRoom(0);
    service.editChemical(chemical1, 1);
    expect(service.rooms[0].chemicals).toEqual(chemicals);
  })

  it('Remove chemical should remove chemical', () => {
    const service: RoomsService = TestBed.get(RoomsService);
    const chemical = new Chemical('glucose', 'glucose', '', '50', 'mL', 'SE corner');
    const chemicals = [chemical];
    service.selectRoom(0);
    service.removeChemical(1);
    expect(service.rooms[0].chemicals).toEqual(chemicals);
  })
});
