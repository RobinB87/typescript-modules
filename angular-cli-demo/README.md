# create angular package with angular cli

ng g library libname (inside the application)
A projects folder will be created automatically with the library

The cli will also add our library to the paths array of the main tsconfig.json (from the app itself), where the typescript compiler gets configured.
So everytime we import something by the ES6 import statement, the typescript compiler will first search in this array. If it does not find it, it will look in the node_modules folder.

# build

Add build script in package.json
"build-my-login": "ng build my-login",

Can also add a watch with --watch, so you do not have to build in the appliction as well, all the time. Visible output: Compilation complete. Watching for file changes...

# angular service library

A service library is provided in root and is exported over the public api (public_api.ts). It can be easily imported without importing the library module in your application, as the service provides itself to the root injector when it is imported via the ES6 import statement.

# add configuration in library

To add config, also update the module with forRoot. At the providers ensure to add a class, not an interface?
Importing a service module is not required, but to use the config, import the module with .forRoot{});

# using an interface

To be able to switch the service, for example for testing purposes, you can use an abstract base class. It acts more or less like an interface, but an interface can not be used in Angular with Dependency Injection, as in typescript interfaces are thrown out when transpiling to javascript.

As you need this abstract class to be available from the outside, it needs to be exported by the public_api.ts file. Which occurs in this case, as the abstract class is created in the logger.service.ts.

It needs to be provided in a Module with for example some overriding service:
providers: [ { provide: MyConsoleLoggerService, useClass: CustomLoggerService } ],

# linting

Can use some scripts for linting:
"lint-my-login": "ng lint my-login",
"lint-my-console-logger": "ng lint my-console-logger",
"lint-all-libs": "npm run lint-my-login && npm run lint-my-console-logger",

# testing a library

ng test library-name

in CI/CD to ensure test does not run endlessly, but only once:
ng test library-name --watch=false

# only test in console, not spawning browser:

"test-my-login-watch": "ng test my-login --browsers=ChromeHeadless"
test by running this command

# watch all tests for all libraries

You can run various tests in parallel with npm-run-all:
npm i npm-run-all --save-dev

Create script for it with run-p. Can also create ci tests with watch=false which execute once and then quit.
