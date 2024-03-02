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
import { ViewUserListPageComponent } from './admin/view-user-list-page/view-user-list-page.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    UserregpageComponent,
    PublicnavbarComponent,
    FooterComponent,
    AdminhomepageComponent,
    ViewUserListPageComponent,
    AdminNavbarComponent,
    UserHomeComponent,
    UserNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
