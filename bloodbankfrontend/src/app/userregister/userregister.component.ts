import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrl: './userregister.component.css'
})
export class UserregisterComponent {


  name :string ="" ;
  mobile:number |undefined;
  gender: string ="";
  age:number | undefined;
  address: string="";
  email:string="";
  password:string="";
  cPassword: string="";


  constructor(private router: Router,private http: HttpClient )
  {
  }
  
  register()
  {
  
    let bodyData = {
      "name" : this.name ,
      "mobile":this.mobile,
      "gender":this.gender,
      "age":this.age,
      "address":this.address,
      "email" : this.email,
      "password" : this.password,
      "cPassword":this.cPassword
    };
    this.http.post("http://localhost:8080/api/users/add",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
      
      if(this.cPassword != this.password)
      {
        alert("Password and confirm Password not matched");
      }
      else
      {
        console.log(resultData);
        alert("User Registered Successfully");
        this.router.navigateByUrl('/userlogin');

      }
       
    });
  }


}
