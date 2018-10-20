import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { BottomBarItem, BottomBar, TITLE_STATE, SelectedIndexChangedEventData, Notification  } from 'nativescript-bottombar';
import firebase = require("nativescript-plugin-firebase");

@Component({
  moduleId: module.id,
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  public hidden: boolean;
  public titleState: TITLE_STATE;
  public _bar: BottomBar;
  public inactiveColor: string;
  public accentColor: string;
  selectedTab = 0;
  public items: Array<BottomBarItem> = [
      new BottomBarItem(0, "", "icon_flight", "#272727" /*, new Notification("blue", "white", "1")*/),
      new BottomBarItem(1, "", "icon_direction", "#272727"),
      new BottomBarItem(2, "", "icon_profile", "#272727"),
      new BottomBarItem(3, "", "icon_favorite", "#272727")
  ];

  constructor(private page: Page) { }

  ngOnInit(): void {
    console.log("main tab - ngOnInit");
    this.page.actionBarHidden = true; 
  }
  tabLoaded(event) {
    this._bar = <BottomBar>event.object;
    this.hidden = false;
    this.titleState = TITLE_STATE.ALWAYS_HIDE;
    this.inactiveColor = "white";
    this.accentColor = "#939393";
}

 tabSelected(args: SelectedIndexChangedEventData) {
     // only triggered when a different tab is tapped
     console.log(args.newIndex);
     this.selectedTab = args.newIndex;
 }
  
}
