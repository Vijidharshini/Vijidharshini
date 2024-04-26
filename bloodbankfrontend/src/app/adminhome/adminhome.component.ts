import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent {

  admin: any[] | undefined; // Replace 'any' with the actual type of your Java entity

  constructor(private router: Router, private http: HttpClient) {
  }



  ngOnInit() {
    this.getName();
  }


  
  getName() {
    // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your Java backend API
    this.http.get<any[]>('http://localhost:8080/api/admins/adminlist').subscribe(data => {
        this.admin = data;
      });
  }


  logout() {
    alert('Logout Successful');
    this.router.navigateByUrl('/homepage');
  }

  search()
  {
    this.router.navigateByUrl('/admin/updatedonor');
  }


}
