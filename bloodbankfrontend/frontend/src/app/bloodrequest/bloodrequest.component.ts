import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bloodrequest',
  templateUrl: './bloodrequest.component.html',
  styleUrl: './bloodrequest.component.css'
})
export class BloodrequestComponent 
{

  name :string ="" ;
  email:string="";
  bloodGroup:string="";
  units:number | undefined;
  disease:string="";
  mobile:number |undefined;
  gender: string ="";
  age:number | undefined;
  address: string="";
  date: Date = new Date();


  constructor(private router: Router,private http: HttpClient ,private fb: FormBuilder)
  {
  }

  
  makeRequest()
  {
  
    let bodyData = {
      "name" : this.name ,
      "email" : this.email,
      "bloodGroup":this.bloodGroup,
      "units":this.units,
      "disease":this.disease,
      "mobile":this.mobile,
      "gender":this.gender,
      "age":this.age,
      "address":this.address,
      "date":this.date
    };
    this.http.post("http://localhost:8080/api/requests/add",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
  
        console.log(  alert("Request Sended Successfully"),resultData);
        this.router.navigateByUrl('/userhome');

       
    });
  }


 
 
}
