import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BloodrequestService } from '../bloodrequest.service';

@Component({
  selector: 'app-allrequests',
  templateUrl: './allrequests.component.html',
  styleUrl: './allrequests.component.css'
})
export class AllrequestsComponent {

  requests: any[] | undefined; // Replace 'any' with the actual type of your Java entity

  constructor(private http: HttpClient,private bloodRequestService: BloodrequestService) {}

  ngOnInit() {
    this.loadRequests();
  }



  loadRequests(): void {
    this.bloodRequestService.getAllBloodRequest().subscribe((data) => {
      this.requests = data;
    });
  }


}
