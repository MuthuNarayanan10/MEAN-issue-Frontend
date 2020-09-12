import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssueComponent } from './issue/issue.component';
import { AddissueComponent } from './addissue/addissue.component';
import { ViewissueComponent } from './viewissue/viewissue.component';
import { ViewassignedComponent } from './viewassigned/viewassigned.component';
// import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { Editissue1Component } from './editissue1/editissue1.component';
import { ViewissuedetailsComponent } from './viewissuedetails/viewissuedetails.component';
import { ViewcompletedissueComponent } from './viewcompletedissue/viewcompletedissue.component';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'; 
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    IssueComponent,
    AddissueComponent,
    ViewissueComponent,
    ViewassignedComponent,
    // EditIssueComponent,
    Editissue1Component,
    ViewissuedetailsComponent,
    ViewcompletedissueComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    // BsDatepickerModule.forRoot(),  
    // NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
