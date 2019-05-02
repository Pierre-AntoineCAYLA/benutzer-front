import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors
} from "@angular/forms";
import {BenutzerService} from '../services/BenutzerService';
import {Directive} from "@angular/core";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Directive({
  selector:`[eindeutigmail][ngModel]`,
  providers:[
    {provide:NG_ASYNC_VALIDATORS,
      useExisting: IsteindeutigmailValidator,
      multi:true}
  ]
})
export class IsteindeutigmailValidator implements AsyncValidator {

  constructor(private service: BenutzerService) {
  }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.service.getBenutzerByEmail(c.value).pipe(
      map(benutzer => {
        return benutzer && benutzer.length > 0 ? {"eindeutigmail": true} : null;
      })
    );
  }
}

