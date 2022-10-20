import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BugRegistrar } from '../nav-bar/models/bug-registrar.model';
import { BugRegistrarService } from '../nav-bar/service/bug-registrar.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit, AfterContentInit  {
  contacts!: BugRegistrar;
  // dataSource = new MatTableDataSource<BugRegistrar>();
  // displayedColumns: string[] =[
  //   'fullName',
  //   'email',
  //   'phone',
  //   'projectTitle'
  // ];

  constructor(private bugService: BugRegistrarService) { }
  ngAfterContentInit(): void {

  }
  ngAfterViewInit(): void {

  }

  ngOnInit() {
    this.contacts = this.bugService.getCurrentForm();

    this.bugService.bugSubjectObservable.subscribe(response => {
      console.log(response);
    })
    console.log(this.contacts);
    // this.dataSource.data.push(this.contacts);
  }


}
