import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeDashComponent } from './components/employe-dash/employe-dash.component';
import { PostCommentComponent } from './components/post-comment/post-comment.component';

const routes: Routes = [
  {path:"", component:EmployeDashComponent},
  {path:"post-comment", component:PostCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
