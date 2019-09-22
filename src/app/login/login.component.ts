import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserDTO } from './model/userDTO';
import { LoginService } from './shared/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService:LoginService,private router:Router){}

  userDto:UserDTO=new UserDTO();
  validUser:boolean=true;

  Login(){
    this.loginService.login(this.userDto).then(x=>{
      this.validUser=x;
      if(this.validUser){
        window.localStorage.setItem("auth","true");
        this.router.navigate([""]);
      }
    });
  }
}
