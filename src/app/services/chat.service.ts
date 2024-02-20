import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  private mapToUser(item: any): User {
    return {
      userName: item.name,
      image: item.image,
      created: item.created,
    };
  }

  getUser(): Observable<User> {
    const userUrl = `${this.apiUrl}${1}`;
    console.log(userUrl)
    return this.http
    .get<any>(userUrl)
    .pipe(map((data) => {
      return {
        userName: data.name,
        image: data.image,
        created: data.created,
      }
    }))
  }

  getChats(): Observable<User[]> {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(map((items) => items.results.slice(1, 50).map(this.mapToUser)));
  }

  getNewUpdates(): Observable<User[]> {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(map((items) => items.results.slice(1, 8).map(this.mapToUser)));
  }

  getViewedUpdates(): Observable<User[]> {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(map((items) => items.results.slice(9, 15).map(this.mapToUser)));
  }

  getMutedUpdates(): Observable<User[]> {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(map((items) => items.results.slice(16, 20).map(this.mapToUser)));
  }

  getCalls(): Observable<User[]> {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(map((items) => items.results.slice(1, 20).map(this.mapToUser)));
  }
}
