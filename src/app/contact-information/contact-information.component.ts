import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BugRegistrarService } from '../nav-bar/service/bug-registrar.service';
import { ContactModel } from './models/contact.model';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
})

@Injectable({
  providedIn:'root'
})

export class ContactInformationComponent implements OnInit {
  contactForm = new FormGroup({
    fullName: new FormControl('',[Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z \-\']+')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    phone: new FormControl('',[Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
    projectTitle: new FormControl('',[Validators.required, Validators.minLength(3)])
  });
  constructor(private bugService: BugRegistrarService) { }

  ngOnInit(): void { }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(){
    let contacts: ContactModel={
      fullName: this.contactForm.value.fullName,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      projectTitle: this.contactForm.value.projectTitle
    }

    this.bugService.setContactInformation(contacts);
    console.log(this.contactForm);
    this.bugService.updateCurrentForm();
  }
}
