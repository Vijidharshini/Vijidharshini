import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-alldonors',
  templateUrl: './alldonors.component.html',
  styleUrl: './alldonors.component.css',

})
export class AlldonorsComponent 
{

  donors: any[] = [];

  constructor(private donorService: DonorService,private router: Router) {}

  
  ngOnInit(): void {
    this.loadDonors();
  }

  loadDonors(): void {
    this.donorService.getAllDonors().subscribe((data) => {
      this.donors = data;
    });
  }


  deleteDonor(dId:number)
  {
    this.donorService.deleteDonor(dId).subscribe((data) => {
     console.log(alert("data deleted Succesfully"),data);
     this.loadDonors();

    });
  }
   



}
