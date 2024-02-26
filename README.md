# Wordle Clone

Welcome to the Wordle Clone! This is a simple word-guessing game inspired by the classic Wordle game. In this clone, you'll be challenged to guess a hidden word within a limited number of attempts. The game features a difficulty setting, allowing you to choose between easy, medium, and hard levels with varying attempts. Also like the original you can only play once a day


## How to Play

1. **Objective:**
   - Your goal is to guess the hidden word.
   - The length of the word is displayed as a box, representing each letter's position.

2. **Difficulty Settings:**
   - Choose your preferred difficulty level:
     - **Easy:** 6 attempts.
     - **Medium:** 4 attempts.
     - **Hard:** 2 attempts.

3. **Making a Guess:**
   - Enter a guess in the input field and submit.
   - The game will provide feedback after each guess:
     - **Correct Letter and Position (Green Color):** The letter is in the right place.
     - **Correct Letter, Wrong Position (Yellow Color):** The letter is in the word but not in the right place.
     - **Incorrect Letter (Grey Color):** The letter is not in the word.

4. **Winning:**
   - If you guess the word within the allotted attempts, you win!

5. **Losing:**
   - If you exhaust all attempts without guessing the word, the game ends.
   - The hidden word will be revealed.


### Word Source

The hidden word in this Wordle Clone is dynamically fetched from the official New York Times Wordle site via a JSON file. Unlike using a static list, I dynamically retrieve the single Wordle word available for the day at the time of playing. This ensures a unique and fresh word for each playthrough.

## Technologies Used

- HTML
- CSS
   - Bootstrap
- JavaScript
   - Express

## Acknowledgments

This Wordle Clone was created with inspiration from the classic Wordle game. 

Have fun playing the Wordle Clone! 🎉

## Dev Notes:
There are still couple issues to be fixed but its not significant where I am willing to bother and fix it lol
