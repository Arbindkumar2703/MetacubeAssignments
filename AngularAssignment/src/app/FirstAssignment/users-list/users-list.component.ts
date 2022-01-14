import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  UsersList: Users[];
  SelectedUser: Users;
  constructor(private userService: UserService) {
    this.userService.getuser().subscribe(user => this.UsersList = user);
  }

  ngOnInit(): void {

  }
  showMe(id: number){
    this.SelectedUser = this.UsersList.find(user => user.id === id);
  }

}
