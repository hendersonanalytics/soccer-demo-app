// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { SOCCER_API_KEY } from 'secrets';

export const environment = {
  production: false,
  httpRetryAttempts: 2,
  apiHeaderInfo: {
    rapidApi: {
      host: {
        key: 'x-rapidapi-host',
        value: 'v3.football.api-sports.io'
      },
      key: {
        key: 'x-apisports-key',
        value: SOCCER_API_KEY
      }
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
