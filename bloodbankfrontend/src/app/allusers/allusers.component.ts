import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DonorService } from '../donor.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrl: './allusers.component.css'
})
export class AllusersComponent {

  users : any[] | undefined; // Replace 'any' with the actual type of your Java entity

  constructor(private http: HttpClient,private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }



  loadUsers(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

}
