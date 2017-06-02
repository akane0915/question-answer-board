# _Ask It_

#### _This is a Question and Answer Board built in Ember!  It allows users to submit a question and others users to respond with answers.  Let's help all those junior developers out there to become better programmers by answering their questions!  After all, we all want the world to be a better place, right?  June 2, 2017_

#### By _**Asia Kane**_

![Homepage](img/homepage.png)
![Homepage](img/questionpage.png)

## Description

As a developer, have you ever found yourself in a situation where you are stuck and need help?  Good news is that the development community is full of people more than willing to lend a hand.  This application makes it convenient and quick for developers to reach out to the development community for help.  It allows the user to submit a coding question and then allows other developers to post answers to that question!

This app is written in Ember with Ember Data stored in Firebase.  There is complete CRUD functionality for both Questions and Answers (with the exception of updating an answer).  The relationship between Question and Answers is one-to-many. The app allows you to vote thumbs up or thumbs down for an answer.

The application structure is outlined below.  

Models:
  1. Question
    - Content
    - Author
    - Notes
    - Answers (One to many relationship)
  2. Answer
    - Content
    - Author
    - Question (One to many relationship)

Router:
  - router.js

Routes:
  - Index
  - Question

Router Handlers:
  - index.js
  - question.js

Components:
  - question-detail (dynamic routing for individual questions)
  - new-question
  - update-question
  - new-answer
  - update-answer

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ask-it`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* If you would like to make changes to this project, do so in the text editor.
* Make frequent commits with detailed comments.
* Submit changes as pull request to Asia at akane0915 on Github.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Known Bugs
_N/A_

## Support and contact details
_I encourage you to update/make suggestions/refactor this code as you see fit. I am always open to improvement! Please contact Asia Kane at asialkane@gmail.com with questions._

## Technologies Used
  * JavaScript
  * Ember
  * Node
  * Bower
  * Firebase
  * jQuery
  * CSS
  * Bootstrap
  * HTML
  * ES6

  ### License
  *This software is licensed under the MIT license*
  Copyright © 2017 **Asia Kane**
