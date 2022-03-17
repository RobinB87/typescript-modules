# create angular package with angular cli

ng g library libname (inside the application)
A projects folder will be created automatically with the library

The cli will also add our library to the paths array of the main tsconfig.json (from the app itself), where the typescript compiler gets configured.
So everytime we import something by the ES6 import statement, the typescript compiler will first search in this array. If it does not find it, it will look in the node_modules folder.
