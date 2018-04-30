# FriendFinder
Overview
Friend Match is a compatibility-based application similar to dating apps but for pets trying to make a friend. This full-stack site will takes in the results from the users' surveys and compares their answers with those from other users that have submitted their answers. The app then finds the best overall friend match for the user.

Description
The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

The user's most compatible friend is determined with the logic below:

Each user's results are converted into an array of numbers.
Then the difference between current user's scores against those from other users are compared, question by question and the absolute value of the difference of each are pushed into a temporary array.
Then the indices of the temporary array are added to get the total difference score.
The closest match is the user with the least amount of difference.
Once the best match has been found, the results are displayed as a modal pop-up. The modal displays both the name and picture of the closest match.

Technologies used:
HTML5
CSS
Javscript
Node.js
Express
MySQL