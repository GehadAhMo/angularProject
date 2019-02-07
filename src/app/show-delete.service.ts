import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {environment} from './../environments/environment';
import {ActivatedRoute} from '@angular/router';
@Injectable()
export class ShowDeleteService {
  rootUrl = environment.rootUrl;

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
  constructor(private http: Http, private route: ActivatedRoute) {
  }

  show(role_id) {
    return this.http.post(`${this.rootUrl}/api/orgRole/getRoleById`, {role_id : role_id}, this.getToken())
      .map((response) => response.json());
  }

  delete(role_id, user_role) {
    return this.http.post(`${this.rootUrl}/api/orgRole/deleteOrgRole`, {role_id: role_id, user_role: user_role})
      .map((response) => response.json());
  }
  getToken() {
    const currentUserToken = localStorage.getItem('currentUserToken') || sessionStorage.getItem('currentUserToken');
    const headers = new Headers({'Authorization': 'Bearer ' + currentUserToken});
    return new RequestOptions({headers: headers});
  }
}
