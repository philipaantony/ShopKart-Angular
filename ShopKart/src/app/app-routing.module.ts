import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './auth/loginpage/loginpage.component';
import { UserregpageComponent } from './auth/userregpage/userregpage.component';
import { AdminhomepageComponent } from './admin/adminhomepage/adminhomepage.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { AdminViewUserlistComponent } from './admin/admin-view-userlist/admin-view-userlist.component';
import { authGuard } from './auth-guard/auth.guard';
import { authUserGuard } from './auth-guard/auth-user.guard';

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
        path: 'userlist',
        canActivateChild: [authGuard],
        component: AdminViewUserlistComponent,
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
        path: 'userlist',
        canActivateChild: [authUserGuard],
        component: AdminViewUserlistComponent,
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
