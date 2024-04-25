import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-updatedonor',
  templateUrl: './updatedonor.component.html',
  styleUrl: './updatedonor.component.css'
})
export class UpdatedonorComponent  implements OnInit{

  dId: any;
  donor: any = {};

  constructor( private route: ActivatedRoute,private donorService: DonorService,private router: Router) 
  
  {
   
  }

  ngOnInit(): void {
    this.dId = this.route.snapshot.params['dId'];
    this.donorService.getDonorById(this.dId).subscribe(data =>{
      this.donor = data;
    }, error => console.log(error));
  }

 

  updateDonor(): void {
    this.donorService.updateDonor(this.donor.dId, this.donor).subscribe(response => {
      console.log(alert("Donor Updated Succesfully"), response);
      this.router.navigateByUrl('/admin/alldonors');
     
    });
  }

  clearForm()
  {
    this.router.navigateByUrl('/admin/adminhome');
  }


}
