import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

const GET_USERS_URL = 'https://jsonplaceholder.typicode.com/users/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(GET_USERS_URL);
  }
}
