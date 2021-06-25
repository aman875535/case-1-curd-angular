import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home';
  myForm: FormGroup;
 constructor(private fb:FormBuilder ){
  this.myForm= this.fb.group(
    {

    email:['',[ Validators.required,]],
  password: ['',[ Validators.required,]],
 
  })
 }


}





