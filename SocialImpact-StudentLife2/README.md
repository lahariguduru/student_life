# Recommended next steps:
Note: Make sure you have installed native code dependencies [here](https://reactnative.dev/docs/environment-setup#installing-dependencies)
​
### To preview and run the project on your device:
1. Open project folder in Visual Studio Code
2. Run  `npm install`  in the terminal
3. For iOS device (only on MacOS)
    1. Run `npx pod-install`
    2. Then, run `npx react-native run-ios` to view on iOS simulator or follow the instructions [here](https://reactnative.dev/docs/running-on-device#running-your-app-on-ios-devices) to run on a physical device.
4. For Android device.
    1. Use Android Virtual Device in [Android Studio](https://developer.android.com/studio/index.html) or follow the instructions [here](https://reactnative.dev/docs/running-on-device#running-your-app-on-android-devices) to run on physical device.
    2. Then, run `cd android && gradle wrapper && cd ..`
    3. Then, run `npx react-native run-android`