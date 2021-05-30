# UDACITY FRONT-END DEV COURSE - PROJECT 4

In this project, a web tool is built so that the user can input a URL of an article in the webpage and the user will get the sentiment of the article in return. This is done by means of an API called [meaningcloud](https://www.meaningcloud.com).
## Configure the web app

To run the webapp, open a terminal window and go to the working directory. 

Make sure you have node v12.14.0 installed. If you have a later version and wish to keep it, try installing the node version manager [nvm](https://github.com/nvm-sh/nvm) and then type in the terminal:

```
nvm install 12.14.0
nvm use 12.14.0
```

After than you can install the dependecies included in the *package.json* file by running the following command:

```
npm install
```

## Run the web app

To try out the web app from scratch, you can try building it and then running it. In order to do this, first delete the *dist* folder by running in the terminal the following:

```
rm -rf dist
```

Then you can create re-generate this folder by typing:

```
npm run build-prod
```
And finally, you can start the server by typing:
```
npm run start
```

At this point, you can run the web app by going in the browser to the [Article sentiment app](http://localhost:3000/)


