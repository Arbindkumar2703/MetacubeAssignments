import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data: any) {
    console.log(data);
    alert("Data logged in console please check: "+JSON.stringify(data))
  }

}
