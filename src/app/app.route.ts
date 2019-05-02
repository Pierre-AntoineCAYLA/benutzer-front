import {Routes} from '@angular/router';
import {BenutzersManagementComponent} from './benutzer-management/benutzer-management.component';
import {
  PATH_BENUTZER,
  PATH_BENUTZER_AJOUT,
  PATH_BENUTZER_UPDATE,
  PATH_LAYOUT,
} from './app.constRoute';
import {BenutzerManagementUpdateComponent} from './benutzer-management/benutzer-management-update/benutzer-management-update.component';
import {LayoutComponent} from './layout/layout.component';
import {DemandebenutzerComponent} from './demande-benutzer/demande-benutzer.component';

export const ROUTES: Routes = [
  {
    path: PATH_LAYOUT, component: LayoutComponent,
    children: [
      {path: PATH_BENUTZER, component: BenutzersManagementComponent},
      {path: PATH_BENUTZER + '/' + PATH_BENUTZER_AJOUT, component: DemandebenutzerComponent},
      {path: PATH_BENUTZER + '/' + PATH_BENUTZER_UPDATE+'/:idBenutzer', component: BenutzerManagementUpdateComponent},
    ]
  },

];

