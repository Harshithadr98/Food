import { Input } from '@angular/core';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() formType: string = 'login';
  type = 'password';

  constructor(@Inject(MAT_DIALOG_DATA) public data: {formType: string}) { 
    this.formType=data.formType;
  }

  ngOnInit(): void {

  }
  togglePassword(): void {
    if (this.type === 'password') {
      this.type = 'text';
    }
    else {
      this.type = 'password';
    }
  }
  showFormType(formName): void {
    this.formType = formName;
  }
}

