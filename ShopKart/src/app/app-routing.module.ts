import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './auth/loginpage/loginpage.component';
import { UserregpageComponent } from './auth/userregpage/userregpage.component';

const routes: Routes = [
  { path:'', component: LoginpageComponent },
  { path:'signup', component: UserregpageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
