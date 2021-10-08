// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://api.github.com',
  firebase: {
    apiKey: 'AIzaSyAEONBnjSy5aqyS1o-Emu4dJ60neOwosmI',
    authDomain: 'g5-test.firebaseapp.com',
    projectId: 'g5-test',
    storageBucket: 'g5-test.appspot.com',
    messagingSenderId: '676364862148',
    appId: '1:676364862148:web:35dbf0f9ffdf8b9249bf91',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
