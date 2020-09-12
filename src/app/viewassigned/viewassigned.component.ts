import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-viewassigned',
  templateUrl: './viewassigned.component.html',
  styleUrls: ['./viewassigned.component.css']
})
export class ViewassignedComponent implements OnInit {

  constructor(private dataService: ApiService) { 

    console.log('view assigned called');
    this.getIssuesAssigned();

  }
  getIssuesAssigned(){
    this.dataService.getissueassigned().subscribe((data)=>{
      this.issues = data;
    });
  }
  issues : any = [];

  ngOnInit(): void {
  }

}
