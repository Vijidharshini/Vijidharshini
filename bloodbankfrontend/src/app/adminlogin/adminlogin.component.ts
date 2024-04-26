import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {


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
 
        this.http.post("http://localhost:8080/api/admins/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
 
        if (resultData.message == "Email not exits")
        {
      
          alert("Email not exits");
    
 
        }
        else if(resultData.message == "Login Success")
    
         {
          alert("Login Succesful")
         this.router.navigate(['/adminhome', { email: this.email, password: this.password }]);
          //this.router.navigateByUrl('/adminhome');
        }
        else
        {
          alert("Incorrect Email and Password not match");
        }
      });
    }

}
