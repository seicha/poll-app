# Getting Started with Interactive Poll App

## User Story

Make an interactive poll application

## Persona

+ Survey manager: who wants to take a poll

"As Tom, a Survey Manager who's not tech savvy, I want to have an easy/simple poll application where I can edit and see changes and results in a timely manner. I want to see the result in a chart."

+ Participant: who needs to respond to a poll survey manager created

"As Linda, a paticipant who can usually navigate myself on websites okay, I want to have a clear and easy way to vote. I want to see any chnages and updates in real time"

## Handy Info

Functionalities:
+ All fields have a limit of 80 characters.
+ When the limit is reached, fields get disabled.
+ At least 2 options are needed, hence 2 inputs will alwasys be shown.
+ Once the 2 options are added, you will see the remove option.
+ Removing an option will remove any corresponding answers and votes.
+ A yellow warning will be shown, if you don't add 2 options, just as a reminder.
+ 10 is the maximum option you can have - "Add Answer" button will then not be shown.
+ Voting can be done as many times as possible.
+ Multiple options can be voted.
+ The chart will adapt any changes and reflect the reslut in real time.
+ The reset button will reset the whole UI: question, options and answers.
+ Hover over tha chart and you will see the vote counts on each answer.

Using :
+ react ^17.0.1
+ bootstrap ^4.5.3
+ uuid ^8.3.1
+ react-chartjs-2 ^2.11.1

## Usage

### `npm start`

This will start the app

### `npm run build`

To build the app for production
