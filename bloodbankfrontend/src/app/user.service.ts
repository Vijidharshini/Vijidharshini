import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/userlist`);
  }

  /*
  addUser(donorData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, userdata);
  }*/

  updateUser(userId: number, user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${userId}`, user);
  }

  
  getUserById(userId: number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${userId}`);
  }



  deleteUser(donorId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${donorId}`);
  }



  private currentUserEmail: string | null = null;

  register(userdata: any) {
    // Implement registration logic (e.g., API call)
    return this.http.post(`${this.baseUrl}/add`, userdata);
  }

  login(email: string) : Observable<any>{
    // Implement login logic (e.g., API call)
    // Set current user email upon successful login
    const requestBody = { email: email};
    
    return this.http.post(`${this.baseUrl}/login`, requestBody);
     this.currentUserEmail = email;
    
  }


  getCurrentUserEmail(): string | null {
    return this.currentUserEmail;
  }




  
}
