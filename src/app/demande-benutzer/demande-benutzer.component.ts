import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {BenutzerService} from "../services/BenutzerService";
import {Benutzer} from "../model/benutzer";

@Component({
  selector: 'app-demande-benutzer',
  templateUrl: './demande-benutzer.component.html',
  styleUrls: ['./demande-benutzer.component.css'],
  providers: [
    FormBuilder
  ]
})
export class DemandebenutzerComponent implements OnInit {

  private _success = new Subject<string>();
  successMessage: string;

  emailCtrl: FormControl;
  nameCtrl: FormControl;
  vornameCtrl: FormControl;
  statusCtrl: FormControl;
  userForm: FormGroup;
  name="";
  vorname="";
  email="";
  status=false;

  constructor(fb: FormBuilder, private benService: BenutzerService) {
    this.statusCtrl=fb.control('',);
    this.nameCtrl = fb.control('', [Validators.required]);
    this.vornameCtrl = fb.control('', [Validators.required]);
    this.emailCtrl= fb.control('', [Validators.required, Validators.email]);
    this.userForm = fb.group({
      name: this.nameCtrl,
      vorname: this.vornameCtrl,
      email: this.emailCtrl,
      status:this.statusCtrl
    });
  }

  handleSubmit() {
    this.benService.putBenutzer(new Benutzer(this.name, this.vorname, this.email, this.status)).subscribe();
  }

  ngOnInit() {
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(3000)
    ).subscribe(() => this.successMessage = null);
  }
  public changeSuccessMessage() {
    this._success.next(`Der Benutzer ist hinzusetzt !`);
  }
}
