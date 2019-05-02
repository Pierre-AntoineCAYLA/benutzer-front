import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Benutzer} from '../model/benutzer';
import {API_BASE_URL, API_BENUTZER} from "../app.constRoute";
//import {API_BENUTZER, API_BASE_URL} from './constServices';

@Injectable()
export class BenutzerService {
  constructor(private http: HttpClient) {
  }

  getBenutzers(): Observable<Array<Benutzer>> {

    return <Observable<Array<Benutzer>>> this.http.get(`${API_BASE_URL}${API_BENUTZER}`);
  }

  deleteBenutzerId(benutzer: Benutzer) {
    return this.http.delete(`${API_BASE_URL}${API_BENUTZER}/${benutzer.id}`);
  }

  putBenutzer(benutzer: Benutzer): Observable<Benutzer> {
    return <Observable<Benutzer>> this.http.post(`${API_BASE_URL}${API_BENUTZER}`, benutzer);
  }

  updateBenutzer(benutzer: Benutzer, id:number):any {
    return this.http.put<Benutzer>(`${API_BASE_URL}${API_BENUTZER}/${id}`, benutzer);
  }

  getBenutzerByEmail(email:String){
    return this.http.get<any[]>(`${API_BASE_URL}${API_BENUTZER}?email=${email}`);
  }

  getBenutzerById(id:number): Observable<Benutzer>{
    return <Observable<Benutzer>>this.http.get(`${API_BASE_URL}${API_BENUTZER}/${id}`);
  }

}
