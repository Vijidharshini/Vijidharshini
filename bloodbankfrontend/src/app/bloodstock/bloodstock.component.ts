import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bloodstock',
  templateUrl: './bloodstock.component.html',
  styleUrl: './bloodstock.component.css'
})
export class BloodstockComponent {

  bloodDetails: any[] | undefined; // Replace 'any' with the actual type of your Java entity

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getBloodStock();
  }


  getBloodStock() {
    // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your Java backend API
    this.http.get<any[]>('http://localhost:8080/api/bloodDetails/AllBloodDetails')
      .subscribe(data => {
        this.bloodDetails = data;
      });
  }

}
