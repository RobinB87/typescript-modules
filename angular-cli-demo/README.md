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
