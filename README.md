# Simple websocket server / client chat app
Using React, typescript & material-ui
The server is simply an echo server running on nodejs

## Installation
The server code lives in src/server/
Deploy server.js and package.json on a node js capable location, run `npm install` and `npm start`
Copy the example.env file in the root to .env or .env.local and update the url pointing to the websocket server (`ws://yourdomainorip:port`)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
