import {Component, OnInit} from '@angular/core';
import {Benutzer} from '../model/benutzer';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BenutzerService} from '../services/BenutzerService';
import {Router} from "@angular/router";
import {PATH_BENUTZER, PATH_BENUTZER_UPDATE} from "../app.constRoute";


@Component({
  selector: 'app-benutzer-management',
  templateUrl: './benutzer-management.component.html',
  styleUrls: ['./benutzer-management.component.css'],
})
export class BenutzersManagementComponent implements OnInit {

  closeResult: string;
  benutzers: Array<Benutzer>;
  constructor(private router: Router,private modalService: NgbModal, private service: BenutzerService) {
  }

  open(content) {
    this.modalService.open(content);
  }
  deleteBenutzer(benutzer: Benutzer) {
    this.benutzers.splice(this.benutzers.indexOf(benutzer), 1);
    return this.service.deleteBenutzerId(benutzer).subscribe();
  }

  updateBenutzer(benutzer: Benutzer){
    this.router.navigate([PATH_BENUTZER + '/' + PATH_BENUTZER_UPDATE, benutzer.id]);
  }

  ngOnInit() {
    this.service.getBenutzers().subscribe(ben => {
      this.benutzers = ben;
    });
  }
}
