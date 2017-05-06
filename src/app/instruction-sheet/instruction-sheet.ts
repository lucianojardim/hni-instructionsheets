export class InstructionSheet {
  name: string;
  barcode: string;
  url: string;

  constructor(name: string, barcode: string, url: string) {
    this.name = name;
    this.barcode = barcode;
    this.url = url;
  }
}
