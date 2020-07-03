Npm run dev - starts this application in dev mode

As it is deployed to heroku rest of these command will not work as many variables and api's are hidden for security purposes.

This project is made to experiment with techniques and methods in both backend and frontend and to showcase what i can do.

It is build from barebones of react create app.

Google api developer console,
Mongodb - as database nonrelation,
Heroku - as temporary deployment,

Backend: 
Express for NodeJS handling
Mongoose as DATABASE
PassportJS is used to accomplish google oauth20
Body-parser
Concurrently - to run 2 instances of node, for frontend and backend server
cookie-session
Express - library for node simplyfying code
nodemon - to rerun website when edited in code
stripe - to access stripe payment api


Frontend:
React - as primary frontend framework
Various react libraries
react-dom
react-icons
react-image-gallery - slideshow
react-router-dom
react-scripts - to run start in package.json
react-stripe-checkout- to access api on frontend
Http-proxy-middleware - to be able to connect frontend and backend on localhost
conditional-expression - to use simpler reducer syntax
Axios - to make axios api calls
Sass- Css library


Coding practices 
camelCase - consistent nameing scheme,
avoding deep nestings,
codeSplitting,
dynamic routeing,
esLint formatter,

File and folder structures 
public
src/components/index.js
src/contextApi/
src/reducers/
src/assets/
src/actions/
index.js
