import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './auth/loginpage/loginpage.component';
import { UserregpageComponent } from './auth/userregpage/userregpage.component';
import { AdminhomepageComponent } from './admin/adminhomepage/adminhomepage.component';
import { UserHomeComponent } from './user/user-home/user-home.component';

const routes: Routes = [
  { path:'', component: LoginpageComponent },
  { path:'signup', component: UserregpageComponent },
  { path:'adminhome', component: AdminhomepageComponent },
  { path:'userhome', component: UserHomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
