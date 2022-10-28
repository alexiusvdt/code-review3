# Mr. Roboger's'Neighborhood

#### By Alex Johnson

#### a short code review project for javascript (week 3)

## Technologies Used

* HTML
* CSS
* JavaScript

## Description
Won't you be my neighbor? Mr. Roboger replaces numbers containing 1, 2, or 3 according to a specific hierarchy: 
  * 3 takes precedence over 2 & 1
  * 2 takes precedence over 1
  * 1 is lowest priority
That is:  13 -> "...my neighbor?"
          12 -> "Boop!"
          23 -> "...my neighbor?"
          21 -> "Boop!"

Check out the live [github pages site](https://alexiusvdt.github.io/code-review3/)

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.

## TESTS
Describe: userInputArray()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: userInputArray(5)
Expected Output: [0, 1, 2, 3, 4, 5]

Describe: beepBooper()

Test: "It should replace inputs containing 1's with "Beep!"
Code: beepBooper(inputArray), inputArray = [0 through 11]
Expected output: [0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"]

Test: "it should replace inputs containing 2's with "Boop!"
Code: beepBooper(inputArray), inputArray = [0 through 12]
Expected output: [0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"]

Test: "It should replace inputs containing 3's with "Won't you be my neighbor?"
Code: beepBooper(inputArray), inputArray = [0 through 13] 
Expected output = [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]

Describe validInput(countTo)

Test: "users must enter a number for the program to work"
Code: isNum (banana); isNum(193);
Expected output: (false), (true)


## Known Bugs

* If you find additional bugs not listed here, please email me at alex.johnson293@gmail.com with the subject **[_Repo Name_] Bug** and include:
  * BUG: _A brief description of the bug_
  * FIX: _Suggestion for solution (if you have one!)_
  * If you'd like to be credited, please also include your **_github user profile link_**

## Additional thanks

* W3 schools
* developer.mozilla.org
* mdbootstrap.com
* Susuwatari - feline debugger extraordinaire and moral support


## License
MIT License

Copyright (c) 2022 Alex Johnson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.