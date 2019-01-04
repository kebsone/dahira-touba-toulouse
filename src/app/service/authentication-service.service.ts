import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  private host = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  login(userName: string, password: string) {
    console.log('herere', userName, password);
    return this.http.post(this.host + '/login', { userName, password }, {observe: 'response'});

    console.log('herere');
    // return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
    //     .pipe(map(user => {
    //         // login successful if there's a jwt token in the response
    //         if (user && user.token) {
    //             // store user details and jwt token in local storage to keep user logged in between page refreshes
    //             localStorage.setItem('currentUser', JSON.stringify(user));
    //             this.currentUserSubject.next(user);
    //         }

    //         return user;
    //     }));
  }
  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
  }
}
