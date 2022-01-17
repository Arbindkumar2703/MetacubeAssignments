import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/user-log.service'

@Component({
  selector: 'app-chaptertwo',
  templateUrl: './chaptertwo.component.html',
  styleUrls: ['./chaptertwo.component.css']
})
export class ChaptertwoComponent implements OnInit {

  constructor(private logService: LogService) { }
  isAfterContentChecked: boolean = true;
  isAfterViewChecked: boolean = true;
  LogMessage: any = [];
  isDoCheck: boolean = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.logService.LogMyDetails("ngOnInit executed", 'info');
      this.LogMessage.push("ngOnInit executed");
    }, 1000);
  }

  ngDoCheck() {
    if (this.isDoCheck) {
      this.isDoCheck = false;
      setTimeout(() => {
        this.logService.LogMyDetails("ngDoCheck executed", 'info');
        this.LogMessage.push("ngDoCheck executed");
      }, 3000);
    }
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.logService.LogMyDetails("ngAfterContentInit executed", 'info');
      this.LogMessage.push("ngAfterContentInit executed");
    }, 3000);

  }

  ngAfterContentChecked(): void {
    if (this.isAfterContentChecked) {
      this.isAfterContentChecked = false;
      setTimeout(() => {
        this.logService.LogMyDetails("ngAfterContentChecked executed", 'info');
        this.LogMessage.push("ngAfterContentChecked executed");
      }, 4000);
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.logService.LogMyDetails("ngAfterViewInit executed", 'info');
      this.LogMessage.push("ngAfterViewInit executed");
    }, 5000);
  }
  ngAfterViewChecked(): void {
    if (this.isAfterViewChecked) {
      this.isAfterViewChecked = false;
      setTimeout(() => {
        this.logService.LogMyDetails("ngAfterViewChecked executed", 'info');
        debugger
        this.LogMessage.push("ngAfterViewChecked executed");
      }, 6000);
    }
  }
  ngOnDestroy() {
    this.logService.LogMyDetails("ngOnDestroy executed", 'info');
  }

}
