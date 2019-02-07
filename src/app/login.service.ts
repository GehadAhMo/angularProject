import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from './../environments/environment';
@Injectable()
export class LoginService {
rootUrl = environment.rootUrl;
  constructor(private http: Http) { }
  auth(data) {
    return this.http.post(`${this.rootUrl}/api/auth/login`, data)
      .map((response) => response.json());
  }
}
