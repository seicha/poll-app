# Getting Started with Interactive Poll App

## User Story Title

Make an interactive poll application

## Persona

+ Survey manager: who wants to hold a poll

"As Tom, a Survey Manager who's not tech savvy, I want to have an easy/simple poll application where I can edit and see changes and results in a timely manner so that I can have a good overview on my poll and know if I need to change anyting. I want to see the result in a chart."

+ Participant: who needs to respond to a poll survey manager created

"As Linda, a paticipant who can usually navigate myself on websites okay, I want to have a clear guidline and easy way to vote. I want to see any chnages and updates in real time so that I know what I'm doing."

## Criteria

+ Given that I am Tom,  I want to see the question I made on all other section, vote and result, when I click "update" button. I want to be able to edit my answers without making any extra click, and all I need to do is clicking on "add answer" or "x" to add and remove the answer. I want all these question and answers to be updated in real time. I want to be able to reset everything in one go when I click "reset" button.

+ Given that I am Linda, I want to see any changes immidiately. I want to be able to send multiple options by clicking "vote" button.

## How to use the app

1, Enter your poll question and click "Update".
<img width="421" alt="Screenshot 2020-12-05 at 11 49 21" src="https://user-images.githubusercontent.com/18380391/101240537-fdea3380-36ef-11eb-9652-1696b2e2bd4c.png">

2, Start adding your answers! You need at least 2 answers. Click "Add Answer" button to add more. 
<img width="418" alt="Screenshot 2020-12-05 at 11 53 33" src="https://user-images.githubusercontent.com/18380391/101240595-84067a00-36f0-11eb-91ca-bea26eceefaf.png">

3, Once you added 2 answers, you will have an option to remove the answer(s). Click on "x".
<img width="418" alt="Screenshot 2020-12-05 at 12 07 58" src="https://user-images.githubusercontent.com/18380391/101240906-8964c400-36f2-11eb-9541-774aa860da09.png">

4, Vote options and the chart label will get updated in real time while you are editing the answers.
<img width="867" alt="Screenshot 2020-12-05 at 11 55 08" src="https://user-images.githubusercontent.com/18380391/101240732-6d145780-36f1-11eb-98ad-21fa8791f2da.png">
<img width="1762" alt="Screenshot 2020-12-05 at 12 17 55" src="https://user-images.githubusercontent.com/18380391/101241171-2e33d100-36f4-11eb-9fa4-15d76ae55d66.png">

5, Select option(s) and vote by clicking "Vote".
<img width="421" alt="Screenshot 2020-12-05 at 12 01 11" src="https://user-images.githubusercontent.com/18380391/101240763-9a610580-36f1-11eb-8fd4-93985f4c283f.png">

6, See the result in a chart! You can hover over the chart to see the vote count on each answer. Total vote is shown at the bottom.
<img width="870" alt="Screenshot 2020-12-05 at 12 02 19" src="https://user-images.githubusercontent.com/18380391/101240784-bfee0f00-36f1-11eb-8ab8-8dba3b7b5a13.png">

7, Reset button will reset everything.
<img width="421" alt="Screenshot 2020-12-05 at 11 49 21" src="https://user-images.githubusercontent.com/18380391/101240537-fdea3380-36ef-11eb-9652-1696b2e2bd4c.png">

8, have fun!

Note:
+ All fields have a limit of 80 characters.
+ When the limit is reached, fields get disabled.
+ 10 is the maximum option you can have - "Add Answer" button will then not be shown.

## This app is using

+ react ^17.0.1
+ bootstrap ^4.5.3
+ uuid ^8.3.1
+ react-chartjs-2 ^2.11.1

## Usage

### `npm start`

This will start the app

### `npm run build`

To build the app for production
