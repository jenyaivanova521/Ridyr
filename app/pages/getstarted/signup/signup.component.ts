import { Component, OnInit, ElementRef, ViewChild  } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
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
  templateUrl: "./pages/getstarted/signup/signup.html",
  styleUrls: ["pages/getstarted/signup/signup-common.css", "pages/getstarted/signup/signup.css"]

})

export class SignupComponent implements OnInit {
  user: User;
  confirm: string;
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
    
  }
  submit() {
    this.signup();
  }
  // const context = "some  context";
  signup() {
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
    firebase.createUser({
      email: this.user.email,
      password: this.user.password
    }).then( (result) => {
          console.log("Created Account:", result);
          this.indicator.hide();
          alert({
            title: "User created",
            message: "userid: " + result.uid,
            okButtonText: "Okay"
          })
          Config.userID = result.uid;
          this.verifyPhone(result.uid);
        },
        (errorMessage) => {
          console.log("Error");
          this.indicator.hide();
          alert({
            title: "No user created",
            message: errorMessage,
            okButtonText: "Okay"
          });
        }
    );
  }

  verifyPhone(id) {  
    firebase.setValue(
      '/'+Config.type+'/'+id,
      {
        name:this.user.fullName,
        email: this.user.email,        
        isPhoneVerified: false, 
      }
    );    
    this.router.navigate(["/phone"]);    
  }
  toggleShowPassword(){
    this.isShowedPassword = !this.isShowedPassword;
  }
}