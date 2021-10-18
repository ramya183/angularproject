import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "localStorage";
  myid!: any;
  myform!:any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.myform = new FormGroup({
      username:new FormControl(''),
      password: new FormControl('')

    });
   
    this.display();
  }
  display(){
    this.myid = localStorage.getItem("formdata")
  }
  onSubmit(){
    localStorage.setItem("formdata", JSON.stringify(this.myform.value));
    // localStorage.clear();
  }
  


}
