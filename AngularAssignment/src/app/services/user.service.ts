import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'api/users/';
  constructor(private http: HttpClient) { }

  getuser(): Observable<Users[]> {
    return this.http.get<Users[]>(this.userUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  createuser(user: Users): Observable<Users> {
    user.id = null;
    return this.http.post<Users>(this.userUrl, user).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }

  edituser(user: Users): Observable<any> {
    return this.http.put(this.userUrl + user.id, user);
  }

  deleteuser(id: number): Observable<any> {
    return this.http.delete(this.userUrl + id);
  }
}
