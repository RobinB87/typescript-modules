# FinalConsumerAppWithLocalNpmInstall

On of the final consumer apps where an example is provided with a LOCAL npm install of the previously created libraries.

npm i, one folder back and then the application, dist folder and library:
npm i ..\angular-cli-demo\dist\my-console-logger\
npm i ..\angular-cli-demo\dist\my-login\

# package.json

In the package.json you see a reference to the specific folders. Can use them now as normal.

# peer dependencies

In the node_modules folder you see the libs marked with a small arrow. It means we are pointing to a specific folder.

As the libraries have peer dependencies, and we want that these are being resolved relative to the paths of the the consumer app paths, a flag in the angular.json needs to be set:

"preserveSymlinks": true
