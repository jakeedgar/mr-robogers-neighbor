Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return an alert if the user inputs an empty string."
Code: beepBoop(" ");
Expected Output: "ALERT: Please Enter a Number."

Test: "It should return an alert if punctuation is present in the users input"
Code: beepBoop(5?);
Expected Output: "ALERT: Please Remove Punctuation."

Test: "It should return an array of numbers from 0 to the user's input, and replace all numbers that include a 3 with the phrase "Won't you be my neighbor?" 
Code: beepBoop(5);
Expected Output: [0, 1, 2, "Won't you be my neighbor?", 4, 5]

Test: "It should return an array of numbers from 0 to the user's input, and replace all numbers that include a 2, but not a 3 with the word "Beep". 
Code: beepBoop(5);
Expected Output: [0, 1, Boop, 3, 4, 5]

Test: "It should return an array of numbers from 0 to the user's input, and replace all numbers that include a 1, but not a 2 or 3 with the word "Boop" 
Code: beepBoop(5);
Expected Output: [0, Beep, 2, 3, 4, 5]

Test: "It should return an array of numbers from 0 to the user's input, and replace all numbers with the correct outputs in cascading order starting with 3's, then 2's, and then 1's. 
Code: beepBoop(5);
Expected Output: [0, Beep, Boop, "Won't you be my neighbor?", 4, 5]
Code: beepBoop(13)
Expected Output: [0, Beep, Boop, "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, Beep, Beep, Boop, "Won't you be my neighbor?"]

