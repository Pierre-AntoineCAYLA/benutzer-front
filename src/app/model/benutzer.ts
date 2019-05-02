export class Benutzer {
  public id: number;
  public name: String;
  public vorname: String;
  public email: String;
  public status: boolean
  constructor(name: String, vorname: String, email: String, status: boolean) {
    this.name = name;
    this.vorname = vorname;
    this.email = email;
    this.status=status
  }
}
