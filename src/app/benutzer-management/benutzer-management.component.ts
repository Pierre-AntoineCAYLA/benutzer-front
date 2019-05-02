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
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  deleteBenutzer(benutzer: Benutzer) {
    this.benutzers.splice(this.benutzers.indexOf(benutzer), 1);
    return this.service.deleteBenutzerId(benutzer).subscribe();
  }

  updateBenutzer(benutzer: Benutzer){
    this.router.navigate([PATH_BENUTZER + '/' + PATH_BENUTZER_UPDATE, benutzer.id]);
  }

  ngOnInit() {
    this.service.getBenutzers().subscribe(abs => {
      this.benutzers = abs;
    });
  }
}
