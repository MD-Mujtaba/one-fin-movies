import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  emailRegEx: RegExp;
  loginForm: FormGroup;
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private loginService: LoginService,
    private router: Router
    ) {}
  
  ngOnInit() {
    this.emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: [ '', Validators.required ],
      password: [ '', Validators.required ]
    });
  }

  onSignUp() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Sign Up Form is in Process' 
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.loading = true;
      this.loginService.onLogin(this.loginForm.value).subscribe((response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Logged in Successfully' 
        });
        this.loading = false;
        localStorage.setItem('token', response.data.token);
        this.loginForm.reset();
        this.router.navigate(['/movies']);
      },
      (failure) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: failure.error.error.message
        });  
      }
      )
    }
  }
}
