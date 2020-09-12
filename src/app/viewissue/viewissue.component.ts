import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewissue',
  templateUrl: './viewissue.component.html',
  styleUrls: ['./viewissue.component.css']
})
export class ViewissueComponent implements OnInit {

  constructor(private dataService: ApiService) { 

    this.getAllIssues();

  }
  
  getAllIssues(){
    this.dataService.getissuelist().subscribe((data)=>{
      this.issues = data;
    });
  }

  issues : any = [];

  ngOnInit(): void {
  }

}
