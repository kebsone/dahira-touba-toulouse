import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppUser } from '../dahira.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  private host = 'http://localhost:8080';
  jwt: string;
  username: string;
  roles: Array<string>;
  currentUser: AppUser = null;

  constructor(private http: HttpClient) { }


  login(mail: string, password: string) {
    console.log('herere', mail, password);
    // On ajoute observe pour dire à http de nous retourner toute la réponse; pas que le body
    return this.http.post(this.host + '/login', { mail, password }, {observe: 'response'});
  }

  saveUser(user: AppUser) {
    console.log('dans save user');
    console.log(user);
    console.log( this.host + '/register', user);
    return this.http.post(this.host + '/register',  user, {observe: 'response'});
  }


  getUserByUsername() {
    console.log('avant envoi', this.username);

    const url = `${this.host}/user/${this.username}`;
    return this.http.get<AppUser>(url);
  }
  saveToken(jwt: string) {
    console.log('jwt', jwt);
    this.jwt = jwt;
    window.localStorage.setItem('token', jwt);
    if (this.jwt) {
      this.parseJwt();
    }
  }

  parseJwt() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.jwt);
    this.username = decodedToken ? decodedToken.username : null;
    this.roles = decodedToken ? decodedToken.roles : null;
    this.getCurrentUser();
  }

  getCurrentUser() {
    let appUSer: AppUser = null;
    this.getUserByUsername().subscribe((response: AppUser) => {
      console.log(response);
      appUSer = response;
      localStorage.setItem('currentUser', JSON.stringify(response));
    }, error => {
      console.log(error);
      });

  }

  isAdmin() {
    return this.roles && this.roles.indexOf('ADMIN') >= 0;
  }

  isUser() {
    return this.roles && this.roles.indexOf('USER') >= 0;
  }

  isAuthencated() {
    return this.isAdmin() || this.isUser();
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJwt();
  }

  deconnecter() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.initParam();
  }

  initParam() {
    this.username = null;
    this.jwt = null;
    this.roles = [];
  }

}
