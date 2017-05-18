export class InstructionSheet {
  id: number;
  name: string;
  fileName: string;
  // serial-number: string;
  url: string;
  seriesIdArray: number[];
  serialNumberIdArray: number[];
  basemodelIdArray: number[];

  constructor(id: number,
              name: string,
              fileName: string,
              url: string,
              seriesIdArray: number[],
              serialNumberIdArray: number[],
              basemodelIdArray: number[]) {
    this.id = id;
    this.name = name;
    this.fileName = fileName;
    // this.serial-number = serial-number;
    this.url = url;
    this.seriesIdArray = seriesIdArray;
    this.serialNumberIdArray = serialNumberIdArray;
    this.basemodelIdArray = basemodelIdArray;
  }
}
