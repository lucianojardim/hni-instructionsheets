export class InstructionSheet {
  id: number;
  name: string;
  fileName: string;
  url: string;
  seriesIdArray: number[];
  basemodelIdArray: number[];

  constructor(id: number,
              name: string,
              fileName: string,
              url: string,
              seriesIdArray: number[],
              basemodelIdArray: number[]) {
    this.id = id;
    this.name = name;
    this.fileName = fileName;
    this.url = url;
    this.seriesIdArray = seriesIdArray;
    this.basemodelIdArray = basemodelIdArray;
  }
}
