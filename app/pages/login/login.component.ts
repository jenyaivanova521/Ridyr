import { Component, OnInit, ElementRef, ViewChild  } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { EventData } from "tns-core-modules/data/observable";
import { getString, setString } from "application-settings";
import { LoadingIndicator } from 'nativescript-loading-indicator';
import { Config } from "~/shared/config";
// import * as pushPlugin from "nativescript-push-notifications";
import { isAndroid } from "platform";
import * as application from "application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "application";
import firebase = require("nativescript-plugin-firebase");
import { User } from "~/shared/user/user";


// or with TypeScript:
// import {LoadingIndicator} from "nativescript-loading-indicator";
@Component({
  selector: "my-app",
  templateUrl: "./pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]

})

export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn = true;
  private indicator: LoadingIndicator;
  isShowedPassword = false;
  @ViewChild("container") container: ElementRef;

  constructor(private router: Router, private page: Page) {
    this.user = new User();
    this.indicator = new LoadingIndicator();
  }
  
  ngOnInit() {    
    this.page.actionBarHidden = true;    
    this.isShowedPassword = false;

    if( Config.token != "" && Config.token != null ) {      
      this.router.navigate(["/list"]);
    }
    if (!isAndroid) {
      return;
    }

  }
  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      // this.signup();
    }
  }
  // const context = "some  context";
  login() {
    if( this.user.email == null || this.user.email.length == 0 ) {
      alert("Email can not be empty");
      return;
    }
    if( this.user.password == null || this.user.password.length == 0 ) {
      alert("Password can not be empty");
      return;
    }
    if(  this.user.password == null || this.user.password.length < 6 ) {
      alert("Password should be 6 more letters");
      return;
    }
    
    
    this.indicator.show({
      message: 'Please wait...'
    });
    firebase.login(
      {
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email: this.user.email,
          password: this.user.password
        }
      })
      .then((result) => {
        this.indicator.hide();
        console.log(JSON.stringify(result));
      })
      .catch((error) => {
        this.indicator.hide();
        console.log(error);
        alert("Login Failed!\n"+error);
      });
  }

  toggleDisplay() {    
    // this.router.navigate(["/signup"]);      
  }
  toggleShowPassword(){
    this.isShowedPassword = !this.isShowedPassword;
  }
}