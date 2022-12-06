import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ContactModel } from 'src/app/contact-information/models/contact.model';
import { WishModel } from 'src/app/wishes/models/wish.model';
import { BugRegistrar } from '../models/bug-registrar.model';

@Injectable({
  providedIn: 'root'
})
export class BugRegistrarService {
  formValues =  new BugRegistrar();
  private bugSubject = new Subject<BugRegistrar>();
  bugSubjectObservable = this.bugSubject.asObservable();
  constructor() { }

  getCurrentForm(){
    return this.formValues;
  }

  setComment(comments: string | null | undefined){
    console.log(comments);
    this.formValues.comments = comments;
  }

  setContactInformation(contacts: ContactModel){
    console.log(contacts);
    this.formValues.contacts = contacts;
  }

  setWishesInformation(wish: WishModel[]){
    console.log(wish);
    this.formValues.wish = wish;
  }

  updateCurrentForm(){
    this.bugSubject.next(this.formValues);
  }
}
