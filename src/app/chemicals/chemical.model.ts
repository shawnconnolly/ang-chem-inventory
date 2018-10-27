export class Chemical {
  public name: string;
  public tradeName: string;
  public description: string;
  public quantity: string;
  public quantityUoM: string;
  public cabinet: string;

  constructor(name: string, tn: string, desc: string, qty: string, qtyUoM: string, cabinet: string) {
    this.name = name;
    this.tradeName = tn;
    this.description = desc;
    this.quantity = qty;
    this.quantityUoM = qtyUoM;
    this.cabinet = cabinet;
  }
}
