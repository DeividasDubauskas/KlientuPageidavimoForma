import { Component, OnInit } from '@angular/core';
import { ContactInformationComponent } from 'src/app/contact-information/contact-information.component';
import { BugRegistrarService } from 'src/app/nav-bar/service/bug-registrar.service';

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  styleUrls: ['./forward.component.scss']
})
export class ForwardComponent implements OnInit {

  constructor(private bugService: BugRegistrarService, private contactSubmit: ContactInformationComponent) { }

  ngOnInit(): void {

  }

  moveForward(){
    this.contactSubmit.onSubmit();
    this.bugService.updateCurrentForm();
  }

}
