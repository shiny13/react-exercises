# React Project 2 - Would You Rather?

The name of the project is Would You Rather and it is created using React and Redux packages as part of the React NanoDegree's second project from Udacity.

This is a question-answer app which requires the user to login. A password is not needed to login for this app. Once the user is logged in they can answer questions with two possible answers. A static JSON data is provided using a Javascript file where new questions do not actually do not get saved, but a real life behaviour is mimiced by using delayed save response. The application uses various javascript libraries and taught in the udacity lessons. 

## Installation

1. You need to have the following installed prior to starting the project: Node.js, npm and yarn.
2. Get the project from the zip file and extract it in a location.
3. Start terminal (for Mac) or Command prompt (in Windows)
4. Run `npm install` or `yarn install`
5. Run `npm start` or `yarn start`
6. Your default browser will start the project on port 3000: http://localhost:3000
7. Some avatars used here are links to uploaded images so internet connected is needed to load those images.

## Login view

URL for login page when starting at localhost:
http://localhost:3000/login

![login page](https://github.com/shiny13/react-exercises/blob/master/would-you-rather-app/screenshots/login.png?raw=true)

No password is required when logging into the application. A pre-existing list if three users exist for the login dropdown options. Users are required to login before they can use the application.

![list of users](https://github.com/shiny13/react-exercises/blob/master/would-you-rather-app/screenshots/login-select-users.png?raw=true)

## Homepage

The home page is composed of a list of questions asked by various users (including the current logged in user) in chronological order (newest first). The questions are categorized in to 2 tabs with a count of questions for each category: 
The home page of the application consists of a list of questions in descending order with respect to datetime. The questions are categorised in two types:
- Unanswered Questions
- Answered Questions 

NOTE: The unasnwered question list will first appear when visiting this page. The homepage also remembers the tab that the user has viewed, with the exception of a new question created. 

![unanswered questions](https://github.com/shiny13/react-exercises/blob/master/would-you-rather-app/screenshots/home-unanswered-questions.png?raw=true)

![answered questions](https://github.com/shiny13/react-exercises/blob/master/would-you-rather-app/screenshots/home-answered-questions.png?raw=true)

## View Polls view

URL to view a question by question id: 
http://localhost:3000/questions/<question_id>

The view polls page can be used to see the questions' details. 
- It will show the poll results when the question is answered. 
- It will allow the user to answer and submit by picking a question if it isn't answered. 

NOTE: Poll results/answers will not be shown if left unanswered.

### Poll Results view

Poll results here show the total vote count and percent of votes.

![poll results](https://github.com/shiny13/react-exercises/blob/master/would-you-rather-app/screenshots/questions-result.png?raw=true)

### Answer Question view

The poll results are only shown after a question is answered. User must choose an answer before submitting, where no options chosen and clicking submit will show an error.

![answer questions view](https://github.com/shiny13/react-exercises/blob/master/would-you-rather-app/screenshots/question-submit-answer.png?raw=true)

## New Questions view

URL to see the add question view:
http://localhost:3000/add

![new question view](https://github.com/shiny13/react-exercises/blob/master/would-you-rather-app/screenshots/new-question.png?raw=true)

A new question can be created by typing in the two possible answers to the question.

## Leaderboard view

URL for the leaderboard view: 
http://localhost:3000/leaderboard

![leaderboard view](https://github.com/shiny13/react-exercises/blob/master/would-you-rather-app/screenshots/leaderboard.png?raw=true)

The leaderboard view shows the users ranked from top to bottom with their respective scores. The score is based on the sum of questions answered and created questions to participate in the game.

## Logout view

The user will be able to logout once logout button is clicked. 

## Redirects, Referrals and 404s
1. The login component remembers URLs and does not allow users to access any views without logging in. It will simply redirect to the login view if hte user is not logged in. 
2. A 404 error will be shown if the app does not recognise the URL or if the question does not exist and the user is directly trying to access it via URL.





