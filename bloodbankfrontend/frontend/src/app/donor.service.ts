import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  private baseUrl = 'http://localhost:8080/api/donors';

  constructor(private http: HttpClient) {}

  getAllDonors(): Observable<any> {
    return this.http.get(`${this.baseUrl}/donorlist`);
  }

  addDonor(donorData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, donorData);
  }


  deleteDonor(dId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${dId}`);
  }


  getDonorById(dId: number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${dId}`);
  }

  updateDonor(dId: number, donor: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${dId}`, donor);
  }

}
