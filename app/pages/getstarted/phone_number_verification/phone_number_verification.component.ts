import { Component, OnInit, ElementRef, ViewChild  } from "@angular/core";
import { Router } from "@angular/router";

import { LoadingIndicator } from 'nativescript-loading-indicator';
import { Config } from "~/shared/config";

import firebase = require("nativescript-plugin-firebase");
import { User } from "~/shared/user/user";
import { Page } from "tns-core-modules/ui/page/page";
import { ModalService } from "~/shared/services/modal.service";
import { ListSelectModal } from "~/shared/components/list-select";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Toast from 'nativescript-toast';
// import { Sinch } from 'nativescript-sinch';

// let sinchClient  = new Sinch("9ec0cbe9-56aa-4bba-9ca1-84c500e82a49", "9ec0cbe9-56aa-4bba-9ca1-84c500e82a49", "clientapi.sinch.com", "Ridyr");

@Component({
  selector: "my-app",
  templateUrl: "./pages/getstarted/phone_number_verification/phone_number_verification.html",
  styleUrls: [
    "pages/getstarted/phone_number_verification/phone_number_verification-common.css", 
    "pages/getstarted/phone_number_verification/phone_number_verification.css"]

})

export class PhoneNumberVerificationComponent implements OnInit {
  user: User;
  private indicator: LoadingIndicator;
  contrycode:string="";
  phone_number = '';
  countries = [];
  propertyToShow: string;
  sinchClient;
  callClient;

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
    // sinchClient.start();
    
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
  createVerification(phone){
    console.log("phone number: ", phone);
    firebase.login({
      type: firebase.LoginType.PHONE,
      phoneOptions: {
        phoneNumber: phone,
        verificationPrompt: "The received verification code here" // default "Verification code"
      }
    }).then(
        (result) => {
          firebase.setValue(
            '/'+Config.type+'/'+Config.userID,
            {
              isPhoneVerified: true,        
            }
          );
          console.log(JSON.stringify(result));
          this.indicator.hide();
          firebase.logout();
          this.router.navigate(["/login"]); 
        },
        (errorMessage) => {
          console.log(errorMessage);
          if(errorMessage == "Logging in the user failed. com.google.firebase.auth.FirebaseAuthUserCollisionException: This credential is already associated with a different user account.") {
            firebase.setValue(
              '/'+Config.type+'/'+Config.userID,
              {
                isPhoneVerified: true,        
              }
            );
            firebase.logout();
            this.router.navigate(["/login"]); 
          }
          this.indicator.hide();
        }
    );
    /*
    var verification = sinchClient.createSmsVerification(phone)
    verification.initiate().then((successInfo) => {
        // Act on success
        // Display "enter pin" UI
        dialogs.prompt("Your verification code", "Verfication code").then(r => {
          console.log("Dialog result: " + r.result + ", text: " + r.text);
          var code = r.text;
          verification.verify(code).then((successInfo) => {
              // Act on success (valid number)
              Toast.makeText("Your phone number is verification successfully", "long").show();
              this.indicator.hide();
          }).fail((errorInfo) => {
              // Act on error and inform the user / retry
              Toast.makeText(errorInfo, "long").show();
              this.indicator.hide();
          });
      });
    }).fail((errorInfo) => {
      console.log(errorInfo);
        // Act on error
        Toast.makeText(errorInfo, "long").show();
        this.indicator.hide();
    });   
    */ 
  }
  nextstep() {    
    // this.router.navigate(["/login"]); 
    console.log("next step");
    this.indicator.show({
      message: 'Please wait...'
    });
    var phone = this.contrycode + this.phone_number;
    this.createVerification(phone);
  }
  onSelectRidyr() {
    
  } 
  setValue(event){    
    console.log(event);
  }
}