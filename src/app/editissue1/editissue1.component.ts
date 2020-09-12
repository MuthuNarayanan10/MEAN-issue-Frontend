import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { Issue } from '../models/issuemodel';
import {issue_status} from '../models/issuestatus';
import { from } from 'rxjs';


@Component({
  selector: 'app-editissue1',
  templateUrl: './editissue1.component.html',
  styleUrls: ['./editissue1.component.css']
})

export class Editissue1Component implements OnInit {
  submitted = false;
  editForm: FormGroup;
  


  constructor(public fb: FormBuilder,private route: ActivatedRoute,  private router: Router,private dataService: ApiService) {
      
    
    this._id=this.route.snapshot.paramMap.get("id");
    // alert(this.id);
    this.getIssue(this._id);
    this.issue_status =[{name:"LOGGED",value:"LOGGED"},
                        {name:"IN-PROGRESS",value:"IN-PROGRESS"},
                      {name:"DONE",value:"DONE"}];
   }
   
   public issue_status : issue_status[];
   _id : string;

  ngOnInit(): void {
    this.editForm = this.fb.group({
      title: ['', [Validators.required]],
      description : ['',[Validators.required]],
      reportdate : ['',[Validators.required]],
      reporter : ['',[Validators.required]],
      comments : ['',[Validators.required]],
      current_status : ['']
    })
  }

  present_status : string;
  commentstring : string;
  

  getIssue(id){
    this.dataService.getissue(id).subscribe(data =>{
      // alert(data[0].status);
      this.present_status = data[0].status;
      // alert(this.present_status);
      this.editForm.get('title').setValue(data[0].title);
      this.editForm.get('description').setValue(data[0].description);
      this.editForm.get('current_status').setValue(this.present_status);
      this.editForm.get('reportdate').setValue(data[0].reportdate);
      this.editForm.get('reporter').setValue(data[0].reporter);
      // this.editForm.setValue({
      //   title : data[0].title,
      //   description : data[0].description,
      //   reportdate : data[0].reportdate,
      //   reporter : data[0].reporter,
      //   comments : data[0].comments,
      //   // current_status : data[0].status
        
      // });
    });
    
  }

  postdata(editForm)
  {
    // alert(this._id);
    // alert(editForm.value.title);
    // alert(editForm.value.description);
    // alert(editForm.value.reportdate);
    // alert(editForm.value.reporter);
    //  alert(editForm.value.current_status);
    //  alert('textarea:'+this.commentstring);
     this.dataService.updateissue(this._id,editForm.value.title,editForm.value.description,editForm.value.reportdate,editForm.value.reporter,editForm.value.current_status,this.commentstring)
     .pipe().subscribe(data => {this.router.navigate(['/viewassigned'])}, error => {})
    // .pipe(first()).subscribe(data => {this.router.navigate(['/viewissue'])}, error => {} );

    //  alert(angForm1.value.reportdate);
    //  alert(angForm1.value.status);
    //  alert(angForm1.value.comments);
    //  alert(this.desc);
    //  alert(this.description); //+"-"+angForm.description+"-"+angForm.reportdate+"-"+angForm.status+"-"+angForm.assignee);
    // this.dataService.addissue(angForm.value.title,angForm.value.description,angForm.value.reportdate,angForm.value.status,angForm.value.assignee)
    // .pipe(first()).subscribe(data => {this.router.navigate(['/viewissue'])}, error => {} );
  }
  cancel()
  {
    this.router.navigate(["/viewassigned"]);
  }
}
