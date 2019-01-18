import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppUser } from '../dahira.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Options } from 'selenium-webdriver/edge';

@Injectable({
  providedIn: 'root'
})
export class DahiraService {
  private host = 'http://localhost:8080';
  jwt: string;
  username: string;
  roles: Array<string>;
  currentUser: AppUser = null;
  constructor(private http: HttpClient) { }


  login(mail: string, password: string) {
    // On ajoute observe pour dire à http de nous retourner toute la réponse; pas que le body
    return this.http.post(this.host + '/login', { mail, password }, {observe: 'response'});
  }

  saveUser(user: AppUser) {
    return this.http.post(this.host + '/register',  user, {observe: 'response'});
  }

  updateUser(user: AppUser) {
    return this.http.put(this.host + '/user',  user);
  }

  getUserById(id: number) {
    const url = `${this.host}/user/${id}`;
    return this.http.get<AppUser>(url);
  }

  getUserByUsername() {
    const url = `${this.host}/user/${this.username}`;
    return this.http.get<AppUser>(url);
  }

  getDetailsUserByUsername(username: string) {
    const url = `${this.host}/user/${username}`;
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

  getCurrentUser(): AppUser {
    let appUSer: AppUser = null;
    this.getUserByUsername().subscribe((response: AppUser) => {
      console.log(response);
      appUSer = response;
      localStorage.setItem('currentUser', JSON.stringify(response));
    }, error => {
      console.log(error);
      });
    return appUSer;
  }

  getMembres() {
  const dahiraHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.host + '/appUsers', { headers: dahiraHeaders });
  }

  getCommissions() {
    const dahiraHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.host + '/commissions', { headers: dahiraHeaders });
  }

  getPostes() {
    const dahiraHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.host + '/postes', { headers: dahiraHeaders });
  }

  getPostesByCommission(id: number) {
    const url = `${this.host}/postes/${id}`;
    return this.http.get<AppUser>(url);
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
