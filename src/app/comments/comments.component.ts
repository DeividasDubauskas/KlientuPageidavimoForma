import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BugRegistrarService } from '../nav-bar/service/bug-registrar.service';
import { CommentModel } from './models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  commentForm = new FormGroup({
    comment: new FormControl(''),
  });

  constructor(private bugService: BugRegistrarService) { }
  ngOnInit(): void {

  }

  // setComment(comments: CommentModel){
  //   this.bugService.setComment(comments);
  // }

  onSubmit(){
    console.log(this.commentForm);
    let comments: CommentModel={
      comment: this.commentForm.value.comment
    }

    this.bugService.setComment(comments);
  }

}
