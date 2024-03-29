import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './auth/loginpage/loginpage.component';
import { UserregpageComponent } from './auth/userregpage/userregpage.component';
import { PublicnavbarComponent } from './shared/publicnavbar/publicnavbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AdminhomepageComponent } from './admin/adminhomepage/adminhomepage.component';

import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminViewUserlistComponent } from './admin/admin-view-userlist/admin-view-userlist.component';
import { BlogpageComponent } from './shared/blogpage/blogpage.component';
import { UserblogpageComponent } from './user/userblogpage/userblogpage.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    UserregpageComponent,
    PublicnavbarComponent,
    FooterComponent,
    AdminhomepageComponent,
    AdminNavbarComponent,
    UserHomeComponent,
    UserNavbarComponent,
    AdminViewUserlistComponent,
    BlogpageComponent,
    UserblogpageComponent,
    UserprofileComponent,
    AddproductComponent,
    AddcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
