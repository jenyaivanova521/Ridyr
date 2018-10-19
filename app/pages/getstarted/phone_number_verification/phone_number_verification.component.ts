import { Component, OnInit, ElementRef, ViewChild  } from "@angular/core";
import { Router } from "@angular/router";

import { LoadingIndicator } from 'nativescript-loading-indicator';
import { Config } from "~/shared/config";

import firebase = require("nativescript-plugin-firebase");
import { User } from "~/shared/user/user";
import { Page } from "tns-core-modules/ui/page/page";
import { ModalService } from "~/shared/services/modal.service";
import { ListSelectModal } from "~/shared/components/list-select";

@Component({
  selector: "my-app",
  templateUrl: "./pages/getstarted/phone_number_verification/phone_number_verification.html",
  styleUrls: ["pages/getstarted/phone_number_verification/phone_number_verification-common.css", "pages/getstarted/phone_number_verification/phone_number_verification.css"]

})

export class PhoneNumberVerificationComponent implements OnInit {
  user: User;
  private indicator: LoadingIndicator;
  contrycode:string="";
  phone_number = '';
  countries = [];
  propertyToShow: string;

  constructor(private router: Router, private page: Page,
    private modalService: ModalService,
    ) {
    this.user = new User();
    this.indicator = new LoadingIndicator();
  }
  
  ngOnInit() {    
    this.page.actionBarHidden = true;  
    this.contrycode = "+1";
    this.countries = Config.countryNames;
  }
  selectCountryCode(){
    var items = [];
    for( var i = 0; i < Config.countryAreaCodes.length; i++) {
      items.push('+'+Config.countryAreaCodes[i]+" | "+Config.countryNames[i]);
    }
    this.modalService.showModal(ListSelectModal,
			{context: {
				items: items,
				propertyToShow: this.propertyToShow
			}, fullscreen: true
			})
			.then(
				(result) => {
          console.log(result);
          this.contrycode = '+'+Config.countryAreaCodes[result];
					// this.selectedElement = result;
					// this.itemSelected.next(result);
				}
			)
  }
  nextstep() {    
    // this.router.navigate(["/login"]); 
  }
  onSelectRidyr() {
    
  } 
  setValue(event){    
    console.log(event);
  }
}