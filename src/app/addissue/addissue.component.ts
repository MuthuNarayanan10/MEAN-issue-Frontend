import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
// import { emails } from 'emails';
import {tbl_email} from '../models/emailmodel';

@Component({
  selector: 'app-addissue',
  templateUrl: './addissue.component.html',
  styleUrls: ['./addissue.component.css']
})
export class AddissueComponent implements OnInit {
  public angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) { 

    this.angForm = this.fb.group({
      
      title: ['', Validators.required],
      description: ['', Validators.required],
      reportdate: ['', Validators.required],
      status: ['LOGGED', Validators.required],
      assignee : ['',Validators.required]
      });
      // this.angForm.value.status = "LOGGED";
  }
   public emails : tbl_email[];
   public str : string = "LOGGED";

  ngOnInit(): void {
  
    this.dataService.getuserslist().subscribe(res => this.emails = res);
    
  }

  
  // rapidPage = {"pageRows":[{"sections":[{"sectionRows":[{"secRowColumns":[]},{"secRowColumns":[{"colName":"users"}]},{"secRowColumns":[{"colName":"sample"}]}],"width":0}]}],"pageName":"DefaultPage","pageLayout":"DEFAULT_LAYOUT","editMode":true}; 
  // your object

  // get rapidPageValue () {
  //   return JSON.stringify(this.rapidPage, null, 2);
  // }

  // set rapidPageValue (v) {
  //   try{
  //   this.rapidPage = JSON.parse(v);}
  //   catch(e) {
  //     console.log('error occored while you were typing the JSON');
  //   };
  // }
  
  public desc: string;
  postdata(angForm)
  {
    //  alert(angForm1.value.title);
    //  alert(angForm1.value.description);
    //  alert(angForm1.value.reportdate);
    //  alert(angForm1.value.status);
    //  alert(angForm1.value.assignee);
    //  alert(this.desc);
    //  alert(this.description); //+"-"+angForm.description+"-"+angForm.reportdate+"-"+angForm.status+"-"+angForm.assignee);
    this.dataService.addissue(angForm.value.title,angForm.value.description,angForm.value.reportdate,angForm.value.status,angForm.value.assignee)
    .pipe(first()).subscribe(data => {this.router.navigate(['/viewissue'])}, error => {} );
  }
}
