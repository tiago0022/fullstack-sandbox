import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { appHttpConfig } from '../app.config';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private servicePath = appHttpConfig.url + '/user'

  constructor(private http: HttpClient) { }

  getUser(email: string): Observable<User> {
    const params = new HttpParams().append('email', email);
    return this.http.get(this.servicePath, { headers: appHttpConfig.headers, params })
      .pipe(map(user => new User(user)));
  }

}
