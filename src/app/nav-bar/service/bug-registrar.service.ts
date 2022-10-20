import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CommentModel } from 'src/app/comments/models/comment.model';
import { ContactModel } from 'src/app/contact-information/models/contact.model';
import { BugRegistrar } from '../models/bug-registrar.model';

@Injectable({
  providedIn: 'root'
})
export class BugRegistrarService {
  formValues!: BugRegistrar;
  private bugSubject = new Subject<BugRegistrar>();
  bugSubjectObservable = this.bugSubject.asObservable();
  constructor() { }

  getCurrentForm(){
    return this.formValues;
  }

  setComment(comments: CommentModel){
    console.log(comments);

    this.formValues.comments?.push(comments);
  }

  setContactInformation(contacts: ContactModel){
    console.log(contacts);

    this.formValues.contacts?.push(contacts);
    this.updateCurrentForm();
  }

  updateCurrentForm(){
    console.log('hit');
    this.bugSubject.next(this.formValues);
  }

}
