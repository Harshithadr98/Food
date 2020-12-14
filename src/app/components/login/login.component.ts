import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   type='password';
   formType='login';
  constructor() { }

  ngOnInit(): void {
  }
  togglePassword():void {
    if (this.type==='password')
    {
      this.type='text';
    }
    else{
      this.type='password';
    }
  }
  showFormType(formName):void {
        this.formType= formName;
  }
}
 
