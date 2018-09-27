import { Component, OnInit, ElementRef, ViewChild  } from "@angular/core";
import { Router } from "@angular/router";

import { LoadingIndicator } from 'nativescript-loading-indicator';
import { Config } from "~/shared/config";

import firebase = require("nativescript-plugin-firebase");
import { User } from "~/shared/user/user";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
  selector: "my-app",
  templateUrl: "./pages/getstarted/first_choice/first_choice.html",
  styleUrls: ["pages/getstarted/first_choice/first_choice-common.css", "pages/getstarted/first_choice/first_choice.css"]

})

export class FirstChoiceComponent implements OnInit {
  user: User;
  private indicator: LoadingIndicator;


  constructor(private router: Router, private page: Page) {
    this.user = new User();
    this.indicator = new LoadingIndicator();
  }
  
  ngOnInit() {    
    this.page.actionBarHidden = true;    
  }
  onSelectDriver() {
    Config.type = "driver";
    this.router.navigate(["/login"]); 
  }
  onSelectRidyr() {
    Config.type = "ridyr";
    this.router.navigate(["/login"]); 
  }
}