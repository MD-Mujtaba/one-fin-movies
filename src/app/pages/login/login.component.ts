import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  emailRegEx: RegExp;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
    ) {}
  
  ngOnInit() {
    this.emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: [ '', [ Validators.required, Validators.pattern(this.emailRegEx)] ],
      password: [ '', Validators.required ]
    });
  }

  onSignUp() {
    console.log("Sign Up")
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Sign Up Form is in Process' });
  }

  onSubmit() {
    // {
    //   "email": "test@gmail.co",
    //   "password": "abcd"
    // }
  }
}
