import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodrequestService {

  private baseUrl = 'http://localhost:8080/api/requests';

  constructor(private http: HttpClient) {}

  getAllBloodRequest(): Observable<any> {
    return this.http.get(`${this.baseUrl}/requestlist`);
  }

  /*
  addUser(donorData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, donorData);
  }*/

  updateRequest(donorId: number, donorData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/request/${donorId}`, donorData);
  }

  deleteRequest(donorId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/request/${donorId}`);
  }
}
