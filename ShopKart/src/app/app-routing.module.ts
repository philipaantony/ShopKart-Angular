import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './auth/loginpage/loginpage.component';
import { UserregpageComponent } from './auth/userregpage/userregpage.component';
import { AdminhomepageComponent } from './admin/adminhomepage/adminhomepage.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { AdminViewUserlistComponent } from './admin/admin-view-userlist/admin-view-userlist.component';
import { authGuard } from './auth-guard/auth.guard';
import { authUserGuard } from './auth-guard/auth-user.guard';
import { UserblogpageComponent } from './user/userblogpage/userblogpage.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';

const routes: Routes = [
  { path: '', component: LoginpageComponent },
  { path: 'signup', component: UserregpageComponent },
  {
    path: 'adminhome',
    canActivateChild: [authGuard],
    children: [
      {
        path: '',
        component: AdminhomepageComponent,
      },
      {
        path: '',
        canActivateChild: [authGuard],
        children:[
          {path: 'userlist', component: AdminViewUserlistComponent},
          {path: 'addproduct', component: AddproductComponent},
          {path: 'addcategory', component: AddcategoryComponent},

        ]
      },
    ],
  },
  {
    path: 'userhome',
    canActivateChild: [authUserGuard],
    children: [
      {
        path: '',
        component: UserHomeComponent,
      },
      {
        path: '',
        canActivateChild: [authUserGuard],
        children:[
          {path: 'userlist', component: AdminViewUserlistComponent},
          {path: 'profile', component: UserprofileComponent},
          {path: 'userblog', component: UserblogpageComponent},
        ]
       
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
