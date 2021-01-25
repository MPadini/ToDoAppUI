import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

  constructor(private http: HttpClient) { }

  GetAll(userId: number) {
    return this.http.get<any>(`${environment.api_url}/user/${userId}/UserTask`).pipe(tap(res => { }));
  }

  create(userId: number, task: any) {
    return this.http.post<any>(`${environment.api_url}/user/${userId}/UserTask`, task)
      .pipe(tap(res => { }));
  }

  delete(userId: number, id: any) {
    return this.http.delete<any>(`${environment.api_url}/user/${userId}/UserTask/${id}`)
      .pipe(tap(res => { }));
  }

  update(taskData: any) {
    return this.http.put<any>(`${environment.api_url}/user/${taskData.userId}/UserTask`, taskData)
      .pipe(tap(res => { }));
  }
}
