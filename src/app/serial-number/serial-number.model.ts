export class SerialNumber {
  id: number;
  value: string;
  basemodelId: number;

  constructor(id: number, value: string, basemodelId: number) {
    this.id = id;
    this.value = value;
    this.basemodelId = basemodelId;
  }
}
