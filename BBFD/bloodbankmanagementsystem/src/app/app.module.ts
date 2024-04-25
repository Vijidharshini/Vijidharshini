import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdddonorComponent } from './adddonor/adddonor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AlldonorsComponent } from './alldonors/alldonors.component';
import { BloodstockComponent } from './bloodstock/bloodstock.component';
import { AllusersComponent } from './allusers/allusers.component';
import { BloodrequestComponent } from './bloodrequest/bloodrequest.component';
import { AllrequestsComponent } from './allrequests/allrequests.component';
import { UpdatedonorComponent } from './updatedonor/updatedonor.component';
import { DonorlistComponent } from './donorlist/donorlist.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

@NgModule({
  declarations: [
    AppComponent,
    UserregisterComponent,
    UserloginComponent,
    UserhomeComponent,
    AdminloginComponent,
    AdminhomeComponent,
    AdddonorComponent,
    HomepageComponent,
    AlldonorsComponent,
    BloodstockComponent,
    AllusersComponent,
    BloodrequestComponent,
    AllrequestsComponent,
    UpdatedonorComponent,
    DonorlistComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
