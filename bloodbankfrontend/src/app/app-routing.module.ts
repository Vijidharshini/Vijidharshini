import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdddonorComponent } from './adddonor/adddonor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BloodstockComponent } from './bloodstock/bloodstock.component';
import { AllusersComponent } from './allusers/allusers.component';
import { BloodrequestComponent } from './bloodrequest/bloodrequest.component';
import { AllrequestsComponent } from './allrequests/allrequests.component';
import { UpdatedonorComponent } from './updatedonor/updatedonor.component';
import { AlldonorsComponent } from './alldonors/alldonors.component';
import { DonorlistComponent } from './donorlist/donorlist.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [

  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'userlogin',
    component: UserloginComponent
  },

  {
    path: 'userhome',
   component: UserhomeComponent,

  },

  {
    path: 'userregister',
    component: UserregisterComponent,
  },
  {
    path: 'userlogin',
    component: UserloginComponent,
  },

  {
    path: 'adminlogin',
    component: AdminloginComponent,
  },


  
  {
    path: 'homepage',
    component: HomepageComponent
  },



  {
    path: 'admin',
    component: AdminhomeComponent,
    children: [
     
      { path: 'add', component: AdddonorComponent },
      { path: 'alldonors', component: AlldonorsComponent },
      { path: 'bloodstock', component: BloodstockComponent },
      { path: 'allusers', component: AllusersComponent },
      { path: 'allrequests', component: AllrequestsComponent },
      { path: 'alldonors/update/:dId', component: UpdatedonorComponent },

      { path: '', redirectTo: 'adminhome', pathMatch: 'full' } // Default route within admin dashboard
    ]
  },


  { path: '', redirectTo: '/admin', pathMatch: 'full' }, // Redirect to admin dashboard
  //  { path: '**', redirectTo: 'admin' } // Handle other routes by redirecting to admin dashboard




  {
    path: 'user',
    component: UserhomeComponent,
    children: [
      { path: 'bloodrequest', component: BloodrequestComponent },
      { path: 'donorlist', component: DonorlistComponent },
      { path: 'bloodstock', component: BloodstockComponent },
      { path: 'allusers', component: AllusersComponent },
      { path: 'allrequests', component: AllrequestsComponent },
      { path: 'updateuser', component: UpdateuserComponent},
      { path: '', redirectTo: 'userhome', pathMatch: 'full' } // Default route within user dashboard
    ]
  },

  { path: '', redirectTo: '/user', pathMatch: 'full' }, // Redirect to user dashboard
  { path: '**', redirectTo: 'admin' }// Handle other routes by redirecting to user dashboard


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
