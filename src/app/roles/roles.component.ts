import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from './../../environments/environment';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  rootUrl = environment.rootUrl;
  roles: any = [];
  constructor(private http: Http) {
  }

  ngOnInit() {
    console.log('roles component');
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };
    const currentUserToken = localStorage.getItem('currentUserToken') || sessionStorage.getItem('currentUserToken');
    const headers = new Headers({'Authorization': 'Bearer ' + currentUserToken});
    const requestOptions = new RequestOptions({headers: headers});
    this.http.get(`${this.rootUrl}/api/orgRole/all`, requestOptions)
      .map((response) => response.json())
      .subscribe(res => this.getRoles(res));
  }

  getRoles(data) {
    this.roles = data.data;
    console.log(this.roles);
  }
}
