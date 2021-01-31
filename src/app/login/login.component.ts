import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean = false;
  loginUser = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });

  constructor() { }

  onSubmit() {
    this.loggedIn = true;
  }

  ngOnInit(): void {
  }

}
