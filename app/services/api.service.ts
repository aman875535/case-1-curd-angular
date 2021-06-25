import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
  }
  postEmployee(data:any){
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts', data).pipe(map((res:any)=>{
      return res;
      
    }))
    
  }
  getEmployeeData(data:any){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts', data).pipe(map((res:any)=>{
      return res;
      
    }))
    
  }
  deleteEmployeeData(id:number){
    return this.http.delete<any>('https://jsonplaceholder.typicode.com/posts/1'+id).pipe(map((res:any)=>{
      return res;
      
    }))
    
  }
  updateEmployeeData(id:number,data:any){
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1'+id,data).pipe(map((res:any)=>{
      return res;
      
    }))
    
  }
}
