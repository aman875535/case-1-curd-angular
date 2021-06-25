import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  getPostData(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts/1').pipe(map(res=>{
      return res;
    }))
      
    }
    commentData(){
      return this.http.get<any>('https://jsonplaceholder.typicode.com/posts/1/comments').pipe(map(res=>{
      return res;
    }))
    }
 
}
  