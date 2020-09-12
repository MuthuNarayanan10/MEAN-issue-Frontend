import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { Issue } from '../models/issuemodel';
import {issue_status} from '../models/issuestatus';
import { from } from 'rxjs';

@Component({
  selector: 'app-viewcompletedissue',
  templateUrl: './viewcompletedissue.component.html',
  styleUrls: ['./viewcompletedissue.component.css']
})
export class ViewcompletedissueComponent implements OnInit {

  _id : string;
  editForm: FormGroup;

  constructor(public fb: FormBuilder,private route: ActivatedRoute,  private router: Router,private dataService: ApiService) {
    this._id = this.route.snapshot.paramMap.get("id");
    this.getIssue(this._id);

   }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      title: ['', [Validators.required]],
      description : ['',[Validators.required]],
      reportdate : ['',[Validators.required]],
      reporter : ['',[Validators.required]],
      comments : ['',[Validators.required]],
      status : ['']
    })
  }

  getIssue(id){
    this.dataService.getissue(id).subscribe(data =>{
      // alert(data[0].status);
      // this.present_status = data[0].status;
      // alert(this.present_status);
      this.editForm.get('title').setValue(data[0].title);
      this.editForm.get('description').setValue(data[0].description);
      this.editForm.get('status').setValue(data[0].status);
      // alert(data[0].reportdate);
      this.editForm.get('reportdate').setValue(data[0].reportdate);
      this.editForm.get('reporter').setValue(data[0].reporter);
      // alert(data[0].comments);
      this.editForm.get('comments').setValue(data[0].comments);
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
  cancel()
  {
    this.router.navigate(["/viewissue"]);
  }

}
