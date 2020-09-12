import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginbtn:boolean;
  logoutbtn:boolean;
  loggeduser:string;
  loggedusername:string;
  
  constructor(private router:Router,private dataService: ApiService) {
  dataService.getLoggedInName.subscribe(name => this.changeName(name));
  if(this.dataService.isLoggedIn())
  {
  console.log("loggedin");
  // this.loggeduser = this.dataService.getToken();
  // this.loggedusername = this.dataService.loggedusername;
  this.loginbtn=false;
  this.logoutbtn=true
  }
  else{
  this.loginbtn=true;
  this.logoutbtn=false
  }
  
  }
  
  private changeName(name: boolean): void {
    this.loggeduser = this.dataService.getToken();
    this.loggedusername = this.dataService.loggedusername;
  this.logoutbtn = name;
  this.loginbtn = !name;
  }
  logout()
  {
    this.loggeduser = null;
    this.loginbtn=true;
    this.logoutbtn=false;
  this.dataService.deleteToken();
  this.router.navigate(["/login"]);
  // window.location.href = window.location.href;
 
  }
  // registration()
  // {
  //   this.router.navigate(["/registration"]);
  // }
  }