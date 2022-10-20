import { Component, OnInit } from '@angular/core';
import { BugRegistrar } from './models/bug-registrar.model';
import { BugRegistrarService } from './service/bug-registrar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  constructor() { }
  ngOnInit(): void {

  }



}
