import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  GetAll() {
    return this.http.get<any>(`${environment.api_url}/user/`).pipe(tap(res => { }));
  }

  delete(id: any) {
    return this.http.delete<any>(`${environment.api_url}/user/${id}`)
      .pipe(tap(res => { }));
  }

  update(userData: any) {
    return this.http.put<any>(`${environment.api_url}/user`, userData)
      .pipe(tap(res => { }));
  }
}
