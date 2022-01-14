import { Component, OnInit } from '@angular/core';
import { _sharedVariables } from '../_services/_sharedVariables';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public _sharedVariables:_sharedVariables){
  }

  ngOnInit(): void {
  }

}
