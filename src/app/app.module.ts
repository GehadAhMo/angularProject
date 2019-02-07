import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpModule} from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CanActivate } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {LoginService} from './login.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RolesComponent } from './roles/roles.component';
import { SingleRoleComponent } from './single-role/single-role.component';
import {ShowDeleteService} from "./show-delete.service";




class UserService {
  isLoggedIn(): boolean {
    return true;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RolesComponent,
    SingleRoleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'roles', component: RolesComponent},
      {path: 'single-role/:id', component: SingleRoleComponent}
    ]),
    HttpClientModule
  ],
  providers: [LoginService, ShowDeleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

class OnlyLoggedInGuard implements CanActivate {

  constructor(private userService: UserService) {
  }
  canActivate() {
    console.log('OnlyLoggedInGuard');
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      alert('You don`t have Permission');
      return false;
    }
  }
}
