export class InstructionSheet {
  id: number;
  name: string;
  fileName: string;
  // barcode: string;
  url: string;
  seriesIdArray: number[];

  constructor(id: number, name: string, fileName: string, url: string, seriesIdArray: number[]) {
    this.id = id;
    this.name = name;
    this.fileName = fileName;
    // this.barcode = barcode;
    this.url = url;
    this.seriesIdArray = seriesIdArray;
  }
}
