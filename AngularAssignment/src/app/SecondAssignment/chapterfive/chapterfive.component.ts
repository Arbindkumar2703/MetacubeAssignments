import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogService } from 'src/app/services/user-log.service';

@Component({
  selector: 'app-chapterfive',
  templateUrl: './chapterfive.component.html',
  styleUrls: ['./chapterfive.component.css']
})
export class ChapterfiveComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private logService: LogService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['Sammy', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }
  onSubmit(form: FormGroup) {
    let message='';
    const messageType = form.valid ? 'info' : 'error';
      message += '</br>'+'Valid : '+ form.valid + '</br>';
      message += 'Name : ' + form.value.name + '</br>';
      message +='Email : ' + form.value.email + '</br>';
      message +='Message : ' + form.value.message + '</br>';
    this.logService.LogMyDetails(message, messageType);
  }
}
