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

## Screenshots

<strong>Landing Page</strong>

<img width="948" alt="Screen Shot 2019-12-09 at 12 39 52 PM" src="https://user-images.githubusercontent.com/52920074/70459001-48a38200-1a81-11ea-8dbf-6b598c5491e2.png">
<br>
<strong>List of Friends</strong>
<img width="954" alt="Screen Shot 2019-12-09 at 12 40 39 PM" src="https://user-images.githubusercontent.com/52920074/70459006-4a6d4580-1a81-11ea-97fb-008b1ec6f9f3.png">
<br>
<strong>View Friend's Profile</strong>
<img width="1439" alt="Screen Shot 2019-12-09 at 12 41 10 PM" src="https://user-images.githubusercontent.com/52920074/70459010-4c370900-1a81-11ea-9a4f-7b3165bd31e2.png">
<br>
<strong>User's Profile page </strong>
<img width="1004" alt="Screen Shot 2019-12-09 at 12 41 28 PM" src="https://user-images.githubusercontent.com/52920074/70459019-4e996300-1a81-11ea-97a4-0a3980b205ab.png">
<br>
<strong>Chat with your friends </strong>
<img width="981" alt="Screen Shot 2019-12-09 at 1 55 27 PM" src="https://user-images.githubusercontent.com/52920074/70463799-96bd8300-1a8b-11ea-9250-aafd5738713c.png">
<strong>React Weather App</strong>
<img width="358" alt="Screen Shot 2019-12-09 at 1 29 32 PM" src="https://user-images.githubusercontent.com/52920074/70463637-434b3500-1a8b-11ea-9c6b-ad5ce891a203.png">

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
