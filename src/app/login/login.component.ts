import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'tejesh'
  password = ''
  errorMessage = 'invalid Credentials'
  invalidLogin = false

  constructor(private router : Router,
      private hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  handleLogin() {
    //console.log(this.username)
    // if(this.username === 'tejesh' && this.password === 'dummy'){
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
    }else{
      this.invalidLogin = true
    }
  }

  ngOnInit(): void {
  }

}
