import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  
 resData:any=[{
   "id":1,
   "userId":1,
   "title":"",
   "body":"",


 }];
  comment: any;
   

  constructor(private post:PostService) { }

  ngOnInit(): void {
   this.postGetData(); 
   this.commentData();
  }
postGetData(){
  this.post.getPostData().subscribe(res=>{
     
 console.log(res);
 this.resData=res;
  })
}
commentData(){
  this.post.commentData().subscribe(res=>{
    console.log(res);
    this.comment=res;
  })
}
}
