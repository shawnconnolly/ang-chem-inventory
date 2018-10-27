import { Chemical } from '../chemicals/chemical.model';

export class Room {
  public name: string;
  public location: string;
  public chemicals: Chemical[];

  constructor(name: string, location: string, chemicals: Chemical[]) {
    this.name = name;
    this.location = location;
    this.chemicals = chemicals;
  }
}
