import * as pushPlugin from "nativescript-push-notifications";

export class Config {
  static token = "";
  static type = "";

  static pushSettings = {
    senderID: "385361542120", // Required: setting with the sender/project number
    notificationCallbackAndroid: (stringifiedData: String, fcmNotification: any) => {
        console.log(stringifiedData);
        // console.log(fcmNotification.getBody());
        // const notificationBody = fcmNotification && fcmNotification.getBody();
        // this.updateMessage("Message received!\n" + notificationBody + "\n" + stringifiedData);
    }
    // notificationCallbackAndroid: (message, data, notification) => {
    //     console.log("MESSAGE: "+JSON.stringify(message));
    //     console.log("DATA: "+JSON.stringify(data));
    //     console.log("NOtification: "+JSON.stringify(notification));
    // }
  };
  static iosSettings = {
    badge: true,
    sound: true,
    alert: true,
    clearBadge: true,
    interactiveSettings: {
        actions: [{
            identifier: 'READ_IDENTIFIER',
            title: 'Read',
            activationMode: "foreground",
            destructive: false,
            authenticationRequired: true
        }, {
            identifier: 'CANCEL_IDENTIFIER',
            title: 'Cancel',
            activationMode: "foreground",
            destructive: true,
            authenticationRequired: true
        }],
        categories: [{
            identifier: 'READ_CATEGORY',
            actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
            actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
        }]
    },
    notificationCallbackIOS: (message: any) => {
        console.log(message);
        // alert("Message received!\n" + JSON.stringify(message));
    }
  };
}