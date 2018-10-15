import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
public loginForm: FormGroup;
public loading = false;

public username: string;
public password: string;

public authentErrorMsg: string;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    // Init of the form fields
    this.loginForm = this.formBuilder.group({
  'usernameField': new FormControl(null,
   [Validators.required, Validators.email, Validators.maxLength(25)]),
  'passwordField': new FormControl(null,
   [Validators.required, Validators.maxLength(6)])
  });

    
    // A redirection to the login page will always logout the user
    if (this.userService.isLogged()) {
      this.logout();
    }
   }

  // Form error messages are managed here
  getErrorMessage(field: string) {
    return this.loginForm.get(field).hasError('required') ? 'This field is required' :
        (this.loginForm.get(field).hasError('email') ? 'This field must be a valid email' :
            (this.loginForm.get(field).hasError('maxlength') ? 'This field is size limited' :
            ''));
   }

  // Convenience getter for easy access to form fields
  get formCont() { return this.loginForm.controls; }

  // The function which executes when the user clicks on the login button
  // Here for local mockup
  login(): void {   
    this.username = this.loginForm.get('usernameField').value;
    this.password = this.loginForm.get('passwordField').value;
 
    console.log('login attempt for: ' + this.username);
    this.authentErrorMsg = null;
    this.userService.login(this.username, this.password);
    
    if (this.userService.user) {
      console.log('Successful authentication');
    } else {
      this.authentErrorMsg = 'Authentication error, wrong credentials';
    }
  }

  logout(): void {
    console.log('logout');
    this.userService.resetUser();
  }

}
