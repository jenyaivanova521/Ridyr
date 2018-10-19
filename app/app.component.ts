import { Component, ViewContainerRef, OnInit } from "@angular/core";
import * as pushPlugin from "nativescript-push-notifications";
import { registerElement } from 'nativescript-angular';
import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';
import { ModalService } from "./shared/services/modal.service";

registerElement('BottomBar', () => BottomBar);

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private vcRef: ViewContainerRef,
  ){}
  ngOnInit(): void {
		this.modalService.setContainerRef(this.vcRef);
		console.log("---AppInit---")
	}
}