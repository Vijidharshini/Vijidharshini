import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {


  email:string="";
  password:string="";

  
  constructor(private router: Router,private http: HttpClient) 
  {
  }


  Login() {
    console.log(this.email);
    console.log(this.password);
 
    let bodyData = {
      email: this.email,
      password: this.password,
    };
 
        this.http.post("http://localhost:8080/api/users/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
 
        if (resultData.message == "Email not exits")
        {
      
          alert("Email not exits");
    
 
        }
        else if(resultData.message == "Login Success")
    
         {
          alert("Login Succesful")
         this.router.navigate(['/userhome', { email: this.email}]);
     //    this.router.navigateByUrl('/userhome');
         
        }
        else
        {
          alert("Incorrect Email and Password not match");
        }
      });
    }
    




}
