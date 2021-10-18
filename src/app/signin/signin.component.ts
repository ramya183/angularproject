import { FormGroup,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  mysignup!:any;
  myvalue!:any;

  constructor() { }

  ngOnInit() {
    this.myvalue = new FormGroup({
      name:new FormControl(''),
      contact: new FormControl(''),
      email: new FormControl(''),
      designation: new FormControl(''),
      qualification: new FormControl('')
    })
    this.signUpForm();
  }
  signUpForm(){
    this.mysignup = localStorage.getItem("signupdata")
  }

  onSubmit(){
    localStorage.setItem("signupdata", JSON.stringify(this.mysignup.value));
    // localStorage.clear();
  }
  


}

