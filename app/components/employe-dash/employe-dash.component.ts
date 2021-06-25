import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Employee } from './empoloye-dash.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employe-dash',
  templateUrl: './employe-dash.component.html',
  styleUrls: ['./employe-dash.component.css']
})
export class EmployeDashComponent implements OnInit {
  myForm !: FormGroup;
  EmpolyeeModel:Employee= new Employee();
  res:any;
  resData: any;
  constructor(private fb:FormBuilder,private api:ApiService, private route:Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
    Id:[""],
   UserId:[""],
     Title:[""],
    Body:[""],
     
    })
     this.getEmployeeDetails();//immidiate fatch data for Ui
    
  }
data(){
  let formData=this.myForm.getRawValue();
  console.log(formData);
}
//post a data from form to api
postEmployeeDetails(){
 
  this.api.postEmployee(this.EmpolyeeModel).subscribe(res=>{
    alert("Employee added successfully")
    let ref=document.getElementById('cancel')
    ref?.click();
    this.myForm.reset();//for reset of form
    console.log(res);
    this.route.navigate(['/post-comment'])
  },
  err=>{
alert("something went wrong")
  })
}
//for fetch data from api
getEmployeeDetails(){
 this.api.getEmployeeData(this.data).subscribe(res=>{
   console.log(res);
   this.resData=res;
 })
  
}

deleteEmployeeData(res:any){
  this.api.deleteEmployeeData(res.id).subscribe(res=>{
    alert('employee deleted')
    this.getEmployeeDetails();
  })
}
updateEmployeeData(row:any){
  this.EmpolyeeModel.Id= row.id;
  this.myForm.controls["Id"].setValue(row.Id)
  this.myForm.controls["UserId"].setValue(row.UserId)
  this.myForm.controls["Title"].setValue(row.Title)
  this.myForm.controls["Body"].setValue(row.Body)
  
}
  updateData(){
    this.EmpolyeeModel.Id = this.myForm.value.Id
 this.EmpolyeeModel.UserId = this.myForm.value.UserId
 this.EmpolyeeModel.Title = this.myForm.value.Title
 this.EmpolyeeModel.Body = this.myForm.value.Body
 
  this.api.updateEmployeeData(this.EmpolyeeModel.Id, this.EmpolyeeModel).subscribe(res=>{
    alert("Employee added successfully")
    let ref=document.getElementById('cancel')
    ref?.click();
    this.myForm.reset();//for reset of form
    console.log(res);
 })
 }
}
