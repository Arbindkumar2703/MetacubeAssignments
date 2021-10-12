import { Component, OnInit } from '@angular/core';
import { Util } from './../models/util';
import { Users } from './../models/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  UsersList: Users[];
  SelectedUser: Users;
  hasError: boolean = false;
  constructor(private util: Util) {
  }

  ngOnInit(): void {

  }
  showMe(id: number) {
    this.SelectedUser = this.UsersList.find(user => user.id === id);
  }
  generate(event: any) {
    this.hasError = false;
    if (event.target.value <= 1000) {
      this.UsersList = this.util.generateUsers(event.target.value);
    }
    else {
      this.hasError = true;
    }
  }
}

