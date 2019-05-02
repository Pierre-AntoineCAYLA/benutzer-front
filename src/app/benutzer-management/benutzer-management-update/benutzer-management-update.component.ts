import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {BenutzerService} from "../../services/BenutzerService";
import {PATH_BENUTZER} from "../../app.constRoute";
import {Benutzer} from "../../model/benutzer";

@Component({
  selector: 'app-modifier-benutzer',
  templateUrl: './benutzer-management-update.component.html',
  styleUrls: ['./benutzer-management-update.component.css'],
  providers: [
  ]
})
export class BenutzerManagementUpdateComponent implements OnInit {

  statusCtrl: FormControl;
  benutzerForm: FormGroup;
  status:false;

  benutzer: Benutzer = new Benutzer("", "", "", false);
  naueBenutzer: Benutzer = new Benutzer("","","",false);

  constructor(fb: FormBuilder, private router: Router, private route: ActivatedRoute,private benutzerService: BenutzerService) {


    this.statusCtrl = fb.control('', []);

    this.benutzerForm = fb.group({
      status: this.statusCtrl
    });
  }

  handleSubmit() {
    setTimeout(() => {
      this.router.navigate([PATH_BENUTZER]);
    }, 100);
  }

  updateBenutzer(benutzer: Benutzer) {
    this.benutzerService.updateBenutzer(new Benutzer(benutzer.name, benutzer.vorname, benutzer.email, this.status), this.benutzer.id).subscribe();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.benutzer.id = +params.get('idBenutzer');
    });
    this.benutzerService.getBenutzerById(this.benutzer.id).toPromise().then(m => this.benutzer = m);
    this.benutzerService.getBenutzerById(this.benutzer.id).toPromise().then(m => this.naueBenutzer= m);
    console.log(this.benutzer)
  }

}
