# info

This is my first library with ng-packagr

public_api.ts is required. It represents the interface to this library.
Everything exported here can be used externally.

Also add a package.json:
Peer dependencies are not real dependencies for the library, but they tell the consumer that are package needs specific dependencies to run as expected.
Eg: please have Angular Core 7 or greater:
"@angular/core": ">=7.0.0"

Then in root of the application:
npm i ng-packagr tsickle --save-dev

In package.json add script:
"build-lib": "ng-packagr -p super-lib/package.json"

Then in the libs package.json:
"ngPackage": { "lib": { "entryFile": "public_api.ts" } }

Then create the package with: npm run build-lib

# install in root project (ng-packagr-demo)

npm i ./super-lib/dist

# import

import { SuperLibModule } from 'super-lib';
This is the name of the library, not the folder that it lives in!
