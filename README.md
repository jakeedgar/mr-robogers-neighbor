# Mr. Roboger's Neighborhood

#### By **Jake Edgar**

#### A website which displays the beepBoop function in action.

## Technologies Used

* HTML
* CSS
* BootStrap
* Mark Down
* JavaScript
* jQuery 

## Description

Using this website, users can easily test the beepBoop function using their own inputs. 

## Test Driven Development
Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return an alert if the user inputs an empty string."
Code: beepBoop(" ");
Expected Output: "ALERT: Please Enter a Number."

Test: "It should return an array of numbers from 0 to the user's input, and replace all numbers that include a 3 with the phrase "Won't you be my neighbor?" 
Code: beepBoop(5);
Expected Output: [0, 1, 2, "Won't you be my neighbor?", 4, 5]

Test: "It should return an array of numbers from 0 to the user's input, and replace all numbers that include a 2, but not a 3 with the word "Beep". 
Code: beepBoop(2);
Expected Output: [0, 1, Boop]

Test: "It should return an array of numbers from 0 to the user's input, and replace all numbers that include a 1, but not a 2 or 3 with the word "Boop" 
Code: beepBoop(1);
Expected Output: [0, Beep]

Test: "It should return an array of numbers from 0 to the user's input, and replace all numbers with the correct outputs in cascading order starting with 3's, then 2's, and then 1's. 
Code: beepBoop(5);
Expected Output: [0, Beep, Boop, "Won't you be my neighbor?", 4, 5]
Code: beepBoop(13)
Expected Output: [0, Beep, Boop, "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, Beep, Beep, Boop, "Won't you be my neighbor?"]

## Setup/Installation Requirements

* Navigate to your preferred code editing software. 
* Clone this repository to your desktop by using the command *git clone* followed by this link https://github.com/jakeedgar/mr-robogers-neighbor
* Navigate to the top level of the directory. 
* Open index.html in your browser. 
* Enter any number into the empty form to see the function in action.

## Known Bugs

* There are no known bugs at this time.

## Questions, Comments or Concerns
* Please email me at jakeedgar1012@gmail.com with any inquires or comments. Thank you. 

## License

Licensed under the [MIT License](LICENSE).
Copyright (c) 2022 Jake Edgar