import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLogService {

  constructor() { }

  LogMyDetails(data:any){
    console.log(data);
    alert("Log data :"+ JSON.stringify(data));
  }
}
