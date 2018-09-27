import { Component, OnInit, ElementRef, ViewChild  } from "@angular/core";
import { Router } from "@angular/router";

import { LoadingIndicator } from 'nativescript-loading-indicator';
import { Config } from "~/shared/config";

import firebase = require("nativescript-plugin-firebase");
import { User } from "~/shared/user/user";
import { Page } from "tns-core-modules/ui/page/page";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";

@Component({
  selector: "my-app",
  templateUrl: "./pages/home/home.html",
  styleUrls: ["pages/home/home-common.css", "pages/home/home.css"]

})

export class HomeComponent implements OnInit {
  user: User;
  private indicator: LoadingIndicator;


  constructor(private router: Router, private page: Page) {
    this.user = new User();
    this.indicator = new LoadingIndicator();
    this.tabSelectedIndex = 0;
    this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
  }
  public tabSelectedIndex: number;
    public tabSelectedIndexResult: string;

    changeTab() {
        if (this.tabSelectedIndex === 0) {
            this.tabSelectedIndex = 1;
        } else if (this.tabSelectedIndex === 1) {
            this.tabSelectedIndex = 2;
        } else if (this.tabSelectedIndex === 2) {
            this.tabSelectedIndex = 0;
        }
    }

    // displaying the old and new TabView selectedIndex
    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        if (args.oldIndex !== -1) {
            const newIndex = args.newIndex;
            if (newIndex === 0) {
                this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
            } else if (newIndex === 1) {
                this.tabSelectedIndexResult = "Stats Tab (tabSelectedIndex = 1 )";
            } else if (newIndex === 2) {
                this.tabSelectedIndexResult = "Settings Tab (tabSelectedIndex = 2 )";
            }
        }
    }
  ngOnInit() {    
    this.page.actionBarHidden = true;    
  }

}