import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewissueComponent } from './viewissue/viewissue.component';
import { AddissueComponent } from './addissue/addissue.component';
import { ViewassignedComponent} from './viewassigned/viewassigned.component';
// import { EditIssueComponent} from './edit-issue/edit-issue.component';
import { Editissue1Component } from './editissue1/editissue1.component';

import { ViewcompletedissueComponent} from './viewcompletedissue/viewcompletedissue.component';


// import { AuthguardGuard } from './authguard.guard'
import {AuthGuard } from './auth.guard';

const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'registration', component: RegisterComponent },
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
{ path: 'viewissue' , component : ViewissueComponent},
{ path: 'addissue' , component: AddissueComponent},
{ path: 'viewassigned' , component: ViewassignedComponent},
 { path : 'editissue1', component:Editissue1Component},
 { path : 'viewcompletedissue' , component:ViewcompletedissueComponent}

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }