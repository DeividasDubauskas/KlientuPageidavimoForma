import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BugRegistrarService } from '../nav-bar/service/bug-registrar.service';
import { CommentModel } from './models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})

@Injectable({
  providedIn:'root'
})

export class CommentsComponent implements OnInit {

  commentForm = new FormGroup({
    comment: new FormControl(''),
  });

  constructor(private bugService: BugRegistrarService) { }

  ngOnInit(): void { }


  onSubmit(){
    this.bugService.setComment(this.commentForm.value.comment);
    this.bugService.updateCurrentForm();
  }

}
