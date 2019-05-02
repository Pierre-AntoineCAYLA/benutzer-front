import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BenutzerManagementUpdateComponent} from './benutzer-management/benutzer-management-update/benutzer-management-update.component';
import {BenutzersManagementComponent} from './benutzer-management/benutzer-management.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.route';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {LayoutComponent} from './layout/layout.component';
import {HttpClientModule} from '@angular/common/http';
import {DemandebenutzerComponent} from './demande-benutzer/demande-benutzer.component';
import {BenutzerService} from './services/BenutzerService';
import {IsteindeutigmailValidator} from "./validators/validators";


@NgModule({
  declarations: [
    AppComponent,
    DemandebenutzerComponent,
    BenutzersManagementComponent,
    BenutzerManagementUpdateComponent,
    LayoutComponent,
    IsteindeutigmailValidator
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BenutzerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
