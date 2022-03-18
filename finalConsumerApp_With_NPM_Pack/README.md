# FinalConsumerAppWithNPMPack

In the library application run npm pack script. A tarball .tgz file is created.
Cd to the consumer app and run npm install with the path to the file, including the file name:

npm i ../angular-cli-demo/dist/my-login/my-login-0.0.0-watch+1647511438128.tgz

"preserveSymlinks": true is not needed anymore, as the library is installed stand-alone.

# publishing

Once the library is deployed, you can only redeploy when the version is updated.
