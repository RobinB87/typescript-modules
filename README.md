# typescript-modules

Try out various stuff creating modules and libraries in js, ts, angular

# commonjs:

Try out file with cmd: node main.js

# typescript:

Compiling node main.ts does not work. Needs to be compiled first.
Hence, tsconfig.json is required.

Cd to the typescript dir (typescript-example) and call the typescript compiler with: tsc.
Dist folder will be created (the outDir of tsconfig.json). Cd to here and type node main.js again.

# typescript package example:

Export namespace and function. Create index.ts which acts as the public api of this folder.
As we want to create a package, a package.json is required as well. Main is the entry point of the library.
Typing files are created with types, which provides the types to the consumer.

# typescript package consumer example:

Add main.ts and tsconfig, but now add all files instead of src/.
Create package.json again, now by: npm init. Manually add start script.

You can link the package locally by (this creates a node_modules folder):
npm link ../typescript-package-example

Now, in the consumer folder: import { CalculatorService } from "my-first-library";
Invoke the add function and test it with: npm start
