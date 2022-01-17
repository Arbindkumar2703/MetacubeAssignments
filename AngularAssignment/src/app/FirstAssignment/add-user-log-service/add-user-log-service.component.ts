import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/user-log.service';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user-log-service',
  templateUrl: './add-user-log-service.component.html',
  styleUrls: ['./add-user-log-service.component.css']
})
export class AddUserLogServiceComponent implements OnInit {

  constructor(private logService: LogService, private userService: UserService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(data: any) {
    

    this.userService.createuser(data).subscribe(response => {
      this.logService.LogMyDetails(response,'info');

    });

  }

}
