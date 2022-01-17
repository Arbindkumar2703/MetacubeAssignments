import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/user-log.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private LogService: LogService) { }

  ngOnInit(): void {
  }

  onSubmit(data: any) {
    this.LogService.LogMyDetails(data, 'info');
  }

}
