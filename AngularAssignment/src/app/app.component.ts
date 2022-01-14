import { Component } from '@angular/core';
import { _sharedVariables } from './_services/_sharedVariables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAssignment';
  constructor(public _sharedVariables:_sharedVariables){
  }
  clickEvent(){
    this._sharedVariables.updateToggelState();   
  }
}
