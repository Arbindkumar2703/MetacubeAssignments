import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { _sharedVariables } from './_services/_sharedVariables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAssignment';
  BreadCrum='home';
  isLogin=true;
  constructor(public _sharedVariables:_sharedVariables,private _router:Router){
    _router.events.subscribe((val)=>{
      if(this._router.url.includes('login')){
        this.isLogin=false;
      }
      this.BreadCrum=(this._router.url.replace('/1/','Assignment One >> ').replace('/2/','Assignment Two >> ')).toUpperCase();
    })
  }
  clickEvent(){
    this._sharedVariables.updateToggelState();   
  }
}
