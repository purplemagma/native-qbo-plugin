native-qbo-plugin
=================

The native-qbo-plugin project demonstrates how to plug your own javascript UI into QBO without touching a line of QBO code.

Setting Up
----------

Clone this repo or get this code to your machine by downloading it. You  need to host the .js and .html files on an ssl enabled web server. You also need to set some CORS headers. I find nodeJS with the connect package to be an excellent development web server.

### NodeJS and packages
1. Install nodeJS - on OS X, I use brew http://brew.sh ```brew install node```
2. In a command-line whose current directory is the root of this source, use npm to install connect - ```npm install connect```. This should create a "node_modules" directory.
3. ```node webserver.js```
4. You should see:

```
Starting web server listening on port 8443
Waiting for connections
```

### Trust the SSL certificate

For some reason, Chrome is really picky about trusting certificates before allowing CORS calls to go through. You need to import the ssl/server.crt from the sample source into your trusted root store. On Mac, just navigate to native-qbo-plugin/ssl and open the server.crt file. It will open in "Keychain Access". Just select "Always Trust".

### Sign up for a QBO company in QA
1. Visit https://qa.qbo.intuit.com/qbo2/redir/startuphere?qbimport=n
2. In section 1, create a new user id
3. In section 2, fill out the form
4. In section 3, accept terms and create a company

### Set up your plugin in QBO
1. In the company you created in QA, go to https://qa.qbo.intuit.com/app/ecosystem
2. In the "plugins testing" section, fill out "title" with "my plugin" and ID with "myplugin"
3. Click "add"
4. In the large text box, add the following after the "allowed orgins array" but before the ending brace:

```
,"isNative": true,
"sourceUrl": "https://localhost:8443/main.js"
```

5. Click "Update"
6. Click "Navigate"

You should now see your plugin in the window. The main.js javascript file is the main AMD module where your plugin lives. And main.html is the template for that module. It demonstrates how to bring in a QBO quick fill control and the beginnings of an AngularJS app.
