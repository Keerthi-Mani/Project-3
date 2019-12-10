<img width="926" alt="Screen Shot 2019-12-09 at 12 07 36 PM" src="https://user-images.githubusercontent.com/52920074/70456703-a6819b00-1a7c-11ea-90a8-c73b6053489f.png">
<br>
A platform for friends to connect. They can create their profile by adding their experience, education, skills and other important information of their professional career.

Users can also create small posts and like/dislike and comment on other posts.

<strong>Live Link:</strong> [Click here](https://gentle-island-67954.herokuapp.com/)

## Quick Start

```
# clone repository
git@github.com:Keerthi-Mani/Project-3.git

# Install Dependencies
cd Project-3 && npm install

```

In the default.json file create the below 2 enviroment variables. Make sure it is exactly as shown below. No special charecters or spaces must be there.

```
mongoURI=YOUR_OWN_MONGO_URI
jwtSecret=YOUR_OWN_SECRET
```

To run the server:

```
# the server runs on port 3000
npm start
```

## Boiler Plate

```
|____client
| |____public
| | |____favicon.ico
| | |____index.html
| | |____logo512.png
| | |____manifest.json
| | |____robots.txt
| | |____logo192.png
| |____.gitignore
| |____package-lock.json
| |____package.json
| |____src
| | |____store.js
| | |____App.css
| | |____index.js
| | |____utils
| | | |____setAuthToken.js
| | |____img
| | | |____icon.png
| | | |____friends2.jpeg
| | | |____friends.jpeg
| | | |____showcase.jpg
| | | |____friends1.jpeg
| | |____sockethelper.js
| | |____components
| | | |____profile-forms
| | | | |____CreateProfile.js
| | | | |____AddEducation.js
| | | | |____AddExperience.js
| | | | |____EditProfile.js
| | | |____posts
| | | | |____Posts.js
| | | | |____PostItems.js
| | | | |____PostForm.js
| | | |____post
| | | | |____CommentItem.js
| | | | |____Post.js
| | | | |____CommentForm.js
| | | |____auth
| | | | |____Register.js
| | | | |____Login.js
| | | |____layout
| | | | |____Navbar.js
| | | | |____spinner.gif
| | | | |____Landing.js
| | | | |____Spinner.js
| | | | |____Alert.js
| | | | |____Chat.js
| | | |____dashboard
| | | | |____DashboardActions.js
| | | | |____Education.js
| | | | |____Experience.js
| | | | |____Dashboard.js
| | | |____profile
| | | | |____Profile.js
| | | | |____ProfileTop.js
| | | | |____ProfileExperience.js
| | | | |____ProfileAbout.js
| | | | |____ProfileEducation.js
| | | |____weather
| | | | |____Weather.css
| | | | |____WeatherApp.js
| | | | |____WeatherForm.css
| | | | |____WeatherApp.css
| | | | |____WeatherForm.jsx
| | | | |____assets
| | | | | |____sky.jpg
| | | | |____Weather.jsx
| | | |____routing
| | | | |____PrivateRoute.js
| | | |____profiles
| | | | |____ProfileItem.js
| | | | |____Profiles.js
| | |____actions
| | | |____profile.js
| | | |____types.js
| | | |____auth.js
| | | |____post.js
| | | |____alert.js
| | |____reducers
| | | |____profile.js
| | | |____auth.js
| | | |____post.js
| | | |____index.js
| | | |____alert.js
| | |____App.js
|____routes
| |____api
| | |____profile.js
| | |____posts.js
| | |____auth.js
| | |____users.js
```

## Screenshots

### <strong>Landing Page</strong>

<img width="948" alt="Screen Shot 2019-12-09 at 12 39 52 PM" src="https://user-images.githubusercontent.com/52920074/70459001-48a38200-1a81-11ea-8dbf-6b598c5491e2.png">
<br>

### <strong>Sign Up</strong>

<img width="915" alt="Screen Shot 2019-12-09 at 6 49 50 PM" src="https://user-images.githubusercontent.com/52920074/70482884-ce8cf080-1ab4-11ea-8c58-9468aba46888.png">
<br>

### <strong>Sign In</strong>

<img width="912" alt="Screen Shot 2019-12-09 at 6 50 03 PM" src="https://user-images.githubusercontent.com/52920074/70482895-d9e01c00-1ab4-11ea-82ac-2db8a482135e.png">

### <strong>List of Friends</strong>

<img width="954" alt="Screen Shot 2019-12-09 at 12 40 39 PM" src="https://user-images.githubusercontent.com/52920074/70459006-4a6d4580-1a81-11ea-97fb-008b1ec6f9f3.png">
<br>

### <strong>View Friend's Profile</strong>

<img width="1439" alt="Screen Shot 2019-12-09 at 12 41 10 PM" src="https://user-images.githubusercontent.com/52920074/70459010-4c370900-1a81-11ea-9a4f-7b3165bd31e2.png">
<br>

### <strong>User's Profile page </strong>

<img width="1004" alt="Screen Shot 2019-12-09 at 12 41 28 PM" src="https://user-images.githubusercontent.com/52920074/70459019-4e996300-1a81-11ea-97a4-0a3980b205ab.png">
<br>

### <strong>Post and comment on your friend's post </strong>

<img width="916" alt="Screen Shot 2019-12-09 at 6 49 29 PM" src="https://user-images.githubusercontent.com/52920074/70482888-d187e100-1ab4-11ea-9a63-9bb2c49b6d56.png">
<br>

### <strong>Chat with your friends </strong>

<img width="981" alt="Screen Shot 2019-12-09 at 1 55 27 PM" src="https://user-images.githubusercontent.com/52920074/70463799-96bd8300-1a8b-11ea-9250-aafd5738713c.png">
<br>

### <strong>React Weather App</strong>

<img width="358" alt="Screen Shot 2019-12-09 at 1 29 32 PM" src="https://user-images.githubusercontent.com/52920074/70463637-434b3500-1a8b-11ea-9c6b-ad5ce891a203.png">
<br>

### <strong>Redux-Dev-Tools-Extension</strong>

#### Tree

<img width="1434" alt="Screen Shot 2019-12-09 at 6 33 46 PM" src="https://user-images.githubusercontent.com/52920074/70482181-cdf35a80-1ab2-11ea-971d-ca915b6f4f6b.png">

### Chart

<img width="858" alt="Screen Shot 2019-12-09 at 6 37 15 PM" src="https://user-images.githubusercontent.com/52920074/70482247-ff6c2600-1ab2-11ea-9621-5c99ef9e1c15.png">

### Setting up Redux DevTools in a store with middleware

Middleware in redux:

```
npm install redux-thunk
```

Installing Dependencies for Redux DevTools

```
npm install redux-devtools-extension
```

store.js(A store with middleware)

```
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const intialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
```

#### To create a store you need the following :

1. Provider from react-redux — essentially for wrapping your “App” component in the “index.js” file with the store
2. The root reducer which holds all the other reducers.
3. Middlewares, if you are using any in your project.

App.js:

```
import { Provider } from "react-redux";
import store from "./store";
```

### WEATHER API_KEY

```
const Api_Key = "ADD_YOUR_API_KEY";

        if (country && city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
      );
```

## Main Technologies

### Client Side

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)

### Libraries used in Client-side

- [axios](https://www.npmjs.com/package/axios)
- [react-moment](https://www.npmjs.com/package/react-moment)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [redux-thunk](https://codeburst.io/understanding-redux-thunk-6dbae0241817)
- [redux-devtools-extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
- [socket.io-client](https://socket.io/)
- [weather-icons](https://www.iconfinder.com/weather-icons?price=free)

## Server Side

- [Node.js / Express](https://nodejs.org/en/)
- [Mongo DB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [Passport-jwt](https://medium.com/@therealchrisrutherford/nodejs-authentication-with-passport-and-jwt-in-express-3820e256054f)

### Libraries used in Server-side

- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [gravatar](https://www.npmjs.com/package/react-gravatar)
- [mongoose](https://mongoosejs.com/docs/index.html)
- jwt-decode
- moment
- validator

## Authors

<em>Ajay Singh, Keerthi Mani & Shital Patel</em>
