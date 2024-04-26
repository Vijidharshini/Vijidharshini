import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent {

  constructor(private router: Router) 
  
  {
   
  }



  updateUser(){
  }


  clearForm()
  {
    this.router.navigateByUrl('/user/userhome');
  }


}
