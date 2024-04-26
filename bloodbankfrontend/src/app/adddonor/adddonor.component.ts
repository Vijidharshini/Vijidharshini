import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-adddonor',
  templateUrl: './adddonor.component.html',
  styleUrl: './adddonor.component.css'
})
export class AdddonorComponent implements OnInit {

  myForm: any;

  fname: string = "";
  lname: string = "";
  bloodGroup: string = "";
  unitsOfBlood = "";
  mobile: number | undefined;
  gender: string = "";
  age: number | undefined;
  disease: string = "";
  state: string = "";
  city: string = "";
  address: string = "";
  date: Date = new Date();




  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder,private donorService: DonorService) {
  }


  clearForm() {
    this.myForm.reset();

  }

  
  ngOnInit() {
    this.myForm = this.fb.group({
      // Define your form controls here
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      unitsOfBlood: ['', Validators.required],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      disease: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      date: ['', Validators.required]

      // Add more form controls as needed
    });
  }


addDonor() {

    let bodyData = {
      "fname": this.fname,
      "lname": this.lname,
      "bloodGroup": this.bloodGroup,
      "unitsOfBlood": this.unitsOfBlood,
      "mobile": this.mobile,
      "gender": this.gender,
      "age": this.age,
      "disease": this.disease,
      "state": this.state,
      "city": this.city,
      "address": this.address,
      "date": this.date
    };

    this.http.post("http://localhost:8080/api/donors/add", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {

      console.log(alert("Donor Added Successfully"),resultData);
      this.router.navigateByUrl('/admin/adddonor');


    });
  }




}












