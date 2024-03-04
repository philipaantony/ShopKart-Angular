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
    this.refreshUserList();
  }

  refreshUserList() {
    this.authService.getallUsers().subscribe(res => {
      this.userdata = res;
      console.log(this.userdata);
    });
  }
  blockUser(userId: any, status: string) {
    console.log(`Block user with ID ${userId}`);
    this.authService.updateuserstatus(userId, status).subscribe(response => {
      this.toastr.success("Status updated successfully");
      this.refreshUserList();
      console.log(response)
    }, error => {
      this.toastr.error("Failed");
    });
  }
  
  unblockUser(userId: any, status: string) {
    console.log(`Unblock user with ID ${userId}`);
    
    this.authService.updateuserstatus(userId, status).subscribe(response => {
      this.toastr.success("Status updated successfully");
      this.refreshUserList();
      console.log(response)
    }, error => {
      this.toastr.error("Failed");
    });
  }
  
  
  }


