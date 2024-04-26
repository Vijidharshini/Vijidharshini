import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-donorlist',
  templateUrl: './donorlist.component.html',
  styleUrl: './donorlist.component.css'
})
export class DonorlistComponent {


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


}
