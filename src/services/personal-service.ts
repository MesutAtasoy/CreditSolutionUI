import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {IPersonalType} from '../types/personal-type';

@Injectable()
export class PersonalService {
  constructor(private http: HttpClient) {
  }

  postPersonalData(oData: any): Observable<any> {
    const body = JSON.stringify(oData);

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    
    return this.http.post(environment.apiUrl +  '/credit/api/v1/Credit/CreateRequest', body, httpOptions);
  }
}
