import { Component, OnInit } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';
import { ContactInformationComponent } from '../contact-information/contact-information.component';
import { BugRegistrarService } from './service/bug-registrar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  constructor(private contactSubmit: ContactInformationComponent, private bugService: BugRegistrarService, private commentSubmit: CommentsComponent) { }
  ngOnInit(): void {}

  ContactSubmit() {
    this.contactSubmit.onSubmit();
    this.bugService.updateCurrentForm();
  }

  CommentsSubmit() {
    this.commentSubmit.onSubmit();
    this.bugService.updateCurrentForm();
  }
}
