# Ridyr App NativeScript Version

In NativeScript you use the CLI's tns run command to run your apps on iOS or Android.

Execute the following command in your terminal to run your app on an android emulator.


```
tns run android
```




### NOTE:

* If you get an error at this point you likely haven’t completed the NativeScript CLI installation instructions. If you’ve gone through the instructions and are still stuck, try asking for help in the NativeScript community forum.
* You must have at least one AVD (Android Virtual Device) configured on your development machine for this command to run your app up on an Android emulator. If you don’t have one installed currently go ahead and set one up now.


The run command will take a few seconds to complete, as the NativeScript CLI will actually be building and deploying a native Android application.

If you’re on macOS and would prefer to develop for iOS first, type Ctrl + C in your terminal to end the previous tns run android command, and then execute the following command instead.


```
tns run ios
```



The run command will again take a few seconds, as the NativeScript CLI will be building and deploying a native iOS application. 
You might have noticed that the tns run command never terminates. That is, you cannot type in your terminal or command prompt after your app starts up.


# To build iOS Release version

You need to specify to build for device and not emulator and provide the team id:

```
tns build ios --release --for-device --teamId W5V7L2DT8W
```
