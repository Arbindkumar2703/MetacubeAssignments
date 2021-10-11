import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Users } from './../models/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService) {


  }
  SelectedUser:Users;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const Id = params['id'];
      this.userService.getuser().toPromise().then((users)=>{
        this.SelectedUser=users.find(user=>user.id==Id);
      })
   });
  }

}
