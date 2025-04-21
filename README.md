# Updates

- Remember to not only update your repo but use the cmd `eas update --branch main
` to update the EAS deployment
- If you'd like to use EAS Build with EAS Update, run eas build:configure
- Run eas build when you are ready to create your first build.
- Once the build is completed, run eas submit to upload the app to app stores.
- eas build --profile development --platform android or eas build --profile preview --platform ios for a Development build which you can share the link and they can download and install the app ONLY when dev server is running; for custom dev client, install expo-dev-client then run the build command
  - eas build --profile development --platform android -https://expo.dev/accounts/clevermissfox/projects/react-native-intro-v1/builds/ecdb30e8-d41e-4677-8c2c-ccd04589eb08
  - you do still need the dev server running to load the JavaScript bundle.
- when you want to build and not require the dev server at all:

  - eas build --profile preview --platform android

- https://expo.dev/accounts/clevermissfox/projects/react-native-intro-v1/builds/a11a308a-61c5-4637-9bb3-f2ea5ac1d982

# Production Build

- The following commands
- eas build --profile production --platform android
- eas build --profile production --platform ios
