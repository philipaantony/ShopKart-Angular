import { Component } from '@angular/core';
import { AuthService } from '../../servies/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-view-userlist',
  templateUrl: './admin-view-userlist.component.html',
  styleUrl: './admin-view-userlist.component.css'
})
export class AdminViewUserlistComponent {
 constructor(private authService:AuthService,private toastr: ToastrService,){}

 userdata: any[]=[];
  ngOnInit() {
    this.authService.getallUsers().subscribe(res => {
      
      this.userdata = res;
      console.log(this.userdata); 
    });
  }

  blockUser(user: any) {
    console.log(`Block user: ${user.fullname}`);
    this.toastr.success(user._id.status) 
  }

  unblockUser(user: any) {
 
    this.toastr.success(user._id.status) 
  }

}
