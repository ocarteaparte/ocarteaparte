import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService {

  constructor(private http: Http) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(user);
    return this.http.post('http://localhost:3000/usersRoute/registerUser', user, {headers: headers})
      .map(res => res.json());
  }

}
