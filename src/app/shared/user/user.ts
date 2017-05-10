export class User {
  id: number;
  emailAddress: string;
  savedInstructionSheetsIds: number[];
  recentlyDownloadedInstructionSheetIds: number[];

  constructor(id: number, emailAddress: string, savedInstructionSheetsIds: number[], recentlyDownloadedInstructionSheetIds: number[]) {
    this.id = id;
    this.emailAddress = emailAddress;
    this.savedInstructionSheetsIds = savedInstructionSheetsIds;
    this.recentlyDownloadedInstructionSheetIds = recentlyDownloadedInstructionSheetIds;
  }
}
