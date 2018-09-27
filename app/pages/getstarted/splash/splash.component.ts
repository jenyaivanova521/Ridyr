import { Component, style, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Config } from "~/shared/config";
import { getString } from "application-settings";
import firebase = require("nativescript-plugin-firebase");

import * as application from "application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "application";
import { Message } from "nativescript-plugin-firebase";
import * as dialogs from "ui/dialogs";
import { RouterExtensions } from "nativescript-angular/router";
import { isAndroid } from "platform";

@Component({
  selector: "my-app",
  templateUrl: "./pages/getstarted/splash/splash.html",
  styleUrls: ["pages/getstarted/splash/splash-common.css", "pages/getstarted/splash/splash.css"]

})
export class SplashComponent implements OnInit {
  constructor(private router: Router,private page: Page,private routerExtensions: RouterExtensions) {

  }
  
  ngOnInit() { 
    firebase.init({
      iOSEmulatorFlush: true,
      onPushTokenReceivedCallback: function(token) {
        console.log("Firebase push token: " + token);
        // Config.notifyToken = token;
      },
      onMessageReceivedCallback: (message: Message) => {
        console.log("onMessageReceived");
        console.log("message: "+JSON.stringify(message));
        console.log(`Title: ${message.title}`);
        console.log(`Body: ${message.body}`);
        console.log(JSON.stringify(message.data));
        // if your server passed a custom property called 'foo', then do this:
        // console.log(`Value of 'foo': ${message.data.foo}`);
        if(message.data!=null&&message.data.articleId!=null){
          dialogs.confirm({
            title:"Notification",
            message:message.body,
            okButtonText:"See Now",
            cancelButtonText:"Later"
          }).then(result=>{
            console.log("Dialog result: "+result);
            
          });
        }
        else {
          dialogs.confirm({
            title:"Notification",
            message:message.body,
            okButtonText:"Okay",
          }).then(result=>{
            console.log("Dialog result: "+result);
          });
        }
      },      
      persist: false,
      storageBucket: 'gs://ridyr-1497879047259.appspot.com',
      onAuthStateChanged:(data:any) => {
        console.log("AuthState Changed: " + JSON.stringify(data));
        if(data.loggedIn) {
          Config.token = data.user.uid;
          console.log("Firebase User logged in: " +data.user.uid);          
        }
        else {
          Config.token = "";
          console.log("Firebase User not logged");
        }
      }
    }).then(
      instance => {
        console.log("firebase init done");
      },
      error => {
        console.log(`firebase.init error:${error}`);
      }      
    )
    
    setTimeout(() => {
      // Config.token = getString("token");
      // if(Config.token==null || Config.token=="")
      //   Config.token = getString("token");
      // console.log("Existing Token: "+ Config.token);
      if( Config.token != "" && Config.token != null ) {      
        this.router.navigate(["/home"]);
      }
      else {
        this.router.navigate(["/first_choice"], {replaceUrl:true});
      }
    }, 1000);
    this.page.actionBarHidden = true;
    // this.page.backgroundImage = "res://splash";

  }
}
