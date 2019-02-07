import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required ,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required ,
        Validators.minLength(8)])
      )
    });
  }
  // onSubmit(email, pass) {
  onSubmit(data) {
    console.log(data);
    this.loginService.auth(data).subscribe(
      res => {
        console.log(res);
      },
      err => { console.log(err); },
      () => {
        this.router.navigate(['roles']);
      });
  }
}
