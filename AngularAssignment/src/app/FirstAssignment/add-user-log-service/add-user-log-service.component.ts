import { Component, OnInit } from '@angular/core';
import { UserLogService } from '../../services/user-log.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user-log-service',
  templateUrl: './add-user-log-service.component.html',
  styleUrls: ['./add-user-log-service.component.css']
})
export class AddUserLogServiceComponent implements OnInit {

  constructor(private userLogService: UserLogService, private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(data: any) {
    this.userLogService.LogMyDetails(data);

    this.userService.createuser(data).subscribe(response => {
      console.log(response)

    });

  }

}
