import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

import { SafeResourceUrl } from '@angular/platform-browser';

import { BugRegistrarService } from 'src/app/nav-bar/service/bug-registrar.service';
import { WishModel } from '../models/wish.model';

@Component({
  selector: 'app-wishes-form',
  templateUrl: './wishes-form.component.html',
  styleUrls: ['./wishes-form.component.scss']
})

@Injectable({
  providedIn:'root'
})

export class WishesFormComponent implements OnInit {
  wishForm: FormGroup;
  imagePreview!: string | ArrayBuffer | null;
  srcData : SafeResourceUrl;
  image : SafeResourceUrl;

  constructor(private fb: FormBuilder, private bugService: BugRegistrarService){}

  ngOnInit(){
    this.wishForm = new FormGroup({
      wish: new FormArray([
        new FormGroup({
          shortDescription: new FormControl('',[Validators.required, Validators.minLength(3)]),
          longDescription: new FormControl(''),
          date: new FormControl(''),
          url: new FormControl(''),
          image: new FormControl(''),
          imagePreview: new FormControl(''),
        })
      ])
    });
  }

  get f() {
    return this.wishForm.controls;
  }

  get wish(): FormArray {
    return this.wishForm.get('wish') as FormArray;
  }

  addWish() {
    console.log(this.wishForm);
    this.wish.push(
      new FormGroup({
        shortDescription: new FormControl('', [Validators.required, Validators.minLength(3)]),
        longDescription: new FormControl(''),
        date: new FormControl(''),
        url: new FormControl(''),
        image: new FormControl(''),
        imagePreview: new FormControl(''),
      })
    );
  }

  removeWish(i: number) {
    this.wish.removeAt(i);
  }

  onSubmit() {
    console.log('Wishes form Submit');
    let wishesArray = this.wishForm.value.wish as FormArray[];
    let wishes: WishModel[] = [];
    for( let i = 0; i < wishesArray.length; i++){
      let wish: WishModel={
        shortDescription: this.wishForm.value.wish[i].shortDescription,
        longDescription: this.wishForm.value.wish[i].longDescription,
        date: this.wishForm.value.wish[i].date,
        url: this.wishForm.value.wish[i].url,
        image: this.wishForm.value.wish[i].image,
        imagePreview: this.wishForm.value.wish[i].imagePreview
      }
      wishes.push(wish);
    }

    this.bugService.setWishesInformation(wishes);
    console.log(this.wishForm);
    this.bugService.updateCurrentForm();
    console.log("Wishes info");
  }

  ngAfterContentChecked(): void {
    if(this.imagePreview == null){
      this.imagePreview = this.wishForm.value.image;
    }
  }

  onFileUpload(event: Event){
    const files = (event.target as HTMLInputElement).files;
    if(files){
      this.wishForm.patchValue({image: files[0]});
      console.log(this.wishForm.value);
      this.wishForm.get('image')?.updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(files[0]);
    }
  }

}
