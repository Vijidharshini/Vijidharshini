import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent implements OnInit {


  email: string = '';
  //password: string = '';
  //user: any[] | undefined; // Replace 'any' with the actual type of your Java entity

  constructor(private router: Router, private http: HttpClient,private route: ActivatedRoute,private userService: UserService,) {
  }




  ngOnInit() {
    // Retrieve the email and password from the route parameters
    this.route.paramMap.subscribe(params => {
      this.email = params.get('email') || '';
   //   this.password = params.get('password') || '';
    });
  }



  logout() {
    alert('Logout Successful');
    this.router.navigateByUrl('/homepage');
  }


}
