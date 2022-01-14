import { Component, OnInit } from '@angular/core';
import { UserLogService } from '../../services/user-log.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-chapter8',
  templateUrl: './chapter8.component.html',
  styleUrls: ['./chapter8.component.css']
})
export class Chapter8Component implements OnInit {

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

